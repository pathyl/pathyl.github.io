const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');


router.get('/', ctrlMain.homepage);
router.get('/registerstudent', ctrlMain.registerstudent);


module.exports = router;
