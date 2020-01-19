const express = require('express')
// const {getUser, getUsers, deleteUser, updateUser} = require('./item.controller')
const {getItems,getItem,updateItem,addItem,deleteItem} = require('./item.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getItems)
router.get('/:id', getItem)
router.put('/:id',updateItem)
router.post('/',addItem)
router.delete('/:id',deleteItem)

// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router