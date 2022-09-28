const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minLength: 5
    },
    memories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Memory'
      }
    ]
  }
);

const User = model('User', UserSchema);

module.exports = User;