import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Obtener las variables de entorno requeridas
const {
  DB_CONNECTION,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DATABASE,
} = process.env;

// Validar que todas las variables de entorno requeridas estén presentes
if (!DB_CONNECTION || !DB_USERNAME || !DB_PASSWORD || !DB_HOST || !DB_DATABASE) {
  throw new Error('Faltan variables de entorno requeridas para la conexión a la base de datos.');
}

// Crear instancia de Sequelize usando las variables de entorno
export const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_CONNECTION,
  // Otros ajustes opcionales, como el puerto, pool, etc.
});
