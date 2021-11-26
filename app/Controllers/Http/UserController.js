'use strict'

const User = use('App/Models/User'); // Dados e funções para a tabela

class UserController {

  /* Mostrar todos os dados */
  async index({ request, response, view }) {
    const user = await User.query().fetch();

    if (user) {
      return user;
    }
    else {
      return response.status(404).json({ error: "nenhum dado encontrado" });
    }
  }

  /* Criar dados */
  async store({ request, response }) {
    // Gravar todos os dados da requisição: (request.all())
    let data = request.only(["name", "email", "password"]);

    const user = await User.create(data);

    if (user) {
      return user;
    }
    else {
      return response.status(200).json({ error: "não foi possível cadastrar" });
    }
  }

  /* Mostrar Item especifico */
  async show({ params, response }) {
    const where = 'name'; // qual coluna quer pesquisar (usar token de segurança antes)
    const user = await User.query().where(where, params.id).first(); //listar todas informações dessa linha

    if (user) {
      return user;
    }
    else {
      return response.status(404).json({ error: "usuário não encontrado" });
    }
  }

  /* Atualizar/Alterar dados */
  async update({ params, request, response }) {
    const where = 'id'; // qual coluna quer editar (usar token de segurança antes ou secure_id)
    let data = request.only(["name", "email", "password"]);

    const user = await User.query().where(where, params.id).update(data);

    if (user) {
      return response.status(200).json({ message: "usuário alterado" })
    }
    else {
      return response.status(404).json({ error: "não foi possível alterar" });
    }
  }

  /* Deletar dados */
  async destroy({ params, request, response }) {
    const where = 'id'; // de qual coluna quer excluir (usar token de segurança antes ou secure_id)
    let data = request.all();

    await User.query().where(where, params.id).delete(data);

    if (user) {
      return response.status(200).json({ message: "usuário deletado" })
    }
    else {
      return response.status(404).json({ error: "não foi possível deletar" });
    }
  }
}

module.exports = UserController
