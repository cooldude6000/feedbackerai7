"use client";
import { useEffect } from 'react';
import LandingPage from './landing-page';
import Footer from './landing-page/footer';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://nexx-2.vercel.app//widget.umd.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-8 md:pt-16 lg:pt-24">
      
      <div className="w-full px-4 md:px-8 lg:px-24">
       
        <my-widget project-id="14"></my-widget>

        
        <div className="max-w-7xl mx-auto w-full">
          <LandingPage />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}