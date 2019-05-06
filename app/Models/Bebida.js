"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Produto = use("App/Models/Produto");
const Database = use("Database");

class Bebida extends Model {
  static async create({ Valor, Descricao, Disponibilidade, Tipo }) {
    const produto = await Produto.create({ Valor, Descricao, Disponibilidade });
    const bebida = await super.create({
      Tipo,
      CodProduto: produto.primaryKeyValue
    });

    return Database.table("bebidas")
      .innerJoin("produtos", "bebidas.CodProduto", "produtos.id")
      .where("bebidas.id", bebida.primaryKeyValue);
  }

  static async all() {
    return Database.table("bebidas").innerJoin(
      "produtos",
      "bebidas.CodProduto",
      "produtos.id"
    );
  }
}

module.exports = Bebida;
