import Server from './classes/server'
import userRoutes from './routes/usuario';
import  mongoose  from 'mongoose';
import bodyParser from 'body-parser';


const server = new Server();

// bodyParser es el middleware

server.app.use( bodyParser.urlencoded({extended: true}) );
server.app.use( bodyParser.json() );

// rutas de la aplicacion
server.app.use('/user', userRoutes );

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
