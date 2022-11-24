import { evalENVBoolean } from '../../../utils';
import { PostgreSQLConfig } from '../../../dataTypes/PostgreSQLConfig';
import 'dotenv/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const dbConfig: PostgreSQLConfig = {
    name: process.env.NODE_ENV || 'dev',
    host: process.env.DB_HOST || 'localhost',
    port: +(process.env.BD_PORT || 5432),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'postgres',
    schema: process.env.DB_SCHEMA || 'public',
    synchronize: process.env.DB_SYNC ? evalENVBoolean(process.env.DB_SYNC) : true,
    logging: process.env.DB_LOGGING ? evalENVBoolean(process.env.DB_LOGGING) : true,
};

export const appDataSource = TypeOrmModule.forRoot({
    type: 'postgres',
    name: dbConfig.name,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    synchronize: dbConfig.synchronize,
    schema: dbConfig.schema,
    logging: dbConfig.logging,
    autoLoadEntities: true,
});
