const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    orders: [
      {
        id: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
        order_id: {
          type: String,
        },
      },
    ],
    roll: {
      type: String,
      default: "customer",
      enum: ["admin", "customer"],
    },
    addProduct: {
      type: [mongoose.Types.ObjectId],
      ref: "Product",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
