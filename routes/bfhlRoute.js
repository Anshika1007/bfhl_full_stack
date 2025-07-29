const express = require('express');
const router = express.Router();
const bfhlController = require('../controller/bfhlController');

router.post('/', bfhlController.processData);

module.exports = router;
