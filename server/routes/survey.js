let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let surveyController = require('../controllers/survey');

// helper function
function requireAuth(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ Operation */
router.get('/', surveyController.displaySurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', surveyController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', surveyController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', surveyController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', surveyController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', surveyController.performDelete);

/* GET Route for displaying the View Survey page - UPDATE Operation */
//router.get('/view/:id', surveyController.displayViewPage);

/* POST Route for submitting survey page - Operation */
//router.post('/view/:id', surveyController.processViewPage);

/* GET Route for displaying the View Survey page - UPDATE Operation */
router.get('/survey/:id', surveyController.displaySurveyViewPage);

/* POST Route for submitting survey page - Operation */
router.post('/survey/:id', surveyController.processSurveyViewPage);

/* GET Route for displaying the Survey Report page */
router.get('/report/:id', surveyController.displayReportViewPage);

module.exports = router;