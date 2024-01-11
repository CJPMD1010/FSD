import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import product1Image from './assets/img1.jpg';
import product2Image from './assets/img2.jpg';
import product3Image from './assets/img3.jpg';
import product4Image from './assets/img4.jpg';
import product5Image from './assets/img5.jpg';
import product6Image from './assets/img6.jpg';
import product7Image from './assets/img7.jpg';
import product8Image from './assets/img8.jpg';
import product9Image from './assets/img9.jpg';
import product10Image from './assets/img10.jpg';
import product11Image from './assets/img11.jpg';
import product12Image from './assets/img12.jpg';

function Product() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleProductHover = (productId) => {
    setHoveredProduct(productId);
  };

  const products = [
    { id: 1, name: 'Product A', description: 'Description for Product A', price: '$19.99', image: product1Image },
    { id: 2, name: 'Product B', description: 'Description for Product B', price: '$29.99', image: product2Image },
    { id: 3, name: 'Product C', description: 'Description for Product C', price: '$24.99', image: product3Image },
    { id: 4, name: 'Product D', description: 'Description for Product D', price: '$39.99', image: product4Image },
    { id: 5, name: 'Product E', description: 'Description for Product E', price: '$49.99', image: product5Image },
    { id: 6, name: 'Product F', description: 'Description for Product F', price: '$34.99', image: product6Image },
    { id: 7, name: 'Product G', description: 'Description for Product G', price: '$44.99', image: product7Image },
    { id: 8, name: 'Product H', description: 'Description for Product H', price: '$54.99', image: product8Image },
    { id: 9, name: 'Product I', description: 'Description for Product I', price: '$29.99', image: product9Image },
    { id: 10, name: 'Product J', description: 'Description for Product J', price: '$19.99', image: product10Image },
    { id: 11, name: 'Product K', description: 'Description for Product K', price: '$39.99', image: product11Image },
    { id: 12, name: 'Product L', description: 'Description for Product L', price: '$49.99', image: product12Image },
    // Add more products as needed
  ];

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the opacity as needed
    zIndex: -1,
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={overlayStyle}></div>
      <h2 style={{ textAlign: 'center', marginTop: '30px', color: '#fff', zIndex: 1 }}>Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '25px', position: 'relative', zIndex: 1 }}>
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease',
              transform: hoveredProduct === product.id ? 'scale(0.9)' : 'scale(1)',
            }}
            onMouseEnter={() => handleProductHover(product.id)}
            onMouseLeave={() => handleProductHover(null)}
          >
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
              style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', objectFit: 'cover' }}
            />
            <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', padding: '16px' }}>
              <Typography variant="h6" style={{ marginBottom: '8px', color: '#333' }}>{product.name}</Typography>
              <Typography variant="body2" color="textSecondary" style={{ flex: 1 }}>{product.description}</Typography>
              <Typography variant="h6" color="primary" style={{ marginTop: '8px' }}>{product.price}</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '8px' }}>
                View Product
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Product;
