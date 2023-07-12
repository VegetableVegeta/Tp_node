const { resolve } = require('path');
// app.engine('pug', require('pug').__express);

exports.homeCtrl = (req, res) => {
  res.render('home.pug');
};

exports.todosCtrl = (req, res) => {
  const { todos } = require('../database/data.json');
  res.render('todolist.pug', { todos });
};

exports.servicesCtrl = (req, res) => {
  // Connexion à la BDD
  // Récupération des livres
  // Vérification de la cnx
  res.end('Services');
};

exports.contactCtrl = (req, res) => res.end('Contact');