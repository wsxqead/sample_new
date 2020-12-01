const BaseModel = require('./knex')

class Person extends BaseModel {
    static get tableName() {
      return 'persons';
    }
}

module.exports = Person