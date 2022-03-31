const {
    createUser,
    getUsers,
    getUserByUserId,
    updateUsers,
    deleteUser,
    createCategory,
    login

} = require("./user.controller.js");

const router = require("express").Router();
const { checkToken } = require("../../vgames/token_validation");

router.post("/users/login", login);
router.post("/users/", checkToken, createUser);
router.get("/users/", checkToken, getUsers);
router.get("/users/:id", checkToken, getUserByUserId);
router.put("/users/", checkToken, updateUsers);
router.delete("/users/", checkToken, deleteUser);

router.post("/categories", checkToken, createCategory);
// router.get("/cars", checkToken, getCars);
// router.get("/carsabc", checkToken, getCarsABC);
// router.get("/cars/:id", checkToken, getCarById);
// router.get("/carshrst/:hourlyRate", checkToken, getCarByHourlyRate);
// router.put("/cars/", checkToken, updateCar);
// router.delete("/cars/", checkToken, deleteCar);

module.exports = router;