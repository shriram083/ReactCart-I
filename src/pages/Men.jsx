import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/Products.module.css'

const Men = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then(res=>res.json())
    .then(d=>setData(d))
  },[])
  return (
    <div>
      <h1>Men Page</h1>
      <div className={styles.container}>
        {
          data.map((el)=>{
            return (
            <div key={el.id} className={styles.innerBox}>
              <img src={el.image} />
              <p>{el.title}</p>
              <Link to={`/Men/${el.id}`}>see more</Link>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Men