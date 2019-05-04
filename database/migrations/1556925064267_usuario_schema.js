"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsuarioSchema extends Schema {
  up() {
    this.create("usuario", table => {
      table.increments("Codigo");
      table.string("Nome", 200).notNullable();
      table
        .string("Email", 50)
        .notNullable()
        .unique();
      table.string("Senha", 10).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("usuarios");
  }
}

module.exports = UsuarioSchema;
