"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TapiocaSchema extends Schema {
  up() {
    this.create("tapioca", table => {
      table.increments("Codigo");
      table
        .integer("CodProduto")
        .references("Codigo")
        .inTable("produto")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.string("Recheio", 10);
      table.timestamps();
    });
  }

  down() {
    this.drop("tapioca");
  }
}

module.exports = TapiocaSchema;
