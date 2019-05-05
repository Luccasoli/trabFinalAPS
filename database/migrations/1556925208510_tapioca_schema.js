"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TapiocaSchema extends Schema {
  up() {
    this.create("tapiocas", table => {
      table.increments("Codigo");
      table
        .integer("CodProduto")
        .references("Codigo")
        .inTable("produtos")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.string("Recheio", 10);
      table.timestamps();
    });
  }

  down() {
    this.drop("tapiocas");
  }
}

module.exports = TapiocaSchema;
