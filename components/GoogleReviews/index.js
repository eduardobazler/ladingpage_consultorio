import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="elfsight-app-f1fd0fd2-86d3-485d-aa0a-d1b674f0e57d"></div> // Substitua pelo ID do seu widget
  );
}