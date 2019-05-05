"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClienteSchema extends Schema {
  up() {
    this.create("clientes", table => {
      table.increments();      
      table
        .string("CPF", 11)
        .notNullable()
        .unique()
      table
        .integer("CodUsuario")
        .references("id")
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
