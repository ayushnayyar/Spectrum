import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    friendRequests: [String],
    friends: [String],
    phone: String,
    profilePhoto: String,
    rewards: {
        type: Number,
        default: 0,
    },
});

const User = mongoose.model('User', userSchema);

export default User;
