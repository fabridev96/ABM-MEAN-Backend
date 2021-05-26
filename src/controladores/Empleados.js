const Empleados = {};

const EmpleadosModelo = require('../modelos/EmpleadosModelo');

Empleados.obtenerEmpleados = async (req, res) => {

    const empleados = await EmpleadosModelo.find();
    res.json(empleados);

}

Empleados.obtenerEmpleado = async (req, res) => {

    const empleado = await EmpleadosModelo.findOne({_id: req.params.id});
    res.send(empleado);

}

Empleados.crearEmpleado = async (req, res) => {

    req.body.usuario = req.body.usuario.replace(/ /g, "");

    const nuevoEmpleado = new EmpleadosModelo(req.body);

    var guardar = await nuevoEmpleado.save()
        .then(() => res.send(nuevoEmpleado._id))
}

Empleados.borrarEmpleado = async (req, res) => {

    await EmpleadosModelo.findByIdAndDelete(req.params.id);
    res.json({mensaje: "Empleado eliminado"});

}

Empleados.actualizarEmpleado = async (req, res) => {

    await EmpleadosModelo.findByIdAndUpdate(req.params.id, req.body);
    const empleado = await EmpleadosModelo.findOne({_id: req.params.id});
    res.send(empleado);

}

module.exports = Empleados;