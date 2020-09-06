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



module.exports = router;
