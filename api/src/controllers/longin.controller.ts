// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {repository} from '@loopback/repository';
import {post, requestBody, response} from '@loopback/rest';
import {UsuarioRepository} from "../repositories";
import {AuthService} from '../services/auth.service';

class Credentials {
  usuario: string;
}


export class LonginController {
  authService: AuthService

  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) {
    this.authService = new AuthService(this.usuarioRepository);
  }

  @post('/login')
  @response(200, {
    description: 'login usuario',
  })
  async login(
    @requestBody() credentials: Credentials
  ): Promise<object> {
    let usuario = await this.authService.Identify(credentials.usuario)
    console.log(usuario)
    return {
      data: usuario
    }
  };
}
