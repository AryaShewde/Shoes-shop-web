import React from 'react'
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';

const Cart = ({ filteredData }) => {
    const dispatch = useDispatch();
    const send = (e) => {
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }
    if (filteredData.length < 1) {
        return (
            <h2 className='text-center text-3xl text-gray-400 mt-48 m-2'>Sorry, Nothing found</h2>
        )
    }
    return (
        <div className='row mt-2 d-flex justify-content-around align-items-center'>
            {
                filteredData.map((element, index) => {
                    return (
                        <>
                            <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                <Card.Img variant='top' className='cd imgcart' src={element.imgdata} />

                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{element.dish}</h4>
                                        <span className='text-dark bg-white'>{element.rating} <span className='text-warning bg-white'>&nbsp;★</span></span>
                                    </div>

                                    <div className="lower_data d-flex justify-content-between ">
                                        <h5 style={{ fontWeight:"bold" }}><span style={{ fontWeight:"bold", color: "gray" }}>Category: </span>{element.category}</h5>
                                        </div>
                                    <div className="extra"></div>

                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <span  style={{ fontWeight:"bold", fontSize: "20px" }}>₹ {element.price}</span>
                                        <button style={{ width: "150px", border: "2px solid green", fontWeight: "400", fontSize: "17px" }} variant='outline-light'
                                            className='btn btn-outline-success mt-2 mb-2 bg-opacity-75'
                                            onClick={() => send(element)}
                                        >Add TO Cart</button>

                                    </div>
                                </div>
                            </Card>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Cart
