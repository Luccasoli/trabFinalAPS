"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FuncionarioSchema extends Schema {
  up() {
    this.create("funcionarios", table => {
      table.increments();
      table
        .integer("cod_usuario")
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
