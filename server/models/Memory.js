const { Schema, model } = require('mongoose');

const memorySchema = new Schema(
    {
        memoryText: {
            type: String,
            required: 'Please enter memory!',
            minlength: 1
        },
        username: {
            type: String,
            required: true
        },
        memoryYear: {
            type: Number,
        },
        memoryMonth: {
            type: Number,
        },
        memoryDate: {
            type: Number,
        }
    }
);

const Memory = model('Memory', memorySchema);

module.exports = Memory;