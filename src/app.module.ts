import { dbConfig } from './shared/infrastructure/persistance/postgreSQL/PostgresDataSource';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './context/users/users.module';

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forRoot({
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
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
