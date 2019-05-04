'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosCompraSchema extends Schema {
  up () {
    this.create('produtos_compras', (table) => {
      table.increments()
      table.integer('Codigo').notNullable().unique().primary()
      table.integer('CodCompra').reference('ID').inTable('compra').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.integer('codProduto').reference('Codigo').inTable('produto').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos_compras')
  }
}

module.exports = ProdutosCompraSchema
