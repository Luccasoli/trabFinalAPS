"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TapiocaSchema extends Schema {
  up() {
    this.create("tapiocas", table => {
      table.increments();
      table
        .integer("cod_produto")
        .references("id")
        .inTable("produtos")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.string("recheio", 50);
      table.timestamps();
    });
  }

  down() {
    this.drop("tapiocas");
  }
}

module.exports = TapiocaSchema;
