'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TbUsersSchema extends Schema {
  up() {
    this.create('tb_users', (table) => {
      table.increments().unique();
      table.uuid("secure_id");
      table.string("name", 30);
      table.string("email", 60).unique().notNullable();
      table.string("password", 30).notNullable();
      table.timestamps()
    })
  }

  down() {
    this.drop('tb_users')
  }
}

module.exports = TbUsersSchema
