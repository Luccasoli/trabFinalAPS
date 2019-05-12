"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cliente = use("App/Models/Cliente");

class ClienteController {
  /*
    Retorna todos os clientes
  */
  async index({ request, response, view }) {
    return await Cliente.all();
  }

  /*
    Armazena um cliente
  */
  async store({ request, response }) {
    const { nome, email, senha, cpf } = request.body;

    const cliente = await Cliente.create({
      nome,
      email,
      senha,
      cpf
    });

    return cliente;
  }

  /*
    Retorna um único cliente
  */
  async show({ params, request, response, view }) {
    const cliente = await Cliente.findOrFail(params.id);
    const { id, cpf, created_at, updated_at } = cliente;
    let usuario = await cliente.usuario().fetch();

    return {
      id,
      cpf,
      created_at,
      updated_at,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha
    };
  }

  /*
    Atualiza um cliente
  */
  async update({ params, request, response }) {}

  /*
    Exclui um cliente
  */
  async destroy({ params, request, response }) {
    const cliente = await Cliente.findOrFail(params.id);

    cliente.usuario().delete();
    cliente.delete();
  }
}

module.exports = ClienteController;
