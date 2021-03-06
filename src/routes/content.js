const router = require('express').Router();

// Controllers
const { addNewAbout, deleteAbout, getAbout, getAboutByID, updateAbout } = require('../controllers/aboutController.js');
const { addNewSkill, getSkills, getSkillByID, updateSkill, deleteSkill } = require('../controllers/skillsController.js');
const { addNewWork, getWork, getWorkByID, updateWork, deleteWork } = require('../controllers/workController.js');
const { addNewStudies, getStudies, getStudiesByID, updateStudies, deleteStudies } = require('../controllers/studiesController.js');
const { addNewProject, deleteProject, getProjectByID, getProjects, updateProject } = require('../controllers/projectController.js');

// Validate & Verify
const { verifyToken } = require('../middleware/verification/tokenVerification');
const { validateAbout, validateProject, validateSkill, validateStudies, validateWork } = require('../middleware/validation');
const logger = require('../logger/index.js');



/*** ABOUT ***/
router
  .get(
    '/about',
    (req, res, next) => {
      logger.info(req.path)
      next();
    },
    getAbout
  )

  .post(
    '/about',
    verifyToken,
    validateAbout,
    addNewAbout
  )

  .put(
    '/about',
    verifyToken,
    validateAbout,
    updateAbout
  )

  .delete(
    '/about',
    verifyToken,
    deleteAbout
  );

router
  .get(
    '/about/:aboutID',
    getAboutByID
  );



/*** PROJECTS ***/
router
  .get(
    '/projects',
    getProjects
  )

  .post(
    '/projects',
    verifyToken,
    validateProject,
    addNewProject
  )

  .put(
    '/projects',
    verifyToken,
    validateProject,
    updateProject
  )

  .delete(
    '/projects',
    verifyToken,
    deleteProject
  )

router
  .get(
    '/projects/:projectID',
    getProjectByID
  )



/*** SKILLS ***/
router
  .get(
    '/skills',
    getSkills
  )

  .post(
    '/skills',
    verifyToken,
    validateSkill,
    addNewSkill
  )

  .put(
    '/skills',
    verifyToken,
    validateSkill,
    updateSkill
  )

  .delete(
    '/skills',
    verifyToken,
    deleteSkill
  )

router
  .get(
    '/skills/:skillID',
    getSkillByID
  );



/*** WORK ***/
router
  .get(
    '/work',
    getWork
  )

  .post(
    '/work',
    verifyToken,
    validateWork,
    addNewWork
  )

  .put(
    '/work',
    verifyToken,
    validateWork,
    updateWork
  )

  .delete(
    '/work',
    verifyToken,
    deleteWork
  )

router
  .get(
    '/work/:workID',
    getWorkByID)



/*** STUDIES ***/
router
  .get(
    '/studies',
    getStudies
  )

  .post(
    '/studies',
    verifyToken,
    validateStudies,
    addNewStudies
  )

  .put(
    '/studies',
    verifyToken,
    validateStudies,
    updateStudies
  )

  .delete(
    '/studies',
    verifyToken,
    deleteStudies
  )

router
  .get(
    '/studies/:studiesID',
    getStudiesByID
  )



/*** UPLOADS ***/
router
  .post(
    '/uploads',
    verifyToken,
    (req, res) => {
      if (req.files === null) {
        return res.status(400).json({ message: 'No file was uploaded' })
      }

      const file = req.files.file;

      file.mv(`${__dirname}/uploads/${file.name}`, err => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: err });
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
      })
    }
  )

module.exports = router;
