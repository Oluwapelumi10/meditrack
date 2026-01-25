import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {

    @Get('protected')
    @UseGuards(JwtAuthGuard)
    protectedRoute(@Req() req: any) {
        return {
            message: 'You are authenticated',
            user: req.user,
        };
    }
}
