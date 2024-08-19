import {useEffect, useState} from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorSelection from './CategorSelection';

const BlogPages = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

                // Filter by category if selected
                if (selectedCategory) {
                    url += `&category=${selectedCategory}`;
                }

                const response = await fetch(url);
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    // Handle page change
    const handlePagesChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    };

    return (
        <div>
            {/* Category Section */}
            <div>
                <CategorSelection 
                    onSelectCategory={handleCategoryChange} 
                    selectedCategory={selectedCategory} 
                    activeCategory={activeCategory}
                />
            </div>

            {/* Blog Cards Section */}
            <div>
                <BlogCards 
                    blogs={blogs} 
                    currentPage={currentPage} 
                    selectedCategory={selectedCategory} 
                    pageSize={pageSize}
                />
            </div>

            {/* Pagination Section */}
            <div>
                <Pagination 
                    onPageChange={handlePagesChange} 
                    currentPage={currentPage} 
                    blogs={blogs} 
                    pageSize={pageSize}
                />
            </div>
        </div>
    );
}

export default BlogPages;
