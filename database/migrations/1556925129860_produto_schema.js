"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutoSchema extends Schema {
  up() {
    this.create("produtos", table => {
      table.increments("Codigo");
      table.float("Valor").notNullable();
      table.string("Descricao", 150);
      table.boolean("Disponibilidade").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("produtos");
  }
}

module.exports = ProdutoSchema;
