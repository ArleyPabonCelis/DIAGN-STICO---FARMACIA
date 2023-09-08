// Importaciones
const Medicamento  = require('../models/Medicamento.js')

// funciones HTTP
const getMedicamento = async (req, res) => {
    Medicamento.find()
        .then(medicamentos => {
            res.json(medicamentos);
        })
        .catch(error => {
            res.status(500).json({error : "Error"})
        });
}


//Exportar funciones HTTP
module.exports = {
    getMedicamento
}