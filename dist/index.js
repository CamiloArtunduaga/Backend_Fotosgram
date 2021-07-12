"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const post_1 = __importDefault(require("./routes/post"));
const server = new server_1.default();
// bodyParser es el middleware
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//File Upload
server.app.use(express_fileupload_1.default({ useTempFiles: true }));
//configurar cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
// server.app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });
// rutas de la aplicacion
server.app.use('/user', usuario_1.default);
server.app.use('/posts', post_1.default);
// conectar BD
mongoose_1.default.connect('mongodb://localhost:27017/fotosgram', { useCreateIndex: true }, (err) => {
    if (err)
        throw err;
    console.log('Base de Datos ONline');
});
// levantar express
server.start(() => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});
