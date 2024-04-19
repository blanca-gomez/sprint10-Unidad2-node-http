/*módulo http para crear un servidor HTTP.*/
/*Importar el módulo de datos `data.js`*/
/*Puedes utilizar el método `res.end()` para escribir dentro tu HTML (con su !DOCTYPE, H1, H2... lo que creas que es necesario)con la datos de `data.js`*/

const webPageInfo = require ('./data.js');
const http = require('node:http');


const server = http.createServer((req,res) => {
    console.log('Request recive:');
    res.end(`<h1>${webPageInfo.title}</h1>
    <h2>${webPageInfo.subtitle}</h2>
    <h3>${webPageInfo.Bootcamp}</h3>
    <p>${webPageInfo.description}</p>
    <p>${webPageInfo.Url}</p>
    <p>${webPageInfo.Author}</p>`)
})

server.listen (0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})
