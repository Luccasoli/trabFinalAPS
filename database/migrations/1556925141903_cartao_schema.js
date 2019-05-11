"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CartaoSchema extends Schema {
  up() {
    this.create("cartoes", table => {
      table.increments();
      table
        .string("numero", 16)
        .notNullable()
        .unique()
      table
        .integer("titular")
        .references("id")
        .inTable("clientes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.date("dt_venc").notNullable();
      table.integer("tipo").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("cartoes");
  }
}

module.exports = CartaoSchema;
