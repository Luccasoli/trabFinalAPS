'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use("Database");

class Cartao extends Model {
    static async all(){
        return Database.table(super.table)
            .select(
                `${super.table}.id`,
                `${super.table}.numero`,
                `${super.table}.titular`,
                `${super.table}.dt_venc`,
                `${super.table}.tipo`
            )
            .innerJoin("clientes", `${super.table}.titular`, "clientes.id")
            .groupBy("clientes.id");
    }

    static async create({numero, titular, dt_venc, tipo}) {
        let cartao;
        cartao = await super.create({
            numero,
            titular: clientes.primaryKeyValue,
            dt_venc,
            tipo
        });

        return Database.table(`${super.table}`)
            .select(
                `${super.table}.id`,
                `${super.table}.numero`,
                `${super.table}.titular`,
                `${super.table}.dt_venc`,
                `${super.table}.tipo`
            )
    }
}

module.exports = Cartao
