const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require("express-validator");
const { Group, Event, User, UserGroup } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { generateToken } = require("../util/auth");
const {
    jwtConfig: { expiresIn },
} = require("../../config");
const { Events } = require('pg');

const validateUser = [];

const router = express.Router();

// router.get('/', asyncHandler(async function (_req, res, _next) {
//     const userId = req.body;
//     const userGroups = await UserGroup.findAll({ where: { userId } });
//     let groupIds = new Set(userGroups.map((ele)=>{
//         return ele.id
//     }))
//     const userEvents = await Event.findAll(
//         {
//             where: {groupId: [...groupIds]},
//             order: [
//                 ['date', 'ASC'],
//                 ['name', 'ASC']
//             ],
//             include: Group,
//         }
//         )

//     res.json({ userEvents });
// }));

router.get('/:userId', asyncHandler(async function (_req, res, _next) {
    const userId = req.params["userId"];
    const userGroups = await UserGroup.findAll({ where: { userId } });
    let groupIds = new Set(userGroups.map((ele)=>{
        return ele.id
    }))
    const userEvents = await Event.findAll(
        {
            where: {groupId: [...groupIds]},
            order: [
                ['date', 'ASC'],
                ['name', 'ASC']
            ],
            include: Group,
        }
        )

    res.json({ userEvents });
}));


module.exports = router;
