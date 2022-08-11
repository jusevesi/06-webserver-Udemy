
const http = require('http');

http.createServer( (req, res) => {

    
    // res.writeHead(200, {'Content-Type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'});
    
    
    res.write( 'id, nombre\n');
    res.write( '1, Fernando\n');
    res.write( '2, Juan\n');
    res.write( '3, Paola\n');
    res.write( '4, Maria\n');
    res.end();
 

} )
.listen( 8080 );

console.log('Escuchando el puerto', 8080);