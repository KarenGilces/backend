import { Sequelize } from 'sequelize';
import {DB_CONNECTION, DB_USERNAME, DB_PASSWORD,DB_HOST,DB_DATABASE} from '../config/config.js';
// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'mysql' // Asegúrate de tener el dialecto correcto para tu base de datos
    }
);

















