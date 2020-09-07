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
            where: {eventId}
        }
    )
    console.log(attendees);
    res.json({ event, attendees });
}));


router.delete('/:eventId', asyncHandler(async function (req, res, next) {
    const eventId = req.params["eventId"];

    // const attendees = await UserEvent.findAll(
    //     {
    //         where: {eventId}
    //     }
    // )
    //     await attendees.destroy();

        UserEvent.destroy({where: {eventId}})

    const event = await Event.findOne(
        {
            where: {id: eventId},
        }
        )
        await event.destroy();

    res.send(200);
}));

module.exports = router;
