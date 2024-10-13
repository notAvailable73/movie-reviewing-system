const users = {};

const login = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send('Name is required');
    }

    if (!users[name]) {
        users[name] = { name, favoriteTags: [] };
    }

    res.send(`Welcome, ${name}!`);
};

// Select Tags function: Adds tags to the user's favorites
const selectTags = (req, res) => {
    const { name, tags } = req.body;

    if (!name || !tags) {
        return res.status(400).send('Name and tags are required');
    }

    if (!users[name]) {
        return res.status(404).send('User not found');
    }

    // Add selected tags to user’s favorite tags
    users[name].favoriteTags = tags;
    res.send(`Tags added to ${name}'s favorites!`);
};

module.exports = { login, selectTags };
