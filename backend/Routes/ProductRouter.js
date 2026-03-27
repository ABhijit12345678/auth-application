const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();


// -------------------- Define Protected Route --------------------
router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    
    // Dummy tasks list
    res.status(200).json([
        {
            name: "Abhijit Behera",
            task: "Design dashboard",
            status:"Pending"
        },
        {
            name: "Abhishek ",
            task: "Bug fixing",
            status:"In Progress"
        }
    ])
});

module.exports = router;