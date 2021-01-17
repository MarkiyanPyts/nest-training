import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'tifind96',
    database: 'taskmanagement',
    synchronize: true, //not reccomended to set to true in prod
};
