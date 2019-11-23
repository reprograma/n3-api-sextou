const express = require('express');
const router = express.Router();

const controller = require("../controller/filmesControllers")
 

router.get("/catalogo", controller.getAll)
router.post ("/criar", controller.postFilme)
router.patch("/exibicao/:id", controller.patchFilme)
router.delete("/remover/:id", controller.deleteFilme)

module.exports = router

