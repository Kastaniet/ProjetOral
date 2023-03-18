import React from 'react'
import Card from '../Card/Card';
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch(`/products?populate=*&[filter][type][$eq]=${type}`);
 
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit voluptate, fuga saepe, consectetur dignissimos iusto consequatur nam asperiores quo, debitis vero inventore facere? Dicta veritatis beatae aut ducimus fugiat.
        </p>
      </div>
      <div className="bottom">
        {error ? "Quelque chose ne fonctionne pas" : (loading ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)) }
      </div>
    </div>
  )
}

export default FeaturedProducts