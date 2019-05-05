"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompraSchema extends Schema {
  up() {
    this.create("compras", table => {
      table.increments("Codigo");
      table.date("Data").notNullable();
      table.string("Status", 20).notNullable();
      table.float("Valor").notNullable();
      table
        .string("Cliente", 11)
        .references("CPF")
        .inTable("clientes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("Funcionario")
        .references("Codigo")
        .inTable("funcionarios")
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
