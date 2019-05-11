"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BebidaSchema extends Schema {
  up() {
    this.create("bebidas", table => {
      table.increments();
      table
        .integer("cod_produto")
        .references("id")
        .inTable("produtos")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.string("Tipo", 10);
      table.timestamps();
    });
  }

  down() {
    this.drop("bebidas");
  }
}

module.exports = BebidaSchema;
