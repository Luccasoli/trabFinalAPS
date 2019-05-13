'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const ProdutoCompra = use("App/Models/ProdutosCompra");
const Produto = use("App/Models/Produto");
const Database = use("Database");

class Compra extends Model {
    produtocompra() {
        return this.belongsTo("App/Models/ProdutosCompra", "id", "cod_compra");
    }
    produto(){
        return this.belongsTo("App/Models/Produto", "produtos_compra.cod_produto", "id");
    }
    static async all(){ 

        return Database.table(super.table)
            .select(
                `${super.table}.id`,
                `${super.table}.data`,
                `${super.table}.valor`,
                `${super.table}.cliente`,
                `${super.table}.funcionario`,
                `${super.table}.cartao`,
                "produtos.descricao",
                "produtos_compra.quantidade"
            )
            .innerJoin("produtos_compra", "produtos_compra.cod_compra", `${super.table}.id`)
            .groupBy(`${super.table}.id`)
    }
}

module.exports = Compra
