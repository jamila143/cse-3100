import React, { useState, useEffect } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mt-4 row g-4 cats-container" id="cats-container">
        {cats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div
              className="cat-card"
              style={{
                padding: '12px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                marginBottom: '20px',
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  height: '150px',
                  width: '100%',
                  objectFit: 'cover',
                  marginBottom: '10px',
                }}
              />
              <div
                className="cat-info"
                style={{
                  padding: '8px 0',
                  textAlign: 'center',
                  fontSize: '12px', // Reduced font size
                  lineHeight: '1.2', // Adjusted line height for tighter spacing
                  minHeight: '60px', // Constrained height of the text box
                }}
              >
                <h3 className="h6 mb-1" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                  {cat.name}
                </h3>
                <p className="mb-1"style={{  color: 'black' }}>Age: {cat.age}</p>
                <p className="mb-0" style={{ fontStyle: 'italic', color: 'black' }}>
                  Breed: {cat.breed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
