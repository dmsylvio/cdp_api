'use strict'

const Noticia = use('App/Models/Noticia');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with noticias
 */
class NoticiaController {
  /**
   * Show a list of all properties.
   * GET properties
   */
  async index () {
    const page = 1
    const noticia = await Noticia.query().paginate(page)
    return noticia;
  }
}

module.exports = NoticiaController