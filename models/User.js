const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // Use regex to validate correct email format
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "thought",
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    ],

},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Virtual to get total count of friends on retrieval
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
