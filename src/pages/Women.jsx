import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/Products.module.css';

const Women = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then(res=>res.json())
    .then(d=>setData(d))
  },[])
  return (
    <div>
      <h1>Women Page</h1>
      <div className={styles.container}>
        {
          data.map((el)=>{
            return (
            <div key={el.id} className={styles.innerBox}>
              <img src={el.image} />
              <p>{el.title}</p>
              <Link to={`/Women/${el.id}`}>see more</Link>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Women