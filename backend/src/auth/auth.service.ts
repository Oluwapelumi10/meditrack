import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async login(username: string, password: string): Promise<{ accessToken: string }> {
        // 🔐 MOCK USER (Phase 7)
        if (username !== 'admin' || password !== 'password') {
            throw new UnauthorizedException('Invalid credentials');
        }

        // ✅ Role-aware JWT payload
        const payload = {
            sub: 1,
            username,
            roles: ['admin'], // 👈 IMPORTANT (Phase 7)
        };

        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
