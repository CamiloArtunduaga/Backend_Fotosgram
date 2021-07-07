"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.default();
// bodyParser es el middleware
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// rutas de la aplicacion
server.app.use('/user', usuario_1.default);
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