import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){
        
    }

    async cekUser(username, password){
        let user = await this.userService.findUsername(username)
        if(user){
            const valid = this.userService.compare(password, user.password)
            if(valid){
                return user
            }

            throw new BadRequestException({message: "Password Salah"})
        }

        throw new BadRequestException({meesage: "Username tidak ditemukan"})
    }

    generateToken(user:any){
        let dataToken = {id: user.id}
        let token = this.jwtService.sign(dataToken)
        return {token: token}
    }
}