import React, { useState, useRef, useEffect } from 'react';

const Stats = ({ number, text }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef();

  useEffect(() => {
    const startTimer = () => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          // Use the functional form of setCount to get the latest state
          if (prevCount >= number) {
            clearInterval(interval);
          }
          return prevCount + 1;
        });
      }, 1); // Set the animation interval in milliseconds (10 for 100 FPS)
    };

    // Start the animation when the element enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startTimer(); // Start the interval when the element is visible
          observer.unobserve(elementRef.current); // Stop observing the element
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(elementRef.current); // Start observing the element
  }, [number]); // Add number to the dependency array

  return (
    <div className="stat">
      <div ref={elementRef} className="stat">
        <p>{count}+</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Stats;
