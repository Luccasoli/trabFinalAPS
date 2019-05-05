"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BebidaSchema extends Schema {
  up() {
    this.create("bebida", table => {
      table.increments("Codigo");
      table
        .integer("CodProduto")
        .references("Codigo")
        .inTable("produto")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.string("Tipo", 10);
      table.timestamps();
    });
  }

  down() {
    this.drop("bebida");
  }
}

module.exports = BebidaSchema;
