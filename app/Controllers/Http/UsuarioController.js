"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with usuario
 */

const Usuario = use("App/Models/Usuario");

class UsuarioController {
  /*
    Retorna todos os usuários
  */
  async index({ request, response }) {
    return await Usuario.all();
  }

  /*
    Armazena um usuário
  */
  async store({ request, response }) {
    const { Nome, Email, Senha } = request.body;

    const usuario = await Usuario.create({ Nome, Email, Senha });

    return usuario;
  }

  /*
    Retorna um único usuário
  */
  async show({ params, request, response, view }) {}

  /*
    Atualiza um usuário
  */
  async update({ params, request, response }) {}

  /*
    Exclui um usuário
  */
  async destroy({ params, request, response }) {}
}

module.exports = UsuarioController;
