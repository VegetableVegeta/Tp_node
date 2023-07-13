const router = require('express').Router();
const appRoutes = require('./app.routes');
const apiRoutes = require('./api.routes');

router.use( appRoutes );
router.use( '/api', apiRoutes );

router.get('*', (req, res) => res.redirect('/home'));

module.exports = router;

// NODE - Todolist Per User
// Échéance demain à 20:00
// NODE

// Instructions
// Vous devez créer une application permettant de gérer plusieurs utilisateurs.
// Chacun aura sa propre liste de tâche.

// CONTRAINTES:
//  • Au niveau de l'interface graphique, il faudra pouvoir sélectionner un utilisateur: ses tâches seront alors accessibles
//  • Une tâche pourra être créée/catégorisée/faite/supprimée
//  • Les tâches devront être affichée en 2 blocs: les taches à faire et faites
//  • Un filtre permettra d'afficher uniquement les tâches d'une même catégorie
//  • Les tâches devront être persistantes (fichier JSON ou mieux: BDD) (selon ce que vous vous sentez capables de faire)