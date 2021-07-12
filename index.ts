import Server from './classes/server'
import mongoose  from 'mongoose';

import bodyParser from 'body-parser';
import fileUploap from 'express-fileupload'
import cors from 'cors';

import userRoutes from './routes/usuario';
import postRoutes from './routes/post';


const server = new Server();

// bodyParser es el middleware

server.app.use( bodyParser.urlencoded({extended: true}) );
server.app.use( bodyParser.json() );


//File Upload
server.app.use( fileUploap({ useTempFiles: true }) );


//configurar cors

server.app.use(cors( { origin: true, credentials: true } ) )


// server.app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });



// rutas de la aplicacion
server.app.use('/user', userRoutes );
server.app.use('/posts', postRoutes );


// conectar BD
mongoose.connect('mongodb://localhost:27017/fotosgram',
                 { useCreateIndex: true }, ( err ) => {
    if( err ) throw err;
    console.log('Base de Datos ONline');
});



// levantar express

server.start( () => {
    console.log(`Servidor corriendo en puerto ${ server.port }`);
} )
