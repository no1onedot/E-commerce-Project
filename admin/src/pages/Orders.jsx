import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify'
import { assets } from '../assets/assets';

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([]);


  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
       
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }

  }
const statusHandler = async (e, orderId) => {
  const newStatus = e.target.value;

  // store previous state (for rollback)
  const previousOrders = [...orders];

  // ✅ 1. Optimistic UI update
  setOrders(prev =>
    prev.map(order =>
      order._id === orderId
        ? { ...order, status: newStatus }
        : order
    )
  );

  try {
    const response = await axios.post(
      backendUrl + '/api/order/status',
      { orderId, status: newStatus },
      { headers: { token } }
    );

    if (!response.data.success) {
      

      // ❗ rollback if failed
      setOrders(previousOrders);
    }

  } catch (error) {
    console.log(error);
    toast.error(error.message);

    // ❗ rollback on error
    setOrders(previousOrders);
  }
};

  useEffect(() => {
    fetchAllOrders()
  }, [token])
  return (
    <div>
      <h2>Order Page</h2>
      <div>
        {
          orders.map((order, idx) => (
            <div className='border border-black flex flex-col sm:flex-row  gap-2 sm:gap-4 justify-between px-1 sm:px-5 my-5 py-3 items-center text-xs  sm:text-sm' key={idx} >
              <div>
                 <p className='mb-3 text-xs'>Order Id : {order._id}</p>
              <img src={assets.parcel_icon} alt='' />
              </div>
             
              <div className='py-2 sm:py-5  '>
                <div>
                  {
                    order.items.map((item, idx) => {
                      if (idx === order.items.length - 1) {
                        return <p key={idx} className='py-2 sm:py-5 ' > {idx +1 } <b>--</b>  {item.name} x {item.quantity} <span>{item.size}</span></p>
                      } else {
                        return <p key={idx} className='py-2 sm:py-5 ' >  {idx + 1} <b>--</b>  {item.name} x {item.quantity} <span>{item.size},</span></p>
                      }
                    })
                  }
                </div>
                <p className='  font-bold '>{order.address.firstName + " " + order.address.lastName}</p>
                <div>
                  <p>{order.address.street + ", "}</p>
                  <p>{order.address.city + ", " + order.address.state + ", ," + order.address.country + ", " + order.address.zipcode}</p>

                </div>
                <p>{order.address.phone}</p>
              </div>
              <div className='py-2 sm:py-5 '>
                <p>Items : {order.items.length}</p>
                <p>Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div >
              <p className='py-5 '>{currency}{order.amount}</p>
              <select onChange={(e)=>statusHandler(e,order._id)} className='font-bold' value={order.status}>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery"> Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders