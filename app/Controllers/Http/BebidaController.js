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
  async store({ request, response }) {
    const { valor, descricao, disponibilidade, tipo } = request.body;

    const bebida = await Bebida.create({
      valor,
      descricao,
      disponibilidade,
      tipo
    });

    return bebida;
  }

  /*
    Retorna uma única bebida
  */
  async show({ params, request, response, view }) {

    const bebida = await Bebida.findOrFail(params.id);
    const {id, tipo} = bebida;
    let produto = await Bebida.produto().fetch();

    return{
      id,
      valor, 
      disponibilidade,
      tipo,
      descricao
    };
  }

  /*
    Atualiza uma bebida
  */
  async update({ params, request, response }) {

    const bebida = await Bebida.findOrFail(params.id);
    const {valor, descricao, disponibilidade, tipo} = request.body;

    await bebida.produto().update({nome, valor, descricao});
    bebida.merge({tipo});
    await bebida.save();
    let produto = await bebida.produto().fetch();

    return { 
      id: bebida.id,
      tipo: bebida.tipo,
      valor: produto.valor,
      descricao: produto.descricao,
      disponibilidade: produto.disponibilidade
    };
  }

  /*
    Exclui uma bebida
  */
  async destroy({ params, request, response }) {
    const bebida = await Bebida.findOrFail(params.id);

    bebida.produto().delete();
    bebida.delete();
  }
}

module.exports = BebidaController;
