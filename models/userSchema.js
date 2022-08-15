const mongoose = require('mongoose');

let PostSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    body: { type: String, require: false },
  },
  { versionKey: false }
);

let TaskSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    completed: { type: String, require: false },
  },
  { versionKey: false }
);

let UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    city: String,
    street: String,
    zipcode: Number,
    tasks: [{ type: TaskSchema, require: false }],
    posts: [{ type: PostSchema, require: false }],
  },
  { versionKey: false }
);

module.exports = mongoose.model('users', UserSchema);
