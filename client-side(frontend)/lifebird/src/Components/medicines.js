import { useState } from "react";
import './medicines.css';
function Medicine(){
    return(
        <div className='main'>
            <div className='navbar'>
                <h2 className='logo'>LifeBird</h2>
                <h2 className='home'>Home</h2>
                <h2 className='doctor'>Doctors</h2>
                <h2 className='lab'>Labs</h2>
                <h2 className='medicine'>Medicines</h2>
                <h2 className='signup'>Signup</h2>
            </div>
            <div className="main-section">
                <div className="medical-search">
                    <input type="text" placeholder=""></input>
                    <button className="medical-button">
                        <img src="/resources/search.avif"></img>
                    </button>
                </div>
            </div>
          
            <h3 className="heading">Health Gummies</h3>
            <div className="part1">
                <div className="small-section">
                    <img src="/resources/gum1.jpg"></img>
                    <p>Royale Health Biotin Gummies</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/gum2.jpg"></img>
                    <p>Nutracitta Biotin Beauty Blend</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/gum3.webp"></img>
                    <p>Nutrition Multivitamin Booster</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/gum4.jpg"></img>
                    <p>Pack Sugar Apple Cider Vinegar</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/gum5.png"></img>
                    <p>Royale Health Biotin Gummies</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/gum6.jpeg"></img>
                    <p>Iron Health Male Enhancement </p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                
            </div>
            <h3 className="heading">Baby Carnival</h3>
            <div className="part1">
                <div className="small-section">
                    <img src="/resources/carnival1.webp"></img>
                    <p>Horlicks Classic Malt Flavour</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/carnival2.webp"></img>
                    <p>MamyPoko Extra Absorb</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/carnival3.webp"></img>
                    <p>Pediasure Chocolate Flavour </p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/carnival4.webp"></img>
                    <p>Cetaphil Baby Daily lotion</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/carnival5.webp"></img>
                    <p>Little's  Cleansing Baby Wipes</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/carnival6.webp"></img>
                    <p>Sebamed Baby Cleansing Bar</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
            </div>
            <h3 className="heading">Tablets</h3>
            <div className="part1">
                <div className="small-section">
                    <img src="/resources/tablet1.avif"></img>
                    <p>Paracetamol Tablet</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/tablet2.jpg"></img>
                    <p>Cetirizine HCL Tablet</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/tablet3.jpg"></img>
                    <p>Saridon Headache Relief Tablet</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/tablet4.webp"></img>
                    <p>Daily Iron Tablet </p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/tablet5.jpg"></img>
                    <p>Calcium supplements</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/tablet6.webp"></img>
                    <p>Zinc Supplements</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
            </div>
            <h3 className="heading">Protein products</h3>
            <div className="part1">
                <div className="small-section">
                    <img src="/resources/protein.webp"></img>
                    <p>vega sport protein</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/protein1.webp"></img>
                    <p>oziva plant protein</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/protein2.webp"></img>
                    <p>sunwarrior blend </p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/protein3.webp"></img>
                    <p>Dymatize elite casein</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/protein4.webp"></img>
                    <p>now sports pea protein</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
                <div className="small-section">
                    <img src="/resources/protein5.webp"></img>
                    <p>Jay robb say protein</p>
                    <h4>MRP:1021</h4>
                    <button className="cart">ADD TO CART</button>
                </div>
            </div>
        
        
        
        
        <div className='footer'>
            <div className='location'>
                <h1>LOCATION</h1>
                <p>somewhere in India</p>
            </div>
            <div className='logos'>
                <h1>AROUND THE WEB</h1>
                <div className='logo1'>
                    <div className="facebook">
                        <a href="https://www.facebook.com/"><img src="/resources/facebook.avif" alt=""></img></a>
                    </div>
                    <div className="insta">
                        <a href="https://www.instagram.com/"><img src="/resources/instagram.avif" alt=""></img></a>
                    </div>
                    <div className="twitter">
                        <a href="https://twitter.com/"><img src="/resources/twitter.png" alt=""></img></a>
                    </div>
                </div>
            </div>
            <div className='about'>
             <h1>ABOUT US</h1>
             <p>Connecting patients with trusted doctors online for<br></br> accessible and convenient healthcare.</p>
           </div>
        </div>
    </div>
    )
}
export default Medicine;