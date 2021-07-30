const getProductsFromFile = require('../models/index');

// Handle data flow from this controller to the view
// all the data is passed to the view as a JSON object
const getIndex = (req, res) => {
    res.render('pages/index', { pageTitle: 'Embeded JavaScript', path: '/' });
};

const getProducts = (req, res) => {
    res.render('pages/products', { pageTitle: 'EJS: Products', path: '/products' });
};

const getTeams = (req, res) => {
    return getProductsFromFile(teams => {
        res.render('pages/teams', { pageTitle: 'EJS: Teams', path: '/teams', teams: teams });
    });
};

module.exports = {
    getIndex,
    getProducts,
    getTeams,
};