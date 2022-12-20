var express = require('express');
var router = express.Router();

/* GET users listing. */
// var skillsCtrl = require('../controllers/mySkills')
var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
module.exports = router;
