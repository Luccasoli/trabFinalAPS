"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutosAcompanhadosSchema extends Schema {
  up() {
    this.create("produtos_acompanhados", table => {
      table.increments();
      table
        .integer("cliente")
        .references("id")
        .inTable("clientes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("cod_produto")
        .references("id")
        .inTable("produtos")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("produtos_acompanhados");
  }
}

module.exports = ProdutosAcompanhadosSchema;
