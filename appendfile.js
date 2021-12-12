const fs = require ('fs');

fs.appendFile('archivoCreadoDesdeJs.txt','Este es un archivo txt creado desde el servidor con Js',function(err){
    if(err) throw err;
    console.log('Guardado!');
});