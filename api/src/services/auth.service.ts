import {repository} from "@loopback/repository";
// Modelo
import {Usuario} from "../models";
// Repository
import {UsuarioRepository} from "../repositories";

export class AuthService {
  constructor(@repository(UsuarioRepository)
  public usuarioRepository: UsuarioRepository) {}
  // Validacion
  async Identify(username: string): Promise<Usuario | false> {
    let usuario = await this.usuarioRepository.findOne({where: {nombre: username}});
    if (usuario) {
      return usuario;
    }
    return false;
  }
}
