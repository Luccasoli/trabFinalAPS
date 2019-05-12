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
      descricao,
      disponibilidade,
      recheio
    });

    return tapioca;
  }

  /*
    Retorna uma única tapioca
  */
  async show({ params, request, response, view }) {

    const tapioca = await Tapioca.findOrFail(params.id);
    const {id, recheio} = tapioca;
    let produto = await Tapioca.produto().fetch();

    return{
      id,
      valor, 
      disponibilidade,
      recheio,
      descricao
    };
  }

  /*
    Atualiza uma tapioca
  */
  async update({ params, request, response }) {

    const tapioca = await Tapioca.findOrFail(params.id);
    const {valor, descricao, disponibilidade, recheio} = request.body;

    await tapioca.produto().update({nome, valor, descricao});
    tapioca.merge({recheio});
    await tapioca.save();
    let produto = await tapioca.produto().fetch();

    return { 
      id: tapioca.id,
      recheio: tapioca.recheio,
      valor: produto.valor,
      descricao: produto.descricao,
      disponibilidade: produto.disponibilidade
    };
  }

  /*
    Exclui uma tapioca
  */
  async destroy({ params, request, response }) {
    const tapioca = await Tapioca.findOrFail(params.id);

    tapioca.produto().delete();
    tapioca.delete();
  }
}

module.exports = TapiocaController;
