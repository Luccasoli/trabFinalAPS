"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Bebida = use("App/Models/Bebida");

class BebidaController {
  async index({ request, response, view }) {
    return await Bebida.all();
  }

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

  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing bebida.
   * GET bebidas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update bebida details.
   * PUT or PATCH bebidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a bebida with id.
   * DELETE bebidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = BebidaController;
