import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto.username, dto.password);
    }

    @UseGuards(JwtAuthGuard)
    @Get('protected')
    protectedRoute() {
        return {
            status: 'ok',
            service: 'auth',
        };
    }
}
