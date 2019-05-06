"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tapioca = use("App/Models/Tapioca");

class TapiocaController {
  async index({ request, response, view }) {
    return await Tapioca.all();
  }

  async store({ request, response }) {
    const { Valor, Descricao, Disponibilidade, Recheio } = request.body;

    const tapioca = await Tapioca.create({
      Valor,
      Disponibilidade,
      Recheio,
      Descricao
    });

    return tapioca;
  }

  /**
   * Display a single tapioca.
   * GET tapiocas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing tapioca.
   * GET tapiocas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update tapioca details.
   * PUT or PATCH tapiocas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a tapioca with id.
   * DELETE tapiocas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = TapiocaController;
