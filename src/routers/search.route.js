const express = require('express');
const router = express.Router();

const searchController = require('../app/controllers/searchController');
router.use("/:show", searchController.show);
router.use("/", searchController.index);
module.exports = router;