import mongoose from "mongoose"

const CartSchema = mongoose.Schema({
    userId: { type: String, require: true },
    products: [
        {
            productId: { type: String, require: true },
            quantity: { type:Number, require: true },
            size: { type: String, require: true },
            price: { type: Number, require: true }
        },
    ]


}, {
    timestamps: true
}
)

const CartModel = mongoose.model('cart', CartSchema)
export default CartModel;