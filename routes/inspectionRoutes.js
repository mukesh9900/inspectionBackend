const express = require('express')
const router= express.Router()

const {createInspection, getAllInspection, updateInspection, deleteInspection} = require('./../controllers/inspectionController');

router
  .route('/')
  .get(getAllInspection)
  .post(createInspection)
  .put(updateInspection)

router.route('/:id')
  .delete(deleteInspection)


module.exports = router;