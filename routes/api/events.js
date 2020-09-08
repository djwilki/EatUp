const express = require('express');
const asyncHandler = require('express-async-handler');
const { Group, Event, User, UserEvent } = require("../../db/models");
const {
    jwtConfig: { expiresIn },
} = require("../../config");
const { Events } = require('pg');


const router = express.Router();



router.post("/", asyncHandler(async function (req, res, next) {
    const {groupId, date, description, name, seats, userId} = req.body;
    await Event.create({ name , description, date, attendance: 0, seats, hostId: userId, groupId})
    res.sendStatus(200);
}));

router.put("/:eventId", asyncHandler(async function (req, res, next) {
    const {groupId, date, description, name, seats, userId} = req.body;
    console.log(req.body)
    const eventId = req.params.eventId;
    let event = await Event.findByPk(eventId);

    if(groupId!=''){
        event.groupId = groupId;
    }
    if(date!=' '){
        event.date = date;
    }
    if(description!=''){
        event.description = description;
    }
    if(name!=''){
        event.name = name;
    }
    if(seats!=''){
        event.seats = seats;
    }
    if(userId!=''){
        event.userId = userId;
    }


    event.save();
    res.sendStatus(200);
}));

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
