import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import blogReducer from "../features/blogs/blogSlice";
import queryReducer from "../features/queries/querySlice";
import orderReducer from "../features/order/orderSlice";
import categoryReducer from "../features/category/categorySlice";
import uploadReducer from "../features/upload/uploadSlice";
import discountReducer from "../features/discount/discountSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    discount: discountReducer,
    blog: blogReducer,
    query: queryReducer,
    order: orderReducer,
    category: categoryReducer,
    uploadImg: uploadReducer,
  },
});
