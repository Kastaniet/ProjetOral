import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from "../../hooks/useFetch";
import "./Products.scss";


const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState("asc");
  const [selectedSubcats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`);
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubcats, value] : selectedSubcats.filter(item => item !== value))
  };

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item)=> (
          <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Product by Prices</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value) } />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" name="price" onChange={e=>setSort('asc')}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" name="price" onChange={e => setSort('desc')} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className='catImg'
          src="https://i.imgur.com/iambjRc.jpg"
          alt="" />
        {catId === 6 ? (<Link to='/AddProduct'><button>Ajouter</button></Link > ) : ""}
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubcats} />
      </div>
    </div>
  )
}

export default Products;