import mongoose from 'mongoose';

const followRequestSchema = mongoose.Schema({
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const FollowRequest = mongoose.model('FollowRequest', postSchema);

export default FollowRequest;
