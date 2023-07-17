const http = require('http');
const { stringify } = require('querystring');

// Creamos server
// Se suele hacer con request y response
// Request es lo que se esta solicitando de parte del cliente
// Response es lo que le devolvemos al usuario
http.createServer((request, response) => {
    response.write('Hola mundo');

    // Para mandar un status
    // Podemos regresar texto plano
    // res.writeHead(200, {'Content-Type': 'text/plain'});

    // Tambien podemos mandar un JSON
    // response.writeHead(200, {'Content-Type': 'application/json'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Diego'
    // }

    // response.write(JSON.stringify(persona));


    // Incluso se puede mandar un CSV
    // Indicar que se va a descargar un archivo
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // response.writeHead(200, { 'Content-Type': 'application/csv' });
    // response.write(('id', 'nombre\n'));
    // response.write(('1', 'Diego\n'));
    // response.write(('2', 'Aaron\n'));
    // response.write(('3', 'Juan\n'));
    // response.write(('4', 'Pedro\n'));





    // Para indicar que terminamos la respuesta
    response.end();
})
    .listen(8080);
// Para especificar un puerto para desplegar
// 8080 es comun para pruebas

console.log('Escuchando el puerto', 8080);