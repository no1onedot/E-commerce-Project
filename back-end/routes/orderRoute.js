import express from "express"
import {placeOrder , placeOrderStripe , placeOrderRazorpay , allOrders , userOrders , updateStatus, verifyStripe}  from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js";


const orderRouter = express.Router();

// ADMIN FEATURES

orderRouter.post('/status',adminAuth,updateStatus);
orderRouter.post('/list',adminAuth,allOrders);

// Payment features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/place-stripe',authUser,placeOrderStripe);
orderRouter.post('/place-razorpay',authUser,placeOrderRazorpay);


// User feature
orderRouter.post('/userorders',authUser,userOrders)

// verify payment

orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter;