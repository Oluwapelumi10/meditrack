import { Body, Controller, Post } from '@nestjs/common';
import { PingDto } from './dto/ping.dto';

@Controller('ping')
export class PingController {
    @Post()
    ping(@Body() body: PingDto) {
        return {
            reply: `pong: ${body.message}`,
        };
    }
}
