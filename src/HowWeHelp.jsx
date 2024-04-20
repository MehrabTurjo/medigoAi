import React from 'react';

const HowWeHelp = () => {
    return (
        <div className='w-full bg-[#e4f4f5]'>
            <h1 className='text-5xl text-left mt-4 pt-14 font-normal mb-5 ml-5'>Here's how we help:</h1>
        <div className='mt-10 pt-10 flex gap-40 container mx-auto'>
            <div className='w-1/3'><span className='text-3xl rounded-full p-5 bg-white'>1</span>
            <p className='pt-5 text-2xl font-semibold mt-3' >Use our A.I. to figure out what to <br /> do</p>
            <img src="/src/assets/one.webp" alt="" />
            <p className='text-xl'>Your situation is specific to you. Our A.I. asks questions and helps narrow down what is going on based on your answers. No more guessing and filling in the blanks. It's like talking to your friend who happens to be a doctor.</p>
            </div>
            <div className='w-1/3'><span className='text-3xl rounded-full p-5 bg-white'>2</span>
            <p className='pt-5 text-2xl font-semibold mt-3'>Read our content written by clinicians</p>
            <img src="/src/assets/2.webp" alt="" />
            <p className='text-xl'>Wouldn't that be great if the content you read was actually scientifically vetted by real experts? Look no further.</p>
            </div>
            <div className='w-1/3'><span className='text-3xl rounded-full p-5 bg-white'>3</span>
            <p className='pt-5 text-2xl font-semibold mt-3'>Check out our reviews and Top 10 lists</p>
            <img src="/src/assets/3.webp" alt="" />
            <p className='text-xl'>Now that we've helped you narrow things down with both A.I. and medical experts, find the right product/service/doctor for you with the help of our team of reviewers.</p>
            </div>
            
        </div>
        <p className='text-5xl m-12 p-12'>See how Medigo Ai works → </p>
        </div>
            
        
    );
};

export default HowWeHelp;