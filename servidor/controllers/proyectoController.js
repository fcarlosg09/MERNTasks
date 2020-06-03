const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearProyecto = async (req, res) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

    try {

        //Crear proyecto
        const proyecto = new Proyecto(req.body);

        proyecto.creador = req.usuario.id;

        proyecto.save();
        res.json(proyecto);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Obtener todos los proyectos por usuario

exports.obtenerProyectos = async(req, res) =>{
    try {
        const proyectos = await Proyecto.find({creador: req.usuario.id}).sort({fechaCreado: -1});
        res.json(proyectos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualizar un proyecto

exports.actualizarProyecto = async(req, res) =>{
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

    const { nombre } = req.body;
    const nuevoProyecto = {};
    if(nombre)
        nuevoProyecto.nombre = nombre;

    try {
        //Revisar el ID
        let proyecto = await Proyecto.findById(req.params.id);        
        //Si el proyecto existe
        if(!proyecto){
            res.status(404).json({msg: 'Proyecto no encontrado'});
        }

        //Verificar el creador del proyecto    
        if(proyecto.creador != req.usuario.id){
            return res.status(404).json({msg: 'No autorizado'});
        }

        //actualizar
        proyecto = await Proyecto.findOneAndUpdate({ _id: req.params.id}, { $set : nuevoProyecto}, {new: true});
        res.json({proyecto});
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}