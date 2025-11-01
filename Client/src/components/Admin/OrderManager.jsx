// src/components/Admin/OrderManager.jsx

import React, { useState, useEffect, useCallback } from 'react';
import api from '../../api';

const OrderManager = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllOrders = useCallback(async () => {
        setLoading(true);
        try {
            const res = await api.get("/order/all"); 
            setOrders(res.data?.orders || []);
        } catch (err) {
            console.error("Failed to fetch all orders:", err);
            setOrders([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllOrders();
    }, [fetchAllOrders]);

    const handleUpdateOrderStatus = async (orderId, newStatus) => {
        try {
            await api.patch(`/order/${orderId}/status`, { status: newStatus });
            fetchAllOrders(); 
        } catch (err) {
            alert("Failed to update order status.");
            console.error(err);
        }
    };

    if (loading) return <p className="text-center mt-5">Loading Orders...</p>;

    return (
        <div className="order-manager">
            <h3>Order Management ({orders.length} Total)</h3>
            
            {orders.length === 0 ? (
                <p>No orders found in the system.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer Email</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id.slice(-6)}</td>
                                <td>{order.user?.email || 'N/A'}</td>
                                <td>${(order.total || 0).toFixed(2)}</td>
                                <td><span className={`badge bg-${order.status === 'completed' ? 'success' : order.status === 'pending' ? 'warning' : 'danger'}`}>{order.status}</span></td>
                                <td>
                                    <select 
                                        className="form-select form-select-sm" 
                                        defaultValue={order.status}
                                        onChange={(e) => handleUpdateOrderStatus(order._id, e.target.value)}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="completed">Completed</option>
                                        <option value="canceled">Canceled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrderManager;