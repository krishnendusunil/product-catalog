import React from "react";
export default function Filters({ filters, onFilterChange, onResetFilters }) {
    const categories = [...new Set(allProducts.map(p => p.category))];
    const brands = [...new Set(allProducts.map(p => p.brand))];

    const toggleBrand = (brand) => {
        const newBrands = filters.brands.includes(brand)
            ? filters.brands.filter(b => b !== brand)
            : [...filters.brands, brand];
        onFilterChange("brands", newBrands);
    }
    return (
        <div className="filters">
            <div>
                <label>Category:</label>
                <select
                    value={filters.category}
                    onChange={(e) => onFilterChange("category", e.target.value)}
                >
                    <option value="">All</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Brands:</label>
                {brands.map(brand => (
                    <div key={brand}>
                        <input
                            type="checkbox"
                            checked={filters.brands.includes(brand)}
                            onChange={() => toggleBrand(brand)}
                        />
                        {brand}
                    </div>
                ))}
            </div>
            <div className="price-range">
                <label>Price Range:</label> 
                <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceMin}
                    onChange={(e) => onFilterChange("priceMin", e.target.value)}
                    />
                <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceMax}    
                    onChange={(e) => onFilterChange("priceMax", e.target.value)}
                />
            </div>
            <button onClick = {onReset} className="reset-btn">Reset Filters</button>
            </div>
    );

}