import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase";
import {
  ref,
  get,
  push,
  update,
  remove,
} from "firebase/database";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const snapshot = await get(ref(db, "products"));
    const data = snapshot.val();

    if (!data) return [];

    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
  }
);

export const addProduct = createAsyncThunk(
  "products/add",
  async (product) => {
    const newRef = await push(ref(db, "products"), {
      name: product.name,
      category: product.category,
      quantity: Number(product.quantity),
      price: Number(product.price),
    });

    return {
      id: newRef.key,
      ...product,
    };
  }
);

export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, data }) => {
    await update(ref(db, `products/${id}`), {
      name: data.name,
      category: data.category,
      quantity: Number(data.quantity),
      price: Number(data.price),
    });

    return { id, data };
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id) => {
    await remove(ref(db, `products/${id}`));
    return id;
  }
);