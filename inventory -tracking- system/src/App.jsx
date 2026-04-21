import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

function App() {
  return (
    <div className="container">
    
      <div className="form-section">
        <ProductForm />
      </div>

      <div className="table-section">
        <ProductTable />
      </div>
    </div>
  );
}

export default App;