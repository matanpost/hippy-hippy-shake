const { Schema, model } = require('mongoose')

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    glass: {
      type: String,
      required: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe