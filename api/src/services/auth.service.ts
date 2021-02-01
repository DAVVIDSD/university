import {repository} from '@loopback/repository';
// Modelo
import {Usuario} from '../models';
// Repository
import {UsuarioRepository} from '../repositories';

export class AuthService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) {}
  // Validacion
  async Identify(email: string, password: string): Promise<Usuario | false > {
    let usuario = await this.usuarioRepository.findOne({where: {email: email}});
    if (usuario) {
      console.log(usuario)
      if (usuario.password === password) {return usuario};
      // return usuario
    }
    return false;
  }
}
