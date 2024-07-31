import React from 'react';
import '../css/header.css';

function HeaderComponent(){
    return(
        <section>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </section>
    );
}

export default HeaderComponent;