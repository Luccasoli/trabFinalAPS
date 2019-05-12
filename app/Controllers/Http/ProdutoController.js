'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with produtos
 */

const Produto = use("App/Models/Produto");

class ProdutoController {
  /*Retorna Lista de Produtos*/
  async index ({ request, response, view }) {
    return await Produto.all()
  }

  /**
   Armazena um produto
   */
  async store ({ request, response }) {

    const{valor, descricao, disponibilidade} = request.body;

    const produto = await Produto.create({valor, descricao, disponibilidade});

    return produto;
  }

  /**
    Mostra um produto
   */
  async show ({ params, request, response, view }) {
  }

  /**
  
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a produtos with id.
   * DELETE produtos/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProdutoController
