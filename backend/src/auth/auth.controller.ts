import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    async login(@Body() dto: LoginDto): Promise<{ accessToken: string }> {
        return this.authService.login(dto.username, dto.password);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('superadmin')
    @Get('admin-only')
    adminOnlyRoute() {
        return {
            status: 'ok',
            service: 'auth',
            level: 'superadmin',
        };
    }
}