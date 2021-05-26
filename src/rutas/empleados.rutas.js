const { Router } = require('express');

const router = Router();

const Empleados = require('../controladores/Empleados');

router.get('/', Empleados.obtenerEmpleados);

router.post('/', Empleados.crearEmpleado);

router.get('/:id', Empleados.obtenerEmpleado);

router.put('/:id', Empleados.actualizarEmpleado);

router.delete('/:id', Empleados.borrarEmpleado);

module.exports = router;