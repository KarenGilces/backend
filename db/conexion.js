import { Sequelize } from 'sequelize';
import { DB_CONNECTION, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } from '../config/config.js';

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_CONNECTION,
    // Other options like port, logging, etc., can be added here
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default sequelize;














