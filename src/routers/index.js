const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({ status: 'OK' });
});

router.get('/filme', require('./filme'));
router.get('/serie', require('./serie'));

module.exports = router;