"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutosCompraSchema extends Schema {
  up() {
    this.create("produtos_compras", table => {
      table.increments("Codigo");
      table
        .integer("CodCompra")
        .references("Codigo")
        .inTable("compras")
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
    this.drop("produtos_compras");
  }
}

module.exports = ProdutosCompraSchema;
