'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const Database = use("Database");

class ProdutosAcompanhado extends Model {
    cliente() {
        return this.belongsTo("App/Models/Cliente", "cliente", "id");
    }
    produto() {
        return this.belongsTo("App/Models/Produto", "cod_produto", "id");
    }

    static async all(){
        return Database.table(super.table)
            .select(
                `${super.table}.id`,
                `${super.table}.cod_produto`,
                `${super.table}.cliente`,
                "produtos.descricao",
                "clientes.nome"
            )
            .innerJoin("clientes", `${super.table}.cliente`, "clientes.id")
            .innerJoin("produtos", `${super.table}.cod_produto`, "produtos.id")
            .groupBy("cliente");
    }

    static async create({cod_produto, cliente}) {
        let produtoAcompanhado;
        produtoAcompanhado = await super.create({
            cliente: clientes.primaryKeyValue,
            cod_produto: produto.primaryKeyValue
        });
        
        return Database.table(`${super.table}`)
            .select(
                `${super.table}.id`,
                `${super.table}.cod_produto`,
                `${super.table}.cliente`,
                "clientes.nome",
                "produtos.descricao"
            )
            .innerJoin("clientes", `${super.table}.cliente`, "clientes.id")
            .innerJoin("produtos", `${super.table}.cod_produto`, "produtos.id");
    }
}

module.exports = ProdutosAcompanhado
