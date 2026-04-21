import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
} from "../features/productThunks";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEdit = (product) => {
    setEditId(product.id);
    setEditData(product);
  };

  const handleUpdate = () => {
    if (
      !editData.name.trim() ||
      !editData.category.trim() ||
      !editData.quantity ||
      !editData.price
    ) {
      alert("Fill all fields");
      return;
    }

    dispatch(updateProduct({ id: editId, data: editData }));
    setEditId(null);
  };

  return (
    <div className="table-box">
      <table className="product-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items?.length > 0 ? (
            items.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>

                <td>
                  {editId === p.id ? (
                    <input
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                    />
                  ) : (
                    p.name
                  )}
                </td>

                <td>
                  {editId === p.id ? (
                    <input
                      value={editData.category}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          category: e.target.value,
                        })
                      }
                    />
                  ) : (
                    p.category
                  )}
                </td>

                <td>
                  {editId === p.id ? (
                    <input
                      type="number"
                      value={editData.quantity}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          quantity: e.target.value,
                        })
                      }
                    />
                  ) : (
                    p.quantity
                  )}
                </td>

                <td>
                  {editId === p.id ? (
                    <input
                      type="number"
                      value={editData.price}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          price: e.target.value,
                        })
                      }
                    />
                  ) : (
                    p.price
                  )}
                </td>

                <td>
                  {editId === p.id ? (
                    <>
                      <button onClick={handleUpdate}>Save</button>
                      <button onClick={() => setEditId(null)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(p)}>
                        Update
                      </button>

                      <button
                        onClick={() =>
                          dispatch(deleteProduct(p.id))
                        }
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Products Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;