import React, { useState } from 'react'
import "./style.css"
import CardsData from "./CardData";
import Main from './Main';
import Search from './Search';
import Cart from './Cart';
import banner from '../assets/baner.jpg'
import Footer from './Footer';
import Contact from './Contact';


const Home = () => {
    const [cartData, setCartData] = useState(CardsData);
    const [searchText, setSearchText] = useState("");
    // const dispatch = useDispatch();


    // add to cart 
    // const send = (e) => {
    //     dispatch(addToCart(e))
    //     toast.success("Item added In Your Cart")
    // }
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Function to handle category change
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const filteredData = cartData.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.dish.toLowerCase().includes(searchText.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return (
        <>
            <Main />
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>ShoeEnchant is Open now</h2>
                <Search selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} handleSearchNote={setSearchText} />
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    <Cart
                        filteredData={filteredData}
                    />
                </div>
            </section>
            <img className='bannerimg' src={banner} alt="" />
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home