import React, {useState, useEffect} from "react";
import productsData from "./productsData";
import Filters from "./Filters";
import ProductList from "./Productlist";
import "./style.css";

export default function App() {
    const [products] = useState(productsData);
    const [filters, setFilters] = useState({
        category: "",
        brands: [],
        priceMin: "",
        priceMax: "",
    });
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        let result = [...products];
        if (filters.category) {
            result = result.filter(p => p.category === filters.category);
            if (filters.brands.length > 0) {
                result = result.filter(p => filters.brands.includes(p.brand));
            }
            const min = filters.priceMin ? parseFloat(filters.priceMin) : 0;
            const max = filters.priceMax ? parseFloat(filters.priceMax) : Infinity;
                    result = result.filter(p => p.price >= min && p.price <= max);
                }
                setFilteredProducts(result);
            }, [filters, products]);
        
            const handleFilterChange = (type, value) => {
                setFilters(prev => ({
                    ...prev,
                    [type]: value
                }));
            };
        
            const resetFilters = () => {
                setFilters({
                    category: "",
                    brands: [],
                    priceMin: "",
                    priceMax: ""
                });
            };
        
            return (
                <div className="App">
                    <h1>Product Catalog</h1>
                    <Filters
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        onResetFilters={resetFilters}
                    />
                    <ProductList products={filteredProducts} />
                </div>
            );
        }