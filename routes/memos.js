const express = require('express');
const router = express.Router();

// @route   GET api/memos
// @desc    Get all user memos
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all memos');
});

// @route   POST api/memos
// @desc    Add new memo
// @access  Private
router.post('/', (req, res) => {
  res.send('Add memo');
});

// @route   PUT api/memos/:id
// @desc    Update memo
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update memo');
});

// @route   DELETE api/memos/:id
// @desc    Delete memo
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete memo');
});

module.exports = router;
