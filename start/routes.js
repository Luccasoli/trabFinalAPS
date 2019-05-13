"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return '<h1>API do Projeto do Billy</h1>'
});

Route.group(() => {
  Route.resource("tapiocas", "TapiocaController").apiOnly();
  Route.resource("bebidas", "BebidaController").apiOnly();
  Route.resource("produtos", "ProdutoController").apiOnly();
  Route.resource("funcionarios", "FuncionarioController").apiOnly();
  Route.resource("clientes", "ClienteController").apiOnly();
  Route.resource("usuarios", "UsuarioController").apiOnly();
  Route.resource("compras", "CompraController").apiOnly();
  Route.resource("produtos_compra", "ProdutosCompraController").apiOnly();
}).prefix("api");
