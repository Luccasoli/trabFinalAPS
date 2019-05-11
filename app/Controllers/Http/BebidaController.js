"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Bebida = use("App/Models/Bebida");

class BebidaController {
  /*
    Retorna todas as bebidas
  */
  async index({ request, response, view }) {
    return await Bebida.all();
  }

  /*
    Armazena uma bebida
  */
  async store({ request, response, view }) {
    const { Valor, Descricao, Disponibilidade, Tipo } = request.body;

    const bebida = await Bebida.create({
      Valor,
      Disponibilidade,
      Tipo,
      Descricao
    });

    return bebida;
  }

  /*
    Retorna uma única bebida
  */
  async show({ params, request, response, view }) {}

  /*
    Atualiza uma bebida
  */
  async update({ params, request, response }) {}

  /*
    Exclui uma bebida
  */
  async destroy({ params, request, response }) {}
}

module.exports = BebidaController;
