const express = require('express');
const route = express.Router();

const memberController = require('../Controller/MemberController')

route.get('/', memberController.getMembers);
route.delete('/:id', memberController.deleteMember);
route.put('/:id', memberController.putMember);
route.post('/', memberController.postMember);

module.exports = route;