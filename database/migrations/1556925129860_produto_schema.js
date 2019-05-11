"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutoSchema extends Schema {
  up() {
    this.create("produtos", table => {
      table.increments();
      table.float("valor").notNullable();
      table.string("descricao", 150);
      table.boolean("disponibilidade").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("produtos");
  }
}

module.exports = ProdutoSchema;
