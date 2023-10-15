const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    require: true,
    // Use a regular expression to validate the email address
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
}

const User = model('user', userSchema);
module.exports = User;