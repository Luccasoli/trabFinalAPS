"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Produto = use("App/Models/Produto");
const Database = use("Database");

class Bebida extends Model {
  produto() {
    return this.belongsTo("App/Models/Produto", "cod_produto", "id");
  }

  static async all() {
    return Database.table(super.table)
      .select(
        `${super.table}.tipo`,
        "produtos.valor",
        "produtos.descricao",
        "produtos.disponibilidade"
      )
      .innerJoin("produtos", `${super.table}.cod_produto`, "produto.id")
      .orderBy(`${super.table}.id`, "asc");
  }

  static async create({ valor, descricao, disponibilidade, tipo }) {
    let bebida;
    let produto = await Produto.create({ valor, descricao, disponibilidade });

    try {
      bebida = await super.create({
        cod_produto: produto.primaryKeyValue,
        tipo
      });
    } catch (e) {
      await bebida.delete();
    }
    return Database.table(`${super.table}`)
      .select(
        `${super.table}.tipo`,
        "produtos.valor",
        "produtos.descricao",
        "produtos.disponibilidade"
      )
      .innerJoin("produtos", `${super.table}.cod_produto`, "produtos.id")
      .where(`${super.table}.id`, bebida.primaryKeyValue)
      .orderBy(`${super.table}.id`, "asc");
  }
}
module.exports = Bebida;
