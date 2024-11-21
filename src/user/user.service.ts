import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.ts';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async updateUserProblems(): Promise<number> {
    const usersWithProblemsCount = await this.userRepository.count({
      where: { hasProblems: true },
    });

    await this.userRepository.update({ hasProblems: true }, { hasProblems: false });

    return usersWithProblemsCount;
  }
}
