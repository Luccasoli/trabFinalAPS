"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutosCompraSchema extends Schema {
  up() {
    this.create("produtos_compras", table => {
      table.increments();
      table.integer("quantidade").notNullable();
      table
        .integer("cod_compra")
        .references("id")
        .inTable("compras")
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
    this.drop("produtos_compras");
  }
}

module.exports = ProdutosCompraSchema;
