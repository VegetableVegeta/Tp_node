const router = require('express').Router();
const {
  homeCtrl,
  servicesCtrl,
  todosCtrl,
  contactCtrl,
} = require('../controllers/app.ctrl');

router.get('/home', homeCtrl);
router.get('/todos', todosCtrl);
router.get('/services', servicesCtrl);
router.get('/contact', contactCtrl);

module.exports = router;