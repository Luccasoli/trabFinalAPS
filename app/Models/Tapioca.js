"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Produto = use("App/Models/Produto");
const Database = use("Database");

class Tapioca extends Model {
  static async create({ Valor, Descricao, Disponibilidade, Recheio }) {
    const produto = await Produto.create({ Valor, Descricao, Disponibilidade });
    const tapioca = await super.create({
      Recheio,
      CodProduto: produto.primaryKeyValue
    });

    return Database.table("tapiocas")
      .innerJoin("produtos", "tapiocas.CodProduto", "produtos.id")
      .where("tapiocas.id", tapioca.primaryKeyValue);
  }

  static async all() {
    return Database.table("tapiocas").innerJoin(
      "produtos",
      "tapiocas.CodProduto",
      "produtos.id"
    );
  }
}

module.exports = Tapioca;
