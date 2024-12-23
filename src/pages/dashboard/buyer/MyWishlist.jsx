import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useUserData from "../../../hooks/useUserData";
import LoadingPage from "../../LoadingPage";
import ProductCard from "../../../components/cards/ProductCard";

const MyWishlist = () => {
  const userData = useUserData();
  const [wishlist, setWishlist] = useState([]);
  const [latestWishlist, setLatestWishlist] = useState(true);
  const [loading, setLoading] = useState([]);

  const token = localStorage.getItem('access-token');

  useEffect(() => {
    const fetch = async () => {
      axios.get(`https://lush-looks-server.vercel.app/wishlist/${userData._id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          setWishlist(res.data);
          setLoading(false);
        })
    }

    if (userData._id && token) {
      fetch();
    }
  }, [userData, token, latestWishlist])

  return (
    <div>
      <Helmet>
        <title>MyWishlist | LushLooks Dashboard</title>
      </Helmet>

      {
        loading ?
          <LoadingPage></LoadingPage>
          :
          (wishlist.length > 0) ?
            <div className=" grid md:grid-cols-2 gap-5 p-7">
              {wishlist.map(product => <ProductCard
                key={product._id}
                product={product}
                setLatestWishlist={setLatestWishlist}
                isInWishlist>
              </ProductCard>)}
            </div>
            :
            <div className=" flex justify-center items-center min-h-screen text-2xl">
              <h1>No product in your Wishlist</h1>
            </div>
      }

    </div>
  );
};

export default MyWishlist;