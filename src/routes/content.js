const router = require('express').Router();
// Controllers
const { addNewAbout, deleteAbout, getAbout, getAboutByID, updateAbout } = require('../controllers/aboutController.js');
const { addNewSkill, getSkills, getSkillByID, updateSkill, deleteSkill } = require('../controllers/skillsController.js');
const { addNewWork, getWork, getWorkByID, updateWork, deleteWork } = require('../controllers/workController.js');
const { addNewStudies, getStudies, getStudiesByID, updateStudies, deleteStudies } = require('../controllers/studiesController.js');
const { addNewProject, deleteProject, getProjectByID, getProjects, updateProject } = require('../controllers/projectController.js');

// SKILLS //
router
  .get('/skills', (req, res, next) => {
    console.log(`Req from: ${req.originalUrl}`)
    console.log(`Req type: ${req.method}`)
    next()
  }, getSkills)

  .post('/skills', addNewSkill)

  .put('/skills', updateSkill)

  .delete('/skills', deleteSkill)

router
  .get('/skills/:skillID', getSkillByID);


// ABOUT // NEEDS FIX
router
  .get('/about', (req, res, next) => {
    console.log(`Req from: ${req.originalUrl}`)
    console.log(`Req type: ${req.method}`)
    next()
  }, getAbout)

  .post('/about', addNewAbout)

  .put('/about', updateAbout)

  .delete('/about', deleteAbout);

router
  .get('/about/:aboutID', getAboutByID);

// WORK // NEEDS FIX
router
  .get('/work', (req, res, next) => {
    console.log(`Req from: ${req.originalUrl}`)
    console.log(`Req type: ${req.method}`)
    next()
  }, getWork)

  .post('/work', addNewWork)

  .put('/work', updateWork)

  .delete('/work', deleteWork)

router
  .get('/work/:workID', getWorkByID)

// STUDIES //
router
  .get('/studies', (req, res, next) => {
    console.log(`Req from: ${req.originalUrl}`)
    console.log(`Req type: ${req.method}`)
    next()
  }, getStudies)

  .post('/studies', addNewStudies)

  .put('/studies', updateStudies)

  .delete('/studies', deleteStudies)

router
  .get('/studies/:studiesID', getStudiesByID)

// PROJECTS //
router
  .get('/projects', (req, res, next) => {
    console.log(`Req from: ${req.originalUrl}`)
    console.log(`Req type: ${req.method}`)
    next()
  }, getProjects)

  .post('/projects', addNewProject)

  .put('/projects', updateProject)

  .delete('/projects', deleteProject)

router
  .get('/projects/:projectID', getProjectByID)


module.exports = router;
