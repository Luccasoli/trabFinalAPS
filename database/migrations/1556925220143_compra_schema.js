"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompraSchema extends Schema {
  up() {
    this.create("compras", table => {
      table.increments();
      table.date("data").notNullable();
      table.string("status", 20).notNullable();
      table.float("valor").notNullable();
      table
        .integer("cliente", 11)
        .references("id")
        .inTable("clientes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("funcionario")
        .references("id")
        .inTable("funcionarios")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("cartao")
        .references("id")
        .inTable("cartes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("compras");
  }
}

module.exports = CompraSchema;
