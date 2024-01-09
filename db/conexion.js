import { Sequelize } from 'sequelize';
import {
  DB_CONNECTION,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DATABASE,
} from '../config/config.js';

// Validar que todas las variables de entorno requeridas estén presentes
if (
  !DB_CONNECTION ||
  !DB_USERNAME ||
  !DB_PASSWORD ||
  !DB_HOST ||
  !DB_DATABASE
) {
  throw new Error('Faltan variables de entorno requeridas para la conexión a la base de datos.');
}

// Crear instancia de Sequelize usando las variables de entorno
export const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_CONNECTION,
  // Otros ajustes opcionales, como el puerto, pool, etc.
});











