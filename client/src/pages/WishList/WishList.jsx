/* eslint-disable react/prop-types */
import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist } from "../../Action/WishlistAction";
import { Link } from "react-router-dom";
const WishListItem = lazy(() =>
  import("../../Componenets/WishListItem/WishListItem")
);

const WishList = ({ forAccountPage }) => {
  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const user = useSelector((state) => state.authReducer.authData.user._id);
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    dispatch(fetchWishlist(user));
    setReload(false);
  }, [reload]);

  if (wishlist?.length <= 0) {
    return (
      <>
        <div className=" h-screen w-full flex flex-col leading-10 justify-center items-center">
          <div className=" text-2xl font-semibold  text-red-700 ">
            Wishlist is empty!
          </div>
          <div>You can wishlist products and buy them later</div>
          <Link
            to={"/collection/all"}
            className="btn text-white hover:bg-black hover:scale-95 duration-500 bg-black"
          >
            View Product
          </Link>
        </div>
      </>
    );
  }

  return (
    <div
      className={`max-h-screen w-full   overflow-auto ${
        forAccountPage && "rounded-lg shadow-lg shadow-black/10 border-2"
      }`}
    >
      <div
        className={`${
          forAccountPage ? " p-0" : "p-12 max-lg:px-5 max-sm:px-2  pt-32"
        }  `}
      >
        <div
          className={`${
            forAccountPage
              ? " px-10  grid-cols-3 max-lg:grid-cols-2 py-5   "
              : "px-36 max-lg:px-10  grid-cols-4 max-lg:grid-cols-3  "
          } max-md:px-2 max-md:grid-col-2 max-sm:grid-cols-2 grid place-items-center items-start  `}
        >
          <Suspense
            fallback={
              <div className="fixed top-0 right-0 flex justify-center w-screen items-center h-screen">
                <div className="loader"></div>
              </div>
            }
          >
            {wishlist?.map((data, i) => (
              <WishListItem
                forAccountPage={forAccountPage}
                setReload={setReload}
                key={i}
                data={data}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default WishList;
