import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../user/entities/user.entity.ts';

export class FillUsersMigration1732193637498 implements MigrationInterface {
  private numberOfUsers: number;

  constructor(numberOfUsers: number = 10000) {
    this.numberOfUsers = numberOfUsers;  // По умолчанию генерируется 10,000 пользователей
  }
  public async up(queryRunner: QueryRunner): Promise<void> {



    const dataSource = queryRunner.connection;
    const userRepository = dataSource.getRepository(User);

    const users = [];
    const batchSize = 10000;

    for (let i = 0; i < this.numberOfUsers; i++) {
      users.push({
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        age: Math.floor(Math.random() * 100),
        gender: i % 2 === 0 ? 'male' : 'female',
        hasProblems: Math.random() < 0.5,
      });

      if (users.length >= batchSize) {
        await userRepository.insert(users);
        console.log(`Inserted ${i + 1} users`);
        users.length = 0;
      }
    }

    if (users.length > 0) {
      await userRepository.insert(users);
      console.log(`Inserted remaining ${users.length} users`);
    }

    console.log('Seed completed!');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const dataSource = queryRunner.connection;
    const userRepository = dataSource.getRepository(User);

    await userRepository.clear();
    console.log('Seed rollback completed!');
  }
}
