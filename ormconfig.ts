import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { CategorySeeder } from './src/database/seeds/category.seed';

dotenv.config();


const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: ['src/modules/**/*.entity{.ts,.js}'],
  seeds: [CategorySeeder]
};

export const dataSource = new DataSource(options);
