'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProdutoAcompanhado = use("App/Models/ProdutosAcompanhado");

/**
 * Resourceful controller for interacting with produtosacompanhados
 */
class ProdutosAcompanhadoController {
  /**
   * Show a list of all produtosacompanhados.
   * GET produtosacompanhados
   */
  async index ({ request, response, view }) {
    return await ProdutoAcompanhado.all();
  }

  /**
   * Create/save a new produtosacompanhado.
   * POST produtosacompanhados
   */
  async store ({ request, response }) {
    const{cliente, cod_produto} = request.body;

    const produtoAcompanhado = await ProdutoAcompanhado.create({
      cliente,
      cod_produto
    });

    return produtoAcompanhado;
  }

  /**
   * Produtos Acompanhados de um cliente.
   * GET produtosacompanhados/:id
   */
  async show ({ params, request, response, view }) {
    const produtoAcompanhado = await ProdutoAcompanhado.findOrFail(params.cliente);
    const {id, cliente, cod_produto} = produtoAcompanhado;
    let cliente = await produtoAcompanhado.cliente().fetch();
    let produto = await produtoAcompanhado.produto().fetch();

    return{
      id,
      cliente,
      cod_produto,
      nome: cliente.nome,
      produto: produto.descricao
    };
  }

  /**
   * Update produtosacompanhado details.
   * PUT or PATCH produtosacompanhados/:id não sei se att produtos acompanhados
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a produtosacompanhado with id.
   * DELETE produtosacompanhados/:id
   */
  async destroy ({ params, request, response }) {
    const produtoAcompanhado = await ProdutoAcompanhado.findOrFail(params.id);

    produtoAcompanhado.delete();
  }
}

module.exports = ProdutosAcompanhadoController
