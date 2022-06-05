import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/Product.module.css';

const MensProduct = () => {
    const { id } = useParams()
    const [value,setValue] = useState({})

    useEffect(()=>{
        if(id)
        {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setValue(data))
        }
    },[id])

  return (
    <div className={styles.Box}>
        <img src={value.image} alt="" />
        <div className={styles.infoBox}>
            <h1>{value.title}</h1>
            
            <p>{`Description : ${value.description}`}</p>

            <div className={styles.priceBox}>
                <h3>{`Price : ${value.price} $`}</h3>
                <h3>{`Category : ${value.category}`}</h3>
            </div>
        </div>
    </div>
  )
}

export default MensProduct