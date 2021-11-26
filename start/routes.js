'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post("users", "UserController.store"); // Listar todos dados
Route.get("users", "UserController.index"); //Criar dados
Route.get("users/:id", "UserController.show"); // Listar item
Route.put("users/:id", "UserController.update"); //Alterar dados
Route.delete("users/:id", "UserController.destroy"); //Excluir dados