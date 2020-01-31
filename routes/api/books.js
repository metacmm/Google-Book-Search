const router = require("express").Router();
const bookController = require("../../controller/booksController");

router.route("/")
.post(bookController.create);

router.route("/:id")
.get(bookController.findAll)
.delete(bookController.remove);

module.exports = router;