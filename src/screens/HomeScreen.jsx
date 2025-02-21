import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Container,Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
import './HomeScreen.css'


function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(()=>{
    dispatch(listProducts())
  }, [dispatch])

  
  return (
    <div>
      <div className='cont'>
      <div id='intro-cont'>  
          <h1>Welcome to Your Favorite Store</h1> 
          <p>Discover the latest trends with our modern collection</p>  
          <div className='btn'>
          <button className="btn btn-light"><a href='/login'>Login</a></button>
          <button className="btn btn-warning"><a href='/cart'>My cart</a></button>
          </div>
      </div>
      </div>
      {loading ? <Loader/> 
      : error ? <Message variant ='danger'>{error}</Message>
      :

      <Row>
        {products.map(product =>(
            <Col key={product._id} sm = {12} md={6} lg={4} xl={3}>
            <Product product ={product}/>
            </Col>
        ))}
      </Row>
      } 
    </div>
  )
}

export default HomeScreen
