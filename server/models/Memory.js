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
            required: 'Please enter the year of your memory!'
        },
        memoryMonth: {
            type: Number,
            required: 'Please enter the month of your memory!'
        },
        memoryDate: {
            type: Number,
            required: 'Please enter the date of your memory!'
        }
    }
);

const Memory = model('Memory', memorySchema);

module.exports = Memory;