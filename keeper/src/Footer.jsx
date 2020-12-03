import React from 'react';
import ReactDOM from 'react-dom';

function Footer(){
    var date = new Date();
    var currentYear = date.getFullYear();

    return(
        <footer><p>Copyright {currentYear}</p></footer>
    );
}

export default Footer;