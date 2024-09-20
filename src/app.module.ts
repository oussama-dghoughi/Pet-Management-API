import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Animal } from './entities/animal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pet_management',
      entities: [Person, Animal],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Person, Animal]),
  ],
})
export class AppModule {}
