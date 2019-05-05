"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutosAcompanhadosSchema extends Schema {
  up() {
    this.create("produtos_acompanhados", table => {
      table.increments("Codigo");
      table
        .string("Cliente", 11)
        .references("CPF")
        .inTable("clientes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("CodProduto")
        .references("Codigo")
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
