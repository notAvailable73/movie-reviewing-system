const users = [];

const UserModel = {
    createUser: function(name) {
        const user = {
            id: users.length + 1,
            name: name,
            favorites: [] // Array to store favorite movie IDs
        };
        users.push(user);
        return user;
    },

    getUserById: function(id) {
        return users.find(user => user.id === id);
    },

    addFavorite: function(userId, movieId) {
        const user = this.getUserById(userId);
        if (user && !user.favorites.includes(movieId)) {
            user.favorites.push(movieId);
        }
    },

    getFavorites: function(userId) {
        const user = this.getUserById(userId);
        if (user) {
            return user.favorites;
        }
        return [];
    }
};

module.exports = UserModel;
