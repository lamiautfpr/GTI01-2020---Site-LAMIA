import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import './database';
import routes from './routes';

class App {
  constructor() {
    dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
