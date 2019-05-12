"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return '<h1>API do Projeto do Billy</h1>'
});

Route.group(() => {
  Route.resource("tapiocas", "TapiocaController").apiOnly();
  Route.resource("bebidas", "BebidaController").apiOnly();
  Route.resource("funcionarios", "FuncionarioController").apiOnly();
  Route.resource("clientes", "ClienteController").apiOnly();
  Route.resource("usuarios", "UsuarioController").apiOnly();
}).prefix("api");
