'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Noticia extends Model {
  static get table () {
    return 'dn_noticia'
  }
}

module.exports = Noticia
