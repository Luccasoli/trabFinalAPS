"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tapioca = use("App/Models/Tapioca");

class TapiocaController {
  /*
    Retorna todas as tapiocas
  */
  async index({ request, response, view }) {
    return await Tapioca.all();
  }

  /*
    Armazena uma tapioca
  */
  async store({ request, response }) {
    const { valor, descricao, disponibilidade, recheio } = request.body;

    const tapioca = await Tapioca.create({
      valor,
      disponibilidade,
      recheio,
      descricao
    });

    return tapioca;
  }

  /*
    Retorna uma única tapioca
  */
  async show({ params, request, response, view }) {}

  /*
    Atualiza uma tapioca
  */
  async update({ params, request, response }) {}

  /*
    Exclui uma tapioca
  */
  async destroy({ params, request, response }) {}
}

module.exports = TapiocaController;
