const { response } = require('express');

const getHospitales = (req, res = response) => {

  res.json({
    ok: true,
    msg: 'hospitales'
  });

}

const crearHospital = (req, res = response) => {

  res.json({
    ok: true,
    msg: 'creahospitales'
  });

}

const actualizarHospital = (req, res = response) => {

  res.json({
    ok: true,
    msg: 'acthospitales'
  });

}


const borrarHospital = (req, res = response) => {

  res.json({
    ok: true,
    msg: 'borrarhospitales'
  });

}


module.exports = {
  getHospitales,
  crearHospital,
  actualizarHospital,
  borrarHospital
}
