const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');

const { User } = require('../models');

const v = new Validator();

router.get('/', async (req, res) => {
    const datausers = await User.findAll();
    return res.json(datausers);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const datausers = await User.findByPk(id);

    return res.json(datausers || 'ID user not found');
});

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

    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(404)
            .json(validate);
    }

    const datausers = await User.create(req.body);

    res.json(datausers);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let datausers = await User.findByPk(id);

    if (!datausers) {
        res.json({ message: 'User not found' });
    }

    const schema = {
        username: 'string|optional',
        password: 'string|optional',
        email: 'string|optional',
        fullname: 'string|optional',
        address: 'string|optional',
        phone: 'string|optional',
        gender: 'string|optional',
        birth_date: 'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }

    datausers = await datausers.update(req.body);

    res.json(datausers);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const datausers = await User.findByPk(id);

    if (!datausers) {
        return res.json({ message: 'User not found' });
    }

    await datausers.destroy();

    res.json({
        message: 'User is deleted'
    });
});

module.exports = router;