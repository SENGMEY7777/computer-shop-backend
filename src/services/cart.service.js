const crypto = require('crypto');
const cart.Model = require('../models/cart.Model');

const findAll = async (filters) => {
    return cart.Model.findAll(filters);
};

const findById = async (id) => {
    return cart.Model.findById(id);
};

const create = async (payload) => {
    const id = 'car_' + crypto.randomUUID().slice(0, 8);
    return cart.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await cart.Model.findById(id);
    if (!existing) {
        const error = new Error('Cart. not found');
        error.status = 404;
        throw error;
    }
    return cart.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return cart.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
