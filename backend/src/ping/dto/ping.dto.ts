import { IsString, IsNotEmpty } from 'class-validator';

export class PingDto {
    @IsString()
    @IsNotEmpty()
    message: string;
}
