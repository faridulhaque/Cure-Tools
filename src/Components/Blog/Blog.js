import React from 'react';

const Blog = () => {
    return (
        <div className="ms-3">
            <div>
                <h2>How will you improve the performance of a React Application?</h2>
                <p>
                    We need to do these things to make a react app perform better.
                    <ul>
                        <li>We should nor repeat code</li>
                        <li>We should resize images for make it lighter</li>
                        <li>We should use more hooks </li>
                        <li>we should avoid unnecessary comments</li>
                    </ul>
                </p>
            </div>
            <div>
                <h2>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>We can search them by making this url: localhost:5000/data?name=${'<name>'}</p>
            </div>
            
        </div>
    );
};

export default Blog;