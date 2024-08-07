/* eslint-disable react/prop-types */
import { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../Action/CartAction";
import { Link, useNavigate } from "react-router-dom";
import currencyFormatter from "currency-formatter";
const CartItem = lazy(() => import("../../Componenets/CartItem/CartItem"));

const Cart = ({ forAccountPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cartData } = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.authReducer?.authData?.user?._id);
  useEffect(() => {
    const fetchCartData = async () => {
      await dispatch(getUserCart(user));
      setLoading(false);
    };
    fetchCartData();
  }, [dispatch]);
  useEffect(() => {
    if (cartData) {
      const total = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalPrice(total);
    }
  }, [cartData]);

  const updateTotalPrice = (priceChange) => {
    setTotalPrice((prevTotal) => prevTotal + priceChange);
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (cartData?.length <= 0) {
    return (
      <div>
        <div
          className={`flex flex-col gap-5 justify-center items-center ${
            forAccountPage ? "h-96" : "h-screen"
          }  w-full`}
        >
          <h1 className="text-2xl font-semibold">
            <img width={200} src="/gif-1.gif" alt="" />
            Your Cart is <span className="text-red-600">Empty!</span>
          </h1>
          <Link
            to={"/collection/all"}
            className="btn text-white hover:bg-black hover:scale-95 duration-500 bg-black"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="   grid relative grid-cols-7 items-center place-items-center w-full gap-2  ">
        {/* Left side */}
        <div className=" pt-24 max-md:px-2 p-8 max-md:h-[75vh] col-span-5 w-full max-md:col-span-7 space-y-1 overflow-scroll max-h-screen">
          <div className="p-8 text-2xl font-bold   flex justify-between   ">
            Shopping Cart
            <span className="text-xl">
              {cartData.length} <span className="">Items</span>
            </span>
          </div>
          {cartData?.map((data, i) => (
            <CartItem key={i} data={data} updateTotalPrice={updateTotalPrice}/>
          ))}
        </div>
        {/* Right Side */}
        <div
          style={{ background: "#e9edd1" }}
          className=" shadow-md max-md:h-[25vh] col-span-2 flex flex-col justify-between pt-28 max-md:pt-5 p-10 max-lg:px-6 text-black max-md:fixed  relative right-0 max-md:right-auto top-0 max-md:top-auto w-full h-screen  bottom-0  left-0"
        >
          <div>
            <h1 className="text-xl max-md:hidden max-lg:text-base font-bold">
              Order Summery
            </h1>
            <hr className="my-4 max-md:hidden border-black border" />
            <h1 className="text-lg max-lg:text-base flex justify-between">
              Cart Total : <span className="font-semibold">₹{totalPrice}</span>{" "}
            </h1>
            <h1 className="text-lg my-1 max-lg:text-base flex justify-between">
              Delivery Fee : <span className="font-semibold">Free</span>{" "}
            </h1>
            <hr className="my-2 border-black border" />
            <h1 className="text-lg max-lg:text-base flex justify-between">
              Order Total :{" "}
              <span className="font-semibold">
                ₹{" "}
                {currencyFormatter.format(totalPrice, {
                  code: "IND",
                })}
              </span>{" "}
            </h1>
          </div>
          <div>
            <div className="my-4 max-md:hidden">
              <h1 className="text-lg max-lg:text-base font-bold">
                Return/Refund policy
              </h1>
              <p className="text-sm">
                In case of return, we ensure quick refunds. Full amount will be
                refunded excluding Convenience Fee
              </p>
            </div>
            <div className="mb-8 max-md:hidden">
              <h1 className="text-lg max-lg:text-base font-bold">
                Free Shipping
              </h1>
              <p className="text-sm">
                Great news! Enjoy shopping with us and get free delivery on
                every order. No extra charges, just pure savings!{" "}
              </p>
            </div>
            <div
              onClick={() => navigate("/checkout")}
              className=" bg-black w-full hover:shadow-boxShadow1 max-md:mt-5 duration-300 border-black border-2 cursor-pointer text-white p-3 text-center rounded-lg"
            >
              Check Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
