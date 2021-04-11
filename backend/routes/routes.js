// import express
import express from "express";
// myUnit
import { createUser } from "../controllers/registration.js";
import { showUsers } from "../administratorControllers/getTable.js";

// init express router
const router = express.Router();

// create new user
router.post('/registration', createUser);
// administrator
router.get('/administrator/users', showUsers);

// export default router
export default router;
