import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AuthDto {
    @ApiProperty({required: true})
    @IsString()
    username: string
    
    @ApiProperty({required: true})
    @IsString()
    password: string 
}