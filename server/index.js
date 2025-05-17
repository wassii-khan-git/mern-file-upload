import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import Connection from  './connection/connection.js';

const PORT_NUMBER = 8080;

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

// routes
app.use('/', routes);

// Listening
app.listen(PORT_NUMBER, () => console.log(`Server is running on port number: ${PORT_NUMBER}`))

// connections
Connection();
