import React, { useState, useEffect, useRef } from 'react';
import './PD_Background.css';
import ProductDemo from './Product_Demo';

const PD_Background = () => {
    const [isInView, setIsInView] = useState(true);
    const containerRef = useRef(null);

    const checkIfInView = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
    
            // Check if any part of the component is in the viewport
            const inView = rect.bottom >= 0 && rect.top <= window.innerHeight;
    
            setIsInView(inView);
        }
    };
    

    useEffect(() => {
        window.addEventListener('scroll', checkIfInView);

        // Initial check
        checkIfInView();

        return () => window.removeEventListener('scroll', checkIfInView);
    }, []);

    return (
        <div 
          ref={containerRef} 
          style={{ height: '100vh', width: '100vw' }}
          className={isInView ? 'PD_Background' : 'PD_Background_OutOfView'}
        >
            {/* <h1>This is the PD_Background component</h1> */}
            <ProductDemo />
        </div>
    );
};

export default PD_Background;
