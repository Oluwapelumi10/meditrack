import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    // 🔴 TEMPORARY – FOR TESTING ONLY
    signTestToken() {
        return this.jwtService.sign({
            sub: 1,
            email: 'test@meditrack.dev',
        });
    }
}
