"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with usuario
 */

const Usuario = use("App/Models/Usuario");

class UsuarioController {
  async getAll({ request, response }) {
    return await Usuario.all();
  }

  async store({ request, response }) {
    const { nome, email, senha } = request.body;

    // const usuario = await Usuario.Create(
    //   { nome: "virk" },
    //   { senha: "virk", email: "virk@adonisjs.com" }
    // );
  }

  async getOne({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async delete({ params, request, response }) {}
}

module.exports = UsuarioController;
