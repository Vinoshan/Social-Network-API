const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
  //reactionId: Use Mongoose's ObjectId data type, default value is set to a new ObjectId
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  //reactionBody: String, required, 280 character maximum
  reactionBody: {
    type: String,
    required: 'Please enter a reaction',
    maxlength: 280
  },
  //username: String, required
  username: {
    type: String,
    required: 'Please enter your username'
  },
  //createdAt: Date, set default value to the current timestamp, use a getter method to format the timestamp on query
  createdAt: {
    type: Date,
    default: Date.now,
  }
},
  {
    toJSON: {
      getters: true
    }
  }
);

reactionSchema.path('createdAt').get(function (timestamp) {
  return formatDate(timestamp);
});

function formatDate(date) {
  const option = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }
}