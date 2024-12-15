import { useEffect, useState } from 'react';

// Add breed names for each cat in the featuredCats array
const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Maine Coon' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign them to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
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
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 row g-4">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div
                className="cat-card"
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#fff',
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
                  }}
                />
                <div
                  className="cat-info"
                  style={{
                    padding: '8px 0',
                    textAlign: 'center',
                    fontSize: '12px',
                    lineHeight: '1.2',
                  }}
                >
                  <h3
                    className="h5 mb-1"
                    style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className="mb-0"
                    style={{
                      color: 'black', // Age text color
                    }}
                  >
                    Age: {cat.age}
                  </p>
                  <p
                    className="mb-0"
                    style={{
                      marginTop: '6px', // Added gap between Age and Breed
                      fontStyle: 'italic',
                      color: 'black', // Breed text color
                    }}
                  >
                    Breed: {cat.breed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
