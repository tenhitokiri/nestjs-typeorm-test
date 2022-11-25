import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const PORT = process.env.PORT || '3000';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Test Micro Service')
        .setDescription('The test Micro Service API description')
        .setVersion('1.0')
        .addTag('test')
        .addTag('users')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT).then(() => console.log(`App Running in port ${PORT}`));
}
bootstrap();
