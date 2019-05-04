'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TapiocasSchema extends Schema {
  up () {
    this.create('tapiocas', (table) => {
      table.increments()
      table.integer('CodTapioca').notNullable().unique().primary()
      table.integer('CodProduto').reference('Codigos').inTable('produto').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.string('Recheio', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('tapiocas')
  }
}

module.exports = TapiocasSchema
