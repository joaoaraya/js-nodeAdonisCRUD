'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TbUsersSchema extends Schema {
  up () {
    this.table('tb_users', (table) => {
      // alter table
    })
  }

  down () {
    this.table('tb_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TbUsersSchema
