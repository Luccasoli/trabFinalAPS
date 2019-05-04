"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CartoesSchema extends Schema {
  up() {
    this.create("cartoe", table => {
      table
        .string("Numero", 16)
        .notNullable()
        .unique()
        .primary();
      table
        .string("Titular")
        .references("CPF")
        .inTable("cliente")
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

module.exports = CartoesSchema;
