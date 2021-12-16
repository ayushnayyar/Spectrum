import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    friendsUserId: [String],
    phone: String,
    profilePhoto: String,
    rewards: {
        type: Number,
        default: 0,
    },
});

const User = mongoose.model('User', userSchema);

export default User;
