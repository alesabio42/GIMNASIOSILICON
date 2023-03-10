const express= require('express');
const router = express();
// libreria que utilizaremos para la encriptacion de los password
const bcrypt= require('bcrypt');
// libreria que utilizaremos para la generacion de nuesrto token
const jwt= require('jsonwebtoken');
//////archivo de coneccion
const mysqlConeccion = require('../database/database');
//////fin archivo de coneccion

///////ruta raiz
router.get('/', (req, res)=>{
    res.send('');
});


//--------------------------------------------------------ALUMNOS-----------------------------------------------------------
//--------------------------------------------------------ALUMNOS-----------------------------------------------------------
//--------------------------------------------------------ALUMNOS-----------------------------------------------------------
// OBTENER ALUMNOS
router.get('/alumnos', verificarToken, (req, res)=>{

    jwt.verify(req.token, 'siliconKey', (error)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const query='select * from alumnos';
            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            })
        }
    });    
});


// BUSCAR ALUMNOS
router.post('/buscar_alumnos', (req, res)=>{
    
    let {apellido, dni, sexo, nombre }=req.body  

            var query='select * from alumnos where 1 ';
            if(apellido){
                query=query +`AND apellido like '%${apellido}%'`;
            }
            if(nombre){
                query=query +`AND nombre like '%${nombre}%'`;
            }

            if(dni){
                query=query +`AND dni like '%${dni}%'`;
            }

            if(sexo){
                query=query +`AND sexo = '${sexo}'`;
            }
            // console.log(query);

            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    // console.log(rows);
                    res.json(rows);
                }else{
                    console.log(err)
                }
            })
        
        
});

// CAMBIAR DE ESTADO A LOS ALUMNOS
router.put('/cambioestadoalumno/:id', (req, res)=>{
    let id  = req.params.id;
    let estado=req.body.estado  
    
    let query=`UPDATE alumnos SET estado='${estado}' WHERE id_alumno='${id}'`;
    mysqlConeccion.query(query, (err, registros)=>{
       if(!err){
           res.json({
               status: true,
               mensaje:"El estado del alumno se cambio correctamente"
           });
       }else{
           res.json({
               status: false,
               mensaje:"Hubo un error"
           });
       }
   })
   
});

// OBTENER UN ALUMNO POR ID
router.get('/alumnos/:id_alumno', (req, res)=>{
    const  parametro  = req.params.id_alumno;
    if(esNumero(parametro)){
        res.json(
            {
                status: false,
                mensaje:"El parametro que se espera tiene ser un numero entero"
            });
    }else{
                mysqlConeccion.query('select *, DATE_FORMAT(fecha_nacimiento, "%Y-%m-%d") as fecha_formateada from alumnos where id_alumno=?',[parametro], (err, rows)=>{
                    if(!err){
                        if(rows.length!=0){
                            res.json(rows);
                        }else{
                            res.json(
                                {
                                    status: false,
                                    mensaje:"El ID del alumno no existe en la base de datos."
                                });
                        }    
                    }else{
                        res.json(
                        {
                            status: false,
                            mensaje:"Error en el servidor."
                        });
                    }
                });
                
            }
})

// INSERTAR ALUMNO
router.post('/alumnos', (req, res)=>{
    const { apellido, nombre, dni, fecha_nacimiento, sexo, clase, estado_civil } = req.body
    
            let query=`INSERT INTO alumnos (apellido, nombre, dni, sexo,fecha_nacimiento, estado, fecha_creacion, clase, estado_civil) VALUES ('${apellido}','${nombre}','${dni}','${sexo}','${fecha_nacimiento}', 'A', NOW(),'${clase}','${estado_civil}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro alumno: '+apellido+' '+nombre);
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});


// ELIMINAR REGISTRO DE UN ALUMNO
router.delete('/alumnos/:id',verificarToken ,(req, res)=>{
    let id_alumno  = req.params.id; 
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            let query=`DELETE FROM alumnos WHERE id_alumno='${id_alumno}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El alumno que ELIMINAMOS es ID : '+id_alumno);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
 });

// EDITAR UN ALUMNO EN PARTICULAR
router.put('/alumnos/:id' , (req, res)=>{
    let id_alumno  = req.params.id;
    const { apellido, nombre, dni , fecha_nacimiento, sexo, clase, estado_civil } =req.body  
    console.log(req.body)
    let query=`UPDATE alumnos SET apellido='${apellido}', nombre='${nombre}', dni='${dni}', fecha_nacimiento='${fecha_nacimiento}', estado_civil='${estado_civil}', sexo='${sexo}', clase='${clase}', fecha_modificacion=NOW() WHERE id_alumno='${id_alumno}'`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id_alumno+' y cambiamos muchos campos!!');
        }else{
            console.log(err)
        }
    })
       
});

//---------------------------------------------------USUARIOS---------------------------------------------------------------
//---------------------------------------------------USUARIOS---------------------------------------------------------------
//---------------------------------------------------USUARIOS---------------------------------------------------------------
// OBTENER USUARIOS
router.get('/usuarios', verificarToken, (req, res)=>{

        jwt.verify(req.token, 'siliconKey', (error, valido)=>{
            if(error){
                res.sendStatus(403);
            }else{
                mysqlConeccion.query('select * from usuarios', (err, registro)=>{
                    if(!err){
                        res.json(registro);
                    }else{
                        console.log(err)
                    }
                })
            }
        })   
        
});


//LOGIN USUARIOS
router.post('/login', (req, res)=>{
    const {username, password} =req.body
    if(username!=undefined && password!=undefined){
        mysqlConeccion.query('select u.id, u.username,  u.password,  u.email, u.apellido_nombre from usuarios u where u.estado="A" AND username=?',[username], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    const bcryptPassword = bcrypt.compareSync(password, rows[0].password);
                    if(bcryptPassword){
                        jwt.sign({rows}, 'siliconKey' ,(err, token)=>{
                            res.json(
                                {
                                    status: true,
                                    datos: rows,
                                    token: token
                                });
                        }) 
                    }else{
                        res.json(
                            {
                                status: false,
                                mensaje:"La Contrase??a es incorrecta"
                            });
                    }
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El usuario no existe "
                        });
                    
                }
            }else{
                res.json(
                    {
                        status: false,
                        mensaje:"Error en el servidor"
                    });
                
            }
        });
    }else{
        res.json({
            status: false,
            mensaje:"Faltan completar datos"
        });
    }
});

// REGISTRO USUARIOS
router.post('/registro', async(req, res)=>{
    const {username, password, email, apellido_nombre} =req.body
    let hash = bcrypt.hashSync(password,10);

    let query=`INSERT INTO usuarios (username, password, email, apellido_nombre, fecha_creacion) VALUES ('${username}','${hash}','${email}','${apellido_nombre}',NOW())`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario se creo correctamente"
            });
        }else{
            res.send('Ocurrio un error desde el servidor'+err);
        }
    })
});


router.put('/resetpassword/:id', (req, res)=>{ 
     let id  = req.params.id;
     const { password } =req.body 
     let hash = bcrypt.hashSync(password,10); 
     let query=`UPDATE usuarios SET password='${hash}' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+' y cambiamos el password! Muchas gracias!');
        }else{
            console.log(err)
        }
    })

    
});

// BAJA USUARIO
router.put('/bajausuario/:id', (req, res)=>{
     let id  = req.params.id;
     let query=`UPDATE usuarios SET estado='B' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario se dio de BAJA correctamente"
            });
        }else{
            console.log(err)
        }
    })
    
});


// ALTA USUARIO
router.put('/altausuario/:id', (req, res)=>{
     let id  = req.params.id;
     let query=`UPDATE usuarios SET estado='A' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario se dio de Alta correctamente"
            });
        }else{
            console.log(err)
        }
    })
    
});


function verificarToken(req, res, next){

    const BearerHeader= req.headers['authorization']
    if(typeof BearerHeader!=='undefined'){
        const bearerToken= BearerHeader.split(" ")[1]
        req.token=bearerToken;
        next();
    }else{
         res.send('Para consultar las apis debe estar autenticado.Gracias');

    }
}

function esNumero(parametro) {
    if(!isNaN(parseInt(parametro))){
        return false
    } else {
        return true
    }
}



// -------------------------------------PARNTALLA TURNOS------------------------------------------------------------------
// -------------------------------------PARNTALLA TURNOS------------------------------------------------------------------
// -------------------------------------PARNTALLA TURNOS------------------------------------------------------------------
//FILTRO DE CUANTOS ALUMNOS HAY EN CADA CLASE//
router.get('/alumnos_clase', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'siliconKey', (error)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const query='SELECT curso.nombre, COUNT(alumnos.clase) as cantidad FROM curso LEFT JOIN alumnos ON curso.nombre = alumnos.clase AND alumnos.estado = "A" GROUP BY curso.nombre;';
            
            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            })
        }
    });    
});



// -----------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE PESOS--------------------------------
// -----------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE PESOS--------------------------------
// -----------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE PESOS--------------------------------
// 1- OBTENER
router.get('/pesos/:usuario_id', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const usuario_id = req.params.usuario_id;
            const query = `SELECT id, peso, fecha FROM registros_de_peso WHERE usuario_id = '${usuario_id}'`;

            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            });
        }
    });
});


// 2- AGREGAR REGISTRO DE PESO
router.post('/registropeso', (req, res)=>{
    const { usuario_id, peso, fecha } = req.body
    
            let query=`INSERT INTO registros_de_peso (usuario_id, peso,fecha) VALUES ('${usuario_id}','${peso}','${fecha}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro registro');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});


//  2- EDITAR REGISTRO DE PESO

// X - OBTENER DATOS DEL ID PESO A MODIFICAR

router.get('/peso/:id', (req, res)=>{
    const  parametro  = req.params.id;
    if(esNumero(parametro)){
        res.json(
            {
                status: false,
                mensaje:"El parametro que se espera tiene ser un numero entero"
            });
    }else{
        mysqlConeccion.query('SELECT peso, DATE_FORMAT(fecha, "%Y-%m-%d") as fecha_formateada FROM registros_de_peso WHERE id = ?', [parametro], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    res.json(rows);
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El ID del registro de peso no existe en la base de datos."
                        });
                }    
            }else{
                res.json(
                {
                    status: false,
                    mensaje:"Error en el servidor."
                });
            }
        }); 
    }
})


// X - ENVIAR DATOS DEL ID PESO A MODIFICADO
router.put('/peso/:id' , (req, res)=>{
    let id  = req.params.id;
    const { peso, fecha } =req.body  
    console.log(req.body)
    let query=`UPDATE registros_de_peso SET peso='${peso}', fecha='${fecha}' WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+'');
        }else{
            console.log(err)
        }
    })
       
});

// 3- ELIMINAR REGISTRO DE PESO
router.delete('/eliminarpeso/:id', (req, res) => {
    const id = req.params.id;
    let query = `DELETE FROM registros_de_peso WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros) => {
        if(!err) {
            res.status(200).json({ message: `El registro con id ${id} ha sido eliminado correctamente` });
        } else {
            console.error('Error al eliminar el registro: ', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    });
});








// -----------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE IMC--------------------------------
// -----------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE IMC--------------------------------
// -----------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE IMC--------------------------------
// 1- OBTENER
router.get('/imc/:usuario_id', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const usuario_id = req.params.usuario_id;
            const query = `SELECT id, imc, fecha FROM registros_de_imc WHERE usuario_id = '${usuario_id}'`;

            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            });
        }
    });
});


// 2- AGREGAR REGISTRO DE IMC
router.post('/registroimc', (req, res)=>{
    const { usuario_id, imc, fecha } = req.body
    
            let query=`INSERT INTO registros_de_imc (usuario_id, imc, fecha) VALUES ('${usuario_id}','${imc}','${fecha}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro registro');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});


//  2- EDITAR REGISTRO DE IMC

// X - OBTENER DATOS DEL ID IMC A MODIFICAR

router.get('/nimc/:id', (req, res)=>{
    const  parametro  = req.params.id;
    if(esNumero(parametro)){
        res.json(
            {
                status: false,
                mensaje:"El parametro que se espera tiene ser un numero entero"
            });
    }else{
        mysqlConeccion.query('SELECT imc, DATE_FORMAT(fecha, "%Y-%m-%d") as fecha_formateada FROM registros_de_imc WHERE id = ?', [parametro], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    res.json(rows);
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El ID del registro de imc no existe en la base de datos."
                        });
                }    
            }else{
                res.json(
                {
                    status: false,
                    mensaje:"Error en el servidor."
                });
            }
        }); 
    }
})


// X - ENVIAR DATOS DEL ID IMC MODIFICADO
router.put('/imc/:id' , (req, res)=>{
    let id  = req.params.id;
    const { imc, fecha } =req.body  
    console.log(req.body)
    let query=`UPDATE registros_de_imc SET imc='${imc}', fecha='${fecha}' WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+'');
        }else{
            console.log(err)
        }
    })
       
});

// 3- ELIMINAR REGISTRO DE IMC
router.delete('/eliminarimc/:id', (req, res) => {
    const id = req.params.id;
    let query = `DELETE FROM registros_de_imc WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros) => {
        if(!err) {
            res.status(200).json({ message: `El registro con id ${id} ha sido eliminado correctamente` });
        } else {
            console.error('Error al eliminar el registro: ', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    });
});


// -----------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE RM--------------------------------
// -----------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE RM--------------------------------
// -----------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE RM--------------------------------
// 1- OBTENER
router.get('/rm/:usuario_id', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const usuario_id = req.params.usuario_id;
            const query = `SELECT id, concepto, rm, fecha FROM registros_de_rm WHERE usuario_id = '${usuario_id}'`;

            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            });
        }
    });
});


// 2- AGREGAR REGISTRO DE RM
router.post('/registrorm', (req, res)=>{
    const { usuario_id, concepto, rm, fecha } = req.body
    
            let query=`INSERT INTO registros_de_rm (usuario_id, concepto, rm, fecha) VALUES ('${usuario_id}','${concepto}','${rm}','${fecha}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro registro');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});


//  2- EDITAR REGISTRO DE RM

// X - OBTENER DATOS DEL ID RM A MODIFICAR

router.get('/nrm/:id', (req, res)=>{
    const  parametro  = req.params.id;
    if(esNumero(parametro)){
        res.json(
            {
                status: false,
                mensaje:"El parametro que se espera tiene ser un numero entero"
            });
    }else{
        mysqlConeccion.query('SELECT concepto, rm, DATE_FORMAT(fecha, "%Y-%m-%d") as fecha_formateada FROM registros_de_rm WHERE id = ?', [parametro], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    res.json(rows);
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El ID del registro de rm no existe en la base de datos."
                        });
                }    
            }else{
                res.json(
                {
                    status: false,
                    mensaje:"Error en el servidor."
                });
            }
        }); 
    }
})


// X - ENVIAR DATOS DEL ID RM MODIFICADO
router.put('/rm/:id' , (req, res)=>{
    let id  = req.params.id;
    const { concepto, rm, fecha } =req.body  
    console.log(req.body)
    let query=`UPDATE registros_de_rm SET concepto='${concepto}', rm='${rm}', fecha='${fecha}' WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+'');
        }else{
            console.log(err)
        }
    })
       
});

// 3- ELIMINAR REGISTRO DE RM
router.delete('/eliminarrm/:id', (req, res) => {
    const id = req.params.id;
    let query = `DELETE FROM registros_de_rm WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros) => {
        if(!err) {
            res.status(200).json({ message: `El registro con id ${id} ha sido eliminado correctamente` });
        } else {
            console.error('Error al eliminar el registro: ', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    });
});









// -----------------------------------------DICCIONARIO-------------------------------------------------------
// -----------------------------------------DICCIONARIO-------------------------------------------------------
// -----------------------------------------DICCIONARIO-------------------------------------------------------





// -----------------------------------------TERMINOS BASICOS-------------------------------------------------------
// -----------------------------------------TERMINOS BASICOS-------------------------------------------------------
// PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE TERMINOS BASICOS 
// 1- OBTENER
router.get('/terminosbasicos', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const query = `SELECT id, concepto, definicion FROM TerminosBasicos`;

            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            });
        }
    });
});


// // 2- AGREGAR REGISTRO DE TERMINOS
router.post('/terminos', (req, res)=>{
    const { concepto, definicion } = req.body
    
            let query=`INSERT INTO TerminosBasicos (concepto, definicion) VALUES ('${concepto}','${definicion}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro registro');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});


//  2- EDITAR REGISTRO DE PESO

// X - OBTENER DATOS DEL ID PESO A MODIFICAR

router.get('/termino/:id', (req, res)=>{
    const  parametro  = req.params.id;
    if(esNumero(parametro)){
        res.json(
            {
                status: false,
                mensaje:"El parametro que se espera tiene ser un numero entero"
            });
    }else{
        mysqlConeccion.query('SELECT concepto, definicion FROM TerminosBasicos WHERE id = ?', [parametro], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    res.json(rows);
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El ID no existe en la base de datos."
                        });
                }    
            }else{
                res.json(
                {
                    status: false,
                    mensaje:"Error en el servidor."
                });
            }
        }); 
    }
})


// X - ENVIAR DATOS DEL ID TERMINO A MODIFICADO
router.put('/termino/:id' , (req, res)=>{
    let id  = req.params.id;
    const { concepto, definicion } =req.body  
    console.log(req.body)
    let query=`UPDATE TerminosBasicos SET concepto='${concepto}', definicion='${definicion}' WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+'');
        }else{
            console.log(err)
        }
    })
       
});

// 3- ELIMINAR REGISTRO DE TERMINO BASICO
router.delete('/eliminartermino/:id', (req, res) => {
    const id = req.params.id;
    let query = `DELETE FROM TerminosBasicos WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros) => {
        if(!err) {
            res.status(200).json({ message: `El registro con id ${id} ha sido eliminado correctamente` });
        } else {
            console.error('Error al eliminar el registro: ', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    });
});



// -----------------------------------------MOVIMIENTOS-------------------------------------------------------
// -----------------------------------------MOVIMIENTOS-------------------------------------------------------
// -----------------------------------------MOVIMIENTOS-------------------------------------------------------
// PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE MOVIMIENTOS 
// 1- OBTENER
router.get('/movimientos', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const query = `SELECT id, concepto, definicion FROM Movimientos`;

            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            });
        }
    });
});


// 2- AGREGAR REGISTRO DE MOVIMIENTOS
router.post('/movimientos', (req, res)=>{
    const { concepto, definicion } = req.body
    
            let query=`INSERT INTO Movimientos (concepto, definicion) VALUES ('${concepto}','${definicion}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro registro');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});

//  2- EDITAR REGISTRO DE MOVIMIENTO

// X - OBTENER DATOS DEL ID MOVIMIENTO A MODIFICAR

router.get('/movimiento/:id', (req, res)=>{
    const  parametro  = req.params.id;
    if(esNumero(parametro)){
        res.json(
            {
                status: false,
                mensaje:"El parametro que se espera tiene ser un numero entero"
            });
    }else{
        mysqlConeccion.query('SELECT concepto, definicion FROM Movimientos WHERE id = ?', [parametro], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    res.json(rows);
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El ID no existe en la base de datos."
                        });
                }    
            }else{
                res.json(
                {
                    status: false,
                    mensaje:"Error en el servidor."
                });
            }
        }); 
    }
})


// X - ENVIAR DATOS DEL ID MOVIMIENTO MODIFICADO
router.put('/movimiento/:id' , (req, res)=>{
    //asigna a id el valor que recibe por el parametro 
    let id  = req.params.id;
    const { concepto, definicion } =req.body  
    console.log(req.body)
    let query=`UPDATE Movimientos SET concepto='${concepto}', definicion='${definicion}' WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+'');
        }else{
            console.log(err)
        }
    })
       
});

// 3- ELIMINAR REGISTRO DE MOVIMIENTOS
router.delete('/eliminarmovimiento/:id', (req, res) => {
    const id = req.params.id;
    let query = `DELETE FROM Movimientos WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros) => {
        if(!err) {
            res.status(200).json({ message: `El registro con id ${id} ha sido eliminado correctamente` });
        } else {
            console.error('Error al eliminar el registro: ', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    });
});





// -----------------------------------------MATERIALESS-------------------------------------------------------
// -----------------------------------------MATERIALESS-------------------------------------------------------
// -----------------------------------------MATERIALESS-------------------------------------------------------
// PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE MATERIALES
// 1- OBTENER
router.get('/materiales', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const query = `SELECT id, concepto, definicion FROM Materiales`;

            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            });
        }
    });
});


// 2- AGREGAR REGISTRO DE MATERIALES
router.post('/materiales', (req, res)=>{
    const { concepto, definicion } = req.body
    
            let query=`INSERT INTO Materiales (concepto, definicion) VALUES ('${concepto}','${definicion}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro registro');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});


//  2- EDITAR REGISTRO DE MATERIALES

// X - OBTENER DATOS DEL ID MATERIAL A MODIFICAR

router.get('/material/:id', (req, res)=>{
    const  parametro  = req.params.id;
    if(esNumero(parametro)){
        res.json(
            {
                status: false,
                mensaje:"El parametro que se espera tiene ser un numero entero"
            });
    }else{
        mysqlConeccion.query('SELECT concepto, definicion FROM Materiales WHERE id = ?', [parametro], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    res.json(rows);
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El ID no existe en la base de datos."
                        });
                }    
            }else{
                res.json(
                {
                    status: false,
                    mensaje:"Error en el servidor."
                });
            }
        }); 
    }
})


// X - ENVIAR DATOS DEL ID MATERIAL MODIFICADO
router.put('/material/:id' , (req, res)=>{
    //asigna a id el valor que recibe por el parametro 
    let id  = req.params.id;
    const { concepto, definicion } =req.body  
    console.log(req.body)
    let query=`UPDATE Materiales SET concepto='${concepto}', definicion='${definicion}' WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+'');
        }else{
            console.log(err)
        }
    })
       
});

// 3- ELIMINAR REGISTRO DE MATERIAL
router.delete('/eliminarmaterial/:id', (req, res) => {
    const id = req.params.id;
    let query = `DELETE FROM Materiales WHERE id='${id}'`;
    mysqlConeccion.query(query, (err, registros) => {
        if(!err) {
            res.status(200).json({ message: `El registro con id ${id} ha sido eliminado correctamente` });
        } else {
            console.error('Error al eliminar el registro: ', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    });
});



// -----------------------------------------CONSULTAS-------------------------------------------------------
// -----------------------------------------CONSULTAR-------------------------------------------------------
// -----------------------------------------CONSULTAS-------------------------------------------------------

// 1- AGREGAR REGISTRO DE CONSULTAS
router.post('/registroconsulas', (req, res)=>{
    const { nombre, correo, asunto, mensaje} = req.body
    
            let query=`INSERT INTO registros_de_consultas (nombre, correo, asunto, mensaje) VALUES ('${nombre}','${correo}','${asunto}','${mensaje}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro registro');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});

module.exports = router;

