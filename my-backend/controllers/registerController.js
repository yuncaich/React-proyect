// controllers/registerController.js
const { saveParentAndChildren } = require('../models/userModel');

const register = async (req, res) => {
    try {
        const { parent, children } = req.body;
        await saveParentAndChildren(parent, children);
        res.status(201).json({ message: 'Registro exitoso' });
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error en el registro' });
    }
};

module.exports = { register };
