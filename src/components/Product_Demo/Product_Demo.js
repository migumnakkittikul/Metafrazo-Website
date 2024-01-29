import { useEffect, useRef, useState } from 'react';
import './Product_Demo.css';

function ProductDemo() {
  const [frameIndex, setFrameIndex] = useState(1);
  const canvasRef = useRef(null);
  const imgRef = useRef(new Image());

  const frameCount = 148; // total number of frames

  const currentFrame = (index) => (
    `/animation/anim-${index.toString().padStart(3, '0')}.jpg`
    // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg
  );

  const updateImage = (index) => {
    imgRef.current.src = currentFrame(index);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    imgRef.current.onload = () => {
      // Get the natural dimensions of the image
      const naturalWidth = imgRef.current.naturalWidth;
      const naturalHeight = imgRef.current.naturalHeight;
  
      // Calculate the aspect ratio of the image
      const aspectRatio = naturalWidth / naturalHeight;
  
      // Calculate the scaled dimensions
      let newWidth, newHeight;
      if (canvas.width / canvas.height > aspectRatio) {
        // Fit to height
        newHeight = canvas.height;
        newWidth = newHeight * aspectRatio;
      } else {
        // Fit to width
        newWidth = canvas.width;
        newHeight = newWidth / aspectRatio;
      }
  
      // Calculate position to center the image
      const xOffset = (canvas.width - newWidth) / 2;
      const yOffset = (canvas.height - newHeight) / 2;
  
      // Draw the image
      context.drawImage(imgRef.current, xOffset, yOffset, newWidth, newHeight);
    };
  };

  useEffect(() => {
    updateImage(1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrollFraction = scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
      const newFrameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
    
      if (frameIndex !== newFrameIndex) {
        setFrameIndex(newFrameIndex);
        updateImage(newFrameIndex + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [frameIndex]);

  useEffect(() => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  }, []);

  return (
    <div className="ProductDemo">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
    </div>
  );
}

export default ProductDemo;
