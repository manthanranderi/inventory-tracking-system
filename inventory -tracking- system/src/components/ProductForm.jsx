import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productThunks";

const ProductForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    title: "",
    type: "",
    stock: "",
    amount: "",
  };

  const [values, setValues] = useState(initialValues);

  const updateValue = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProduct = (e) => {
    e.preventDefault();

    const { title, type, stock, amount } = values;

    if (!title.trim() || !type.trim() || !stock || !amount) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      addProduct({
        name: title,
        category: type,
        quantity: stock,
        price: amount,
      })
    );

    setValues(initialValues);
  };

  return (
    <div className="form-box">
      <h2 className="form-title">Add Product</h2>

      <form onSubmit={saveProduct} className="vertical-form">
        <input
          type="text"
          name="title"
          placeholder="Product Name"
          value={values.title}
          onChange={updateValue}
        />

        <input
          type="text"
          name="type"
          placeholder="Category"
          value={values.type}
          onChange={updateValue}
        />

        <input
          type="number"
          name="stock"
          placeholder="Quantity"
          value={values.stock}
          onChange={updateValue}
        />

        <input
          type="number"
          name="amount"
          placeholder="Price"
          value={values.amount}
          onChange={updateValue}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;