import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const isPasswordMatch = compareSync(password, user.password);
    if (!isPasswordMatch)
      throw new UnauthorizedException('Invalid credentials');
    return { id: user.id };
  }
}
