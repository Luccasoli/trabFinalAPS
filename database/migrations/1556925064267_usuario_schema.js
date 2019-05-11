"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsuarioSchema extends Schema {
  up() {
    this.create("usuarios", table => {
      table.increments();
      table.string("nome", 200).notNullable();
      table
        .string("email", 50)
        .notNullable()
        .unique();
      table.string("senha", 100).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("usuarios");
  }
}

module.exports = UsuarioSchema;
