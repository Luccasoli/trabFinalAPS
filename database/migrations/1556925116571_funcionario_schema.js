"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FuncionarioSchema extends Schema {
  up() {
    this.create("funcionarios", table => {
      table.increments();
      table
        .integer("Codigo")
        .notNullable()
        .unique()
      table
        .integer("CodUsuario")
        .references("id")
        .inTable("usuarios")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("funcionarios");
  }
}

module.exports = FuncionarioSchema;
