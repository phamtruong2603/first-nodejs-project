const member = require('./members');

const router = (app) => {
    app.use('/members' , member);
};

module.exports = router;
