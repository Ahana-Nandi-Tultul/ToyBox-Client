import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../../../hooks/useTitle';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import About from '../About/About';

const Home = () => {
    useTitle('Home')
    const categories = useLoaderData()
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Gallery></Gallery>
            {/* Subcategories */}
            <ShopByCategory
            categories = {categories}
            ></ShopByCategory>
            <Services></Services>
            
        </>
    );
};

export default Home;