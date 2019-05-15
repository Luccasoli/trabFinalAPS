"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with compras
 */

const Compra = use("App/Models/Compra");

class CompraController {
  /**
   Mostra todas as compras
   GET compras
  */
  async index ({ request, response, view }) {
    return await Compra.all();
  }

  /**
   * Create/save a new compra.
   * POST compras
   */
  async store ({ request, response }) {
    const { data, status, valor, cliente, funcionario } = request.body;

    const compra = await Compra.create({data, status, valor, cliente, funcionario });

    return compra;

  }

  /**
   * Mostra compras de um cliente.
   * GET compras/:id
   */
  async show ({ params, request, response, view }) {
    const compra = await compras.findOrFail(params.id);
    const {id, data, valor, funcionario, cartao};
    let cliente = await compras.cliente().fetch();

    return{
      id,
      data,
      valor,
      funcionario,
      cartao,
      nome: cliente.nome,
      cpf: cliente.cpf
    };
  }

  /**
   * Update compra details.
   * PUT or PATCH compras/:id
   */
  async update ({ params, request, response }) {
    const compra = await compras.findOrFail(params.id);
    const { data, status, valor, cliente, funcionario, cartao } = request.body;

    return { 
      id: compras.id,
      data: compras.data,
      status: compras.status,
      valor: compras.valor,
      cliente: compras.cliente, 
      funcionario: compras.funcionario,
      cartao: compras.cartao
    };
  }

  /**
   * Delete a compra with id.
   * DELETE compras/:id
   */
  async destroy ({ params, request, response }) {
    const compra = await compras.findOrFail(params.id);

    compra.delete();
  }
}

module.exports = CompraController
