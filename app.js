const express = require('express');
const app = express();


app.get('/obtenerUsuarios', (req, rep) => {
    const nombre = req.query.nombre;
    rep.json({nombre});
});


app.post('/obtenerUsuarios', (req, rep) => {
    rep.send("entraste a una peticion post");

});

app.listen(8882);