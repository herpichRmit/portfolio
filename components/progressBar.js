import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollHeight = (scrollTop / windowHeight) * 100;
    setScrollHeight(scrollHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 h-full w-2">
      <div className="w-2 h-0 bg-gray-300" style={{ height: `${scrollHeight}%` }}></div>
    </div>
  );
};

export default ProgressBar;

