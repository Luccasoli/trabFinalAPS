"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Usuario = use("App/Models/Usuario");
const Database = use("Database");

class Cliente extends Model {
  usuario() {
    return this.belongsTo("App/Models/Usuario", "cod_usuario", "id");
  }

  static async all() {
    return Database.table(super.table)
      .select(
        `${super.table}.id`,
        `${super.table}.cpf`,
        `${super.table}.created_at`,
        `${super.table}.updated_at`,
        "usuarios.nome",
        "usuarios.email",
        "usuarios.senha"
      )
      .innerJoin("usuarios", `${super.table}.cod_usuario`, "usuarios.id")
      .orderBy(`${super.table}.id`, "asc");
  }

  static async create({ nome, email, senha, cpf }) {
    let cliente;
    let usuario = await Usuario.create({ nome, email, senha });

    try {
      cliente = await super.create({
        cod_usuario: usuario.primaryKeyValue,
        cpf
      });
    } catch (e) {
      // Se o cpf não for único, o usuário criado será excluído
      await usuario.delete();
    }

    return Database.table(`${super.table}`)
      .select(
        `${super.table}.id`,
        `${super.table}.cpf`,
        `${super.table}.created_at`,
        `${super.table}.updated_at`,
        "usuarios.nome",
        "usuarios.email",
        "usuarios.senha"
      )
      .innerJoin("usuarios", `${super.table}.cod_usuario`, "usuarios.id")
      .where(`${super.table}.id`, cliente.primaryKeyValue)
      .orderBy(`${super.table}.id`, "asc");
  }
}

module.exports = Cliente;
