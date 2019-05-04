'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompraSchema extends Schema {
  up () {
    this.create('compras', (table) => {
      table.increments()
      table.integer('ID').notNullable().unique().primary()
      table.date('Data').notNullable()
      table.string('Status', 20).notNullable()
      table.float('Valor').notNullable()
      table.string('Cliente',11).reference('CPF').inTable('cliente').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.integer('Funcionario').reference('Codigo').inTable('funcionario').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('compras')
  }
}

module.exports = CompraSchema
