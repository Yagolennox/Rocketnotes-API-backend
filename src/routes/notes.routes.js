const { Router } = require("express");  

const notesController = require("../controllers/notesController"); 

const ensureAuthenticated = require("../middleware/ensureAuthenticated") 

const notesRoutes = Router(); 

const NotesController = new notesController(); 

notesRoutes.use(ensureAuthenticated)

notesRoutes.get("/", NotesController.index); 
notesRoutes.post("/", NotesController.create); 
notesRoutes.get("/:id", NotesController.show); 
notesRoutes.delete("/:id", NotesController.delete); 

module.exports = notesRoutes;    