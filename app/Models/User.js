'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
    /// Escolhe a Tabela do banco de dados
    static get table() {
        return 'tb_users';
    }
    /// Adicionar UUID (ex: NFD34SsIUFH7g3) ao dado na hora de inserir no banco
    static boot() {
        super.boot();

        this.addHook("beforeCreate", "SecureIdHook.uuid");
    }
}

module.exports = User
