import { Controller, Patch } from '@nestjs/common';
import { UserService } from './user.service.ts';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch('problems/reset')
  async resetProblems(): Promise<{ updated: number }> {
    const updated = await this.userService.updateUserProblems();
    return { updated };
  }
}
