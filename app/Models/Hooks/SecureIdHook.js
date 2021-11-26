'use strict'

const SecureIdHook = exports = module.exports = {}

const { v4: uuidv4 } = require('uuid');

SecureIdHook.uuid = async (object) => {
    object.secure_id = uuidv4();
}
