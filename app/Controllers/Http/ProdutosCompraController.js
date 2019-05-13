'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProdutoCompra = use("App/Models/ProdutosCompra");

class ProdutosCompraController {
  /**
   * Show a list of all produtoscompras.
   * GET produtoscompras
   */
  async index ({ request, response, view }){} 

  
  /**
   * Create/save a new produtoscompra.
   * POST produtoscompras
   */
  async store ({ request, response }) {
    const { data, status, valor, cliente, funcionario, cartao, cod_produto, quantidade } = request.body;

    const produtocompra = await ProdutoCompra.crete({
      data,
      status,
      valor, 
      cliente,
      funcionario,
      cartao,
      cod_produto,
      quantidade
    });

    return produtocompra;
  }

  /**
   * Display a single produtoscompra.
   * GET produtoscompras/:id
   */
  async show ({ params, request, response, view }) {}

  /**
   * Update produtoscompra details.
   * PUT or PATCH produtoscompras/:id
   */
  async update ({ params, request, response }) {
    const produtocompra = await ProdutoCompra.findOrFail(params.id);
    const { data, status, valor, cliente, funcionario, cod_produto, quantidade } = request.body;

    await produtocompra.compras().update({ data, status, valor, cliente, funcionario, cartao });
    produtocompra.merge({cod_compra});
    await produtocompra.save();

    let compra = await produtocompra.compras().fetch();

    return{
      id: produtocompra.id,
      data: compras.data,
      status: compras.status,
      valor: compras.valor,
      cliente: compras.cliente,
      funcionario: compras.funcionario,
      cod_produto: produtocompra.cod_produto,
      quantidade: produtocompra.quantidade
    };
  }

  /**
   * Delete a produtoscompra with id.
   * DELETE produtoscompras/:id
   */
  async destroy ({ params, request, response }) {
    const produtocompra = await ProdutoCompra.findOrFail(params.id);

    produtocompra.delete();
  }
}

module.exports = ProdutosCompraController
