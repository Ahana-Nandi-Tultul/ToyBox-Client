import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <>
            <Banner></Banner>
            {/* Subcategories */}
            
        </>
    );
};

export default Home;