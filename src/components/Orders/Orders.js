import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(res => {
                console.log(res);
                if (res.status === 401 || res.status === 403) {
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
                console.log(data);
            })
    }, [navigate])
    return (
        <div>
            <h1>Orders: {orders.length}</h1>
        </div>
    );
};

export default Orders;