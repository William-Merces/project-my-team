import React, { useState, useEffect } from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  { name: 'Bill Mahoney', role: 'Product Owner', image: '/Photos/photo1.png' },
  { name: 'Saba Cabrera', role: 'Art Director', image: '/Photos/photo2.png' },
  { name: 'Shae Le', role: 'Tech Lead', image: '/Photos/photo3.png' },
  { name: 'Skylah Lu', role: 'UX Designer', image: '/Photos/photo4.png' },
  { name: 'Griff Richards', role: 'Developer', image: '/Photos/photo5.png' },
  { name: 'Stan John', role: 'Developer', image: '/Photos/photo6.png' },
];

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = teamMembers.map((member) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = member.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-12 md:flex md:justify-between items-start">
        <h1 className="text-3xl font-bold mb-4 md:mb-0 md:w-1/2">The creative crew</h1>
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">WHO WE ARE</h2>
          <p className="text-sm">
            We are team of creatively diverse. driven. innovative individuals working in various
            locations from the world.
          </p>
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 sm:gap-y-20 md:gap-x-9 md:gap-y-24">
          {teamMembers.map((member, index) => (
            <div key={index} className={`${index % 2 === 1 ? 'sm:mt-8 md:mt-16' : ''}`}>
              <TeamMember {...member} imagesLoaded={imagesLoaded} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
