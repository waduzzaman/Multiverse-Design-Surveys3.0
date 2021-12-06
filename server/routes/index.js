let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
/* root link */
router.get('/', indexController.displayHomePage);

/* home page. */
router.get('/home', indexController.displayHomePage);

/* group members page. */
router.get('/group', indexController.displayGroupPage);

/* Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

/* GET Route for displaying the MyPage page */
router.get('/mypage', indexController.displayMyPagePage);

module.exports = router;