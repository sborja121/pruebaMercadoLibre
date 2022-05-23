'use stricit'
//Importamos las variables requeridas
const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash');

//Importamos la clase de las validaciones
const validate = require("./includes/index.js");

//Subimos el api en el puerto 3009
const port = process.env.PORT || 3009

//Instanciamos las clases
const validation = new validate()
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/mutant', (req, res) => {

    //Validamos si la variable se encuentra definida
    if (typeof req.body.dna === 'undefined') {
        res.send({ message: `Error! No se recibio el DNA` })
    } else {
        let dna = req.body.dna;

        //Validamos si es un array de datos lo que se envia por parametros
        if (_.isArray(dna)) {

            //Enviamos la respuesta pedida
            if (validation.search(dna) < 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }

        } else {
            res.send({ message: `Error! No se recibio un mapa de datos para verificar` })
        }
    }
})

app.listen(port, () => {
    console.log(`API REST CORRIENDO EN EL PUERTO :${port}`)
})






