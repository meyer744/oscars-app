import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
    <div className="main-content">
        <div className="container">
            <h2>{props.title}</h2>
            <div className="home-image"></div>
                <div className="thumbnail-container">
                    <h3 className="thumbnail-heading">Best Actors</h3>
                    <Link to="/actors"><div className="home-thumbnail-1"></div></Link></div>
                <div className="thumbnail-container">
                    <h3 className="thumbnail-heading">Best Actresses</h3>
                    <Link to="/actress"><div className="home-thumbnail-2"></div></Link></div>
                <div className="thumbnail-container">
                    <h3 className="thumbnail-heading">Best Films</h3>
                    <Link to="/films"><div className="home-thumbnail-3"></div></Link></div>
            </div>
        </div>
);

export default Home;