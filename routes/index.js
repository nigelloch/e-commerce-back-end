const router = require('express').Router();
const apiRoutes = require('./api');
// const productRoutes = require('./api/product-routes')
// const tagRoutes = require('./api/tag-routes') 


router.use('/api', apiRoutes);
// router.use('/product', productRoutes);
// router.use('/tag', tagRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;