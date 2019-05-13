'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const Usuario = use("App/Models/Compra");
const Database = use("Database");

class ProdutosCompra extends Model {
    compra(){
        return this.belongsTo("App/Models/Compra", "cod_compra", "id");
    }

    static async all(){
        return Database.table(super.table)
            .select(
                `${super.table}.id`,
                `${super.table}.cod_produto`,
                `${super.table}.quantidade`,
                "compras.data",
                "compras.status",
                "compras.valor",
                "compras.cliente",
                "compras.funcionario",
                "compras.cartao"
            )
            .innerJoin("compras", `${super.table}.cod_compra`,"compras.id")
            .orderBy(`${super.table}.id`,"asc");
    }

    static async create({data, status, valor, cliente, funcionario, cartao, cod_produto, quantidade}) {
        let produtocompra;
        let compra = await compras.create({data, status, valor, cliente, funcionario, cartao});

        try { 
            produtocompra = await super.create({
                cod_compra: compras.primaryKeyValue,
                cod_produto, 
                quantidade
            });
        } catch(e) {
            await compra.delete();
        }

        return Database.table(`${super.table}`)
            .select(
                `${super.table}.id`,
                `${super.table}.cod_produto`,
                `${super.table}.quantidade`,
                "compras.data",
                "compras.status",
                "compras.valor",
                "compras.cliente",
                "compras.funcionario",
                "compras.cartao"
            )
            .innerJoin("compras", `${super.table}.cod_compra`,"compras.id")
            .where(`${super.table}.id`, produtocompra.primaryKeyValue)
            .orderBy(`${super.table}.id`,"asc");
    }
}

module.exports = ProdutosCompra
