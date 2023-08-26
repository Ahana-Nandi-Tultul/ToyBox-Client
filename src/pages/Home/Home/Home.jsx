import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../../../hooks/useTitle';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    useTitle('Home')
    const categories = useLoaderData()
    return (
        <>
            <Banner></Banner>
            {/* Subcategories */}
            <ShopByCategory
            categories = {categories}
            ></ShopByCategory>
           <Gallery></Gallery>
            
        </>
    );
};

export default Home;