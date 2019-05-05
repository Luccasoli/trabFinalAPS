"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClienteSchema extends Schema {
  up() {
    this.create("clientes", table => {
      table
        .string("CPF", 11)
        .notNullable()
        .unique()
        .primary();
      table
        .integer("CodUsuario")
        .references("Codigo")
        .inTable("usuarios")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("clientes");
  }
}

module.exports = ClienteSchema;
