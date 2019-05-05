"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CartaoSchema extends Schema {
  up() {
    this.create("cartoes", table => {
      table.increments();
      table
        .string("Numero", 16)
        .notNullable()
        .unique()
      table
        .integer("Titular")
        .references("id")
        .inTable("clientes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.date("DtVenc").notNullable();
      table.integer("Tipo").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("cartoes");
  }
}

module.exports = CartaoSchema;
