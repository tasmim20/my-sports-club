import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blogs'>
            <div className='blog'>
             <h4>1.How does react work..?</h4>
             <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='blog'>
            <h4>What is difference between props and state...?</h4>
            <p> Props are immutable
             which lets React do fast reference checks.
             Props are used to pass data down from your view-controller
            Its have better performance
           Use this to pass data to child components</p>
           <p>
           State is mutable State should be managed in your view-controller.It is a top level component. It has worse performance.Should not be accessed from child components.Pass it down with props instead.

           </p>
            </div>
            <div className='blog'>
               <h4>What does useEffect do without load API through fetch..?</h4>
               <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
            </div>
        </div>
    );
};

export default Blog;