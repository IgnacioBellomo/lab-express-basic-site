const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about', (req, res, next) => {
  res.render('about');
})

router.get('/gallery', (req, res, next) => {
  res.render('gallery')
})

module.exports = router;
