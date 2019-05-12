"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Funcionario = use("App/Models/Funcionario");

class FuncionarioController {
  /*
    Retorna todos os funcionários
  */
  async index({ request, response, view }) {
    return await Funcionario.all();
  }

  /*
    Armazena um funcionário
  */
  async store({ request, response }) {
    const { nome, email, senha } = request.body;

    const funcionario = await Funcionario.create({
      nome,
      email,
      senha
    });

    return funcionario;
  }

  /*
    Retorna um único funcionário
  */
  async show({ params, request, response, view }) {
    const funcionario = await Funcionario.findOrFail(params.id);
    const { id, created_at, updated_at } = funcionario;
    let usuario = await funcionario.usuario().fetch();

    return {
      id,
      created_at,
      updated_at,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha
    };
  }

  /*
    Atualiza um funcionário
  */
  async update({ params, request, response }) {}

  /*
    Exclui um funcionário
  */
  async destroy({ params, request, response }) {
    const funcionario = await Funcionario.findOrFail(params.id);

    funcionario.usuario().delete();
    funcionario.delete();
  }
}

module.exports = FuncionarioController;
