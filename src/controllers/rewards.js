import User from '../models/user.js';

export const fetchRewards = async (req, res) => {
    const { id } = req.params;

    try {
        if (!req.userId) {
            return res.json({ message: 'Unauthenticated' });
        }

        const user = await User.findOne({ _id: id });

        res.status(201).json(user.rewards);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
