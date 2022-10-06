const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');

const v = new Validator();

router.post('/', async (req, res) => {
    const schema = {
        username: 'string',
        password: 'string',
        email: 'string',
        fullname: 'string',
        address: 'string',
        phone: 'string',
        gender: 'string',
        birth_date: 'string'

 