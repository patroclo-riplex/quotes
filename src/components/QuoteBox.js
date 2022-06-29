import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';
import { random } from '../elif/Random';
import Button from './Button';

const QuoteBox = () => {
    const colors = [
        "#A75663",
        "#A65F43",
        "#91702D",
        "#6C8031",
        "#2C8D53",
        "#009487",
        "#2F4858"
      ]

    const [ quote, setQuote ] = useState(quotes[random(quotes.length)]);
    const color = colors[random(colors.length)];

    const changeQuote = () => {
        setQuote(quotes[random(quotes.length)]);
    }

    document.body.style.background = color;

    return (
        <div className='card' style={{color}}>
            <p className='quotes-icon'><i className="fa-solid fa-quote-left"></i></p>
            <p>{quote.quote}</p>
            <h3 className='author'>{quote.author}</h3>
            <Button changeQuote={changeQuote} color={color}/>
        </div>
    );
};

export default QuoteBox;