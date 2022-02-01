// mongoose
const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');

const updateSchema = new Schema(
    {
        password: {
            type: String,
            required: true,
          },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'Password'
        },
    }
);

updateSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

const Password = model('Password', updateSchema);

module.exports = Password;