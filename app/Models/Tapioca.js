"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Produto = use("App/Models/Produto");
const Database = use("Database");

class Tapioca extends Model {
  static async create({ valor, descricao, disponibilidade, recheio }) {
    const produto = await Produto.create({ valor, descricao, disponibilidade });
    const tapioca = await super.create({
      recheio,
      cod_produto: produto.primaryKeyValue
    });

    return Database.table("tapiocas")
      .innerJoin("produtos", "tapiocas.cod_produto", "produtos.id")
      .where("tapiocas.id", tapioca.primaryKeyValue);
  }

  static async all() {
    return Database.table("tapiocas").innerJoin(
      "produtos",
      "tapiocas.cod_produto",
      "produtos.id"
    );
  }
}

module.exports = Tapioca;
