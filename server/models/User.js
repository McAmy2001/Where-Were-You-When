const { Schema, model } = require("mongoose");
// requireing bcrypt for hashing user password
const bcrypt = require("bcrypt");

// setting up new schema for user model
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  memories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Memory",
    },
  ],
});

// set up pre-save middleware to create password
UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// comparing inputed password with hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", UserSchema);

// exporting User model so it can be used elsewhere
module.exports = User;
