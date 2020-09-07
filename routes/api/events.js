const express = require('express');
const asyncHandler = require('express-async-handler');
const { Group, Event, User, UserEvent } = require("../../db/models");
const {
    jwtConfig: { expiresIn },
} = require("../../config");
const { Events } = require('pg');


const router = express.Router();



router.get('/:eventId', asyncHandler(async function (req, res, next) {
    const eventId = req.params["eventId"];
    const event = await Event.findOne(
        {
            where: {id: eventId},
            include: [Group, User, UserEvent]
        }
        )

    const attendees = await UserEvent.findAll(
        {
            where: {eventId: eventId}
        }
    )
    res.json({ event, attendees });
}));


module.exports = router;
