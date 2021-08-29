const { Router } = require("express"),
router = Router(),
employees = require("../controllers/index");

router.get("/", employees.index)
router.get("/get/:name", employees.getEmployee)
router.get("/getAll", employees.getEmployees)

router.post("/create", employees.createEmployee)

router.put("/update/:id", employees.updateEmployee)

router.delete("/delete/:id", employees.deleteEmployee)

module.exports = router