import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PingModule } from './ping/ping.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        HealthModule,
        PingModule,
        AuthModule,
    ],
})
export class AppModule {}
