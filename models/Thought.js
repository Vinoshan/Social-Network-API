const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema({
  //thoughtText: String, required, 280 character maximum
  thoughtText: {
    type: String,
    required: 'Please enter a thought',
    minlength: 1,
    maxlength: 280
  },
  //createdAt: Date, set default value to the current timestamp, use a getter method to format the timestamp on query
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //reactions: Array of nested documents created with the reactionSchema
  reactions: [Reaction],
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });

thoughtSchema.path('createdAt').get(function (timestamp) {
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

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

//Create the Thought model using the thoughtSchema
const Thought = model('thought', thoughtSchema);

module.exports = Thought;