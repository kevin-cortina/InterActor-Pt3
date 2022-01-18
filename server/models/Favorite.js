// mongoose
const { Schema, model } = require('mongoose')

// password encrypter
const bcrypt = require('bcrypt');

// Create a new Sequelize model for books
class Favorites extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

const favoriteSchema = new schema(
    {
        title: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        releaseDate: {
            type: String,
            required: true
        },
        favorites: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

const Favorites = model('Favorites', favoriteSchema);

module.exports = Favorites;