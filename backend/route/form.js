const express = require("express");
const FormController = require("../controller/form");
const Router = express.Router();
// /form

// /form/create
Router.post("/create", FormController.create);

// /form/update
Router.post("/update", FormController.update);

/*
    /form/getAllFormData
*/
Router.get("/getAllFormData", FormController.getAll);

/*
    /private/form/deleteAll

*/
Router.post("/private/deleteAll", FormController.deleteAll);
module.exports = Router;
