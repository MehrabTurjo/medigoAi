import React from 'react';

const Links = () => {
    return (
        <div className='flex justify-between container mx-auto'>

            <div>
            <h4>Product</h4>
            <ul>
                <li>How it works</li>
                <li>Blog</li>
                <li>Editorial Standards</li>
                <li>Medical writers and Reviewers</li>
                <li>Security & Privacy</li>
            </ul>
            </div>

            <div>
            <h4>Company</h4>
            <ul>
                <li>Our Mission</li>
                <li>Press</li>
                <li>Leadership</li>
                <li>Careers</li>
            </ul>
            </div>

            <div>
            <h4>Support</h4>
            <ul>
                <li>How it works</li>
            </ul>
            </div>
        </div>
    );
};

export default Links;