import React from 'react'
import { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import useFetch from '../../hooks/useFetch';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import { useAuthContext } from '../../context/AuthContext';


const Product = () => {
  const id = parseInt(useParams().id);
  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)

  const { user } = useAuthContext();
  const userName = user?.username
  
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleDelete = (e) => {

    fetch(`http://localhost:8080/api/products/${id}?populate=*`, {
      method: "DELETE",
      body: data,
      headers: {},
    })

    fetch(`http://localhost:8080/api/upload/files/${data?.attributes?.img?.data.id}`, {
      method: "DELETE",
      headers: {},
    })

  }

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img src={process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.img?.data?.attributes?.url
              } alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img src={process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.img2?.data?.attributes?.url
              } alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>{data?.attributes?.price}€</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className='add' onClick={() => dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                img: data.attributes.img.data.attributes.url,
                price: data.attributes.price,
                quantity
              })
            )}>
              <AddShoppingCartIcon /> Add To cart
            </button>
            {
            (userName === data?.attributes?.CreatedBy) ?
            <button className='del' onClick={handleDelete}><DeleteOutlinedIcon />Delete</button> : ""
              }
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon /> Add to Wishlist
              </div>
            </div>
            <div className="info">
              <span>Vendeur</span>
              <span>Produit</span>
              <span>Tag: </span>
            </div>
            <hr />
            <div className="info">
              <span>Description</span>
              <hr />
              <span>Information suppplémentaire</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Product