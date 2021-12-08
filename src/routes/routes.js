import { addNewAbout, deleteAbout, getAbout, getAboutByID, updateAbout } from '../controllers/aboutController.js'
import { addNewSkill, getSkills, getSkillByID, updateSkill, deleteSkill } from '../controllers/skillsController.js'
import { addNewWork, getWork, getWorkByID, updateWork, deleteWork } from '../controllers/workController.js'
import { addNewStudies, getStudies, getStudiesByID, updateStudies, deleteStudies } from '../controllers/studiesController.js'
import { addNewProject, deleteProject, getProjectByID, getProjects, updateProject } from '../controllers/projectController.js'

const routes = (app) => {
  // SKILLS //
  app.route('/skills')
    .get((req, res, next) => {
      console.log(`Req from: ${req.originalUrl}`)
      console.log(`Req type: ${req.method}`)
      next()
    }, getSkills)

    .post(addNewSkill)

  app.route('/skills/:skillID')
    .get(getSkillByID)

    .put(updateSkill)

    .delete(deleteSkill)

  // ABOUT // NEEDS FIX
  app.route('/about')
    .get((req, res, next) => {
      console.log(`Req from: ${req.originalUrl}`)
      console.log(`Req type: ${req.method}`)
      next()
    }, getAbout)

    .post(addNewAbout)

  app.route('/about/:aboutID')
    .get(getAboutByID)

    .put(updateAbout)

    .delete(deleteAbout)

  // WORK // NEEDS FIX
  app.route('/work')
    .get((req, res, next) => {
      console.log(`Req from: ${req.originalUrl}`)
      console.log(`Req type: ${req.method}`)
      next()
    }, getWork)

    .post(addNewWork)

  app.route('/work/:workID')
    .get(getWorkByID)

    .put(updateWork)

    .delete(deleteWork)

  // STUDIES //
  app.route('/studies')
    .get((req, res, next) => {
      console.log(`Req from: ${req.originalUrl}`)
      console.log(`Req type: ${req.method}`)
      next()
    }, getStudies)

    .post(addNewStudies)

  app.route('/studies/:studiesID')
    .get(getStudiesByID)

    .put(updateStudies)

    .delete(deleteStudies)

  // PROJECTS //
  app.route('/projects')
    .get((req, res, next) => {
      console.log(`Req from: ${req.originalUrl}`)
      console.log(`Req type: ${req.method}`)
      next()
    }, getProjects)

    .post(addNewProject)

  app.route('/projects/:projectsID')
    .get(getProjectByID)

    .put(updateProject)

    .delete(deleteProject)
}

export default routes
