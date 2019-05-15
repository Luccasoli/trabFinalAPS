'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cartao = use("App/Models/Cartao")

/**
 * Resourceful controller for interacting with cartaos
 */
class CartaoController {
  /**
   * Show a list of all cartaos.
   * GET cartaos n sei se é necessário
   */
  async index ({ request, response, view }) {
    return await Cartao.all();
  }

  /**
   * Create/save a new cartao.
   * POST cartaos
   */
  async store ({ request, response }) {
    const {numero, titular, dt_venc, tipo} = request.body;

    const cartao = await Cartao.create({
      numero, 
      titular,
      dt_venc,
      tipo
    });

    return cartao;
  }

  /**
   * Cartões de um cliente.
   * GET cartaos/:id
   */
  async show ({ params, request, response, view }) {
    const cartao = await Cartao.findOrFail(params.titular);
    const {numero, titular, dt_venc, tipo} = cartao;
    
    return{
      numero,
      titular,
      dt_venc,
      tipo
    };
  }

  /**
   * Update cartao details.
   * PUT or PATCH cartaos/:id
   */
  async update ({ params, request, response }) {
    const cartao = await Cartao.findOrFail(params.id);
    const {numero, dt_venc, titular, tipo} = request.body;

    return {
      numero,
      dt_venc,
      titular,
      tipo
    }
  }

  /**
   * Delete a cartao with id.
   * DELETE cartaos/:id
   */
  async destroy ({ params, request, response }) {
    const cartao = await Cartao.findOrFail(params.id);
    cartao.delete();
  }
}

module.exports = CartaoController
