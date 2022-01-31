// mongoose
const { Schema, model } = require('mongoose')

const favoriteSchema = new Schema(
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