const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');

const { Product } = require('../models');

const v = new Validator();

router.post('/', async (req, res) => {
    const schema = {
        product_name: 'string',
        product_type: 'string',
        product_brand: 'string',
        price: 'string',
        quantity: 'string'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(404)
            .json(validate);
    }

    const dataproducts = await Product.create(req.body);

    res.json(dataproducts);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let datausers = await Product.findByPk(id);

    if (!datausers) {
        res.json({ message: 'Product not found' });
    }

    const schema = {
        product_name: 'string|optional',
        product_type: 'string|optional',
        product_brand: 'string|optional',
        price: 'string|optional',
        quantity: 'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }

    datausers = await Product.update(req.body);

    res.json(datausers);
});

module.exports = router;