"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Produto = use("App/Models/Produto");
const Database = use("Database");

class Tapioca extends Model {
  produto(){
    return this.belongsTo("App/Models/Produto", "cod_produto", "id");
  }
  
  static async all(){
    return Database.table(super.table)
      .select(
        `${super.table}.recheio`,
        "produto.valor",
        "produto.descricao",
        "produto.disponibilidade"
      )
      .innerJoin("produto",  `${super.table}.cod_produto`,"produto.id")
      .orderBy( `${super.table}.id`,"asc");
  }

  static async create({ Valor, Descricao, Disponibilidade, recheio }) {
    let tapioca;
    let produto = await Produto.create({valor, descricao, disponibilidade});

    try {
      tapioca = await super.create({
        cod_produto: produto.primaryKeyValue,
        id
      });
    } catch (e) { 
      await tapioca.delete();
    }
    return Database.table(`${super.table}`)
      .select(
        `${super.table}.recheio`,
        "produto.valor",
        "produto.descricao",
        "produto.disponibilidade"
      )
      .innerJoin("produto",  `${super.table}.cod_produto`,"produto.id")
      .where(`${super.table}.id`, tapioca.primaryKeyValue)
      .orderBy( `${super.table}.id`,"asc");

  }
}

module.exports = Tapioca;