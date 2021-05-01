import React from 'react';
import "./Quote.scss";

const Quote = () => {
    return (
        <div className="quote__container">
            <div className="quote">
                <div className="quote__title">Get a free quote now!</div>
                <form action="" className="quote__form">
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="phone" name="phone" placeholder="Phone"/>
                    <input type="date"/>
                    <select name="service" id="">
                        <option value="local">Local moving</option>
                        <option value="long">Long distace moving123</option>
                        <option value="office">Office/Commercial</option>
                        <option value="storage">Storage</option>
                    </select>
                </form>
            </div>
            <div className="contacts">Contacts</div>
            
        </div>
    );
};

export default Quote;