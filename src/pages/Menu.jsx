import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const Menu = () => {
  const [menus, setMenus] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  // Fetch data from backend
  useEffect(() => {
    fetch('https://e-commerce-food-backend.onrender.com/menus') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        return response.json();
      })
      .then((data) => {
        setMenus(data);  
        setLoading(false);  
      })
      .catch((err) => {
        setError(err.message);  
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5 text-center">
      <h2 className="text-muted" style={{ fontFamily: "Brush Script MT, cursive" }}>
        Have a look at
      </h2>
      <h1 className="display-4 fw-bold" style={{ fontFamily: "Brush Script MT, cursive" }}>
        Our Menu
      </h1>

      
      {loading && <Spinner animation="border" variant="primary" className="my-4" />}

      
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Show Menu Items */}
      <Row className="mt-5">
        {menus.map((menu) => (
          <Col md={6} className="mb-4" key={menu._id}>
            <div className="d-flex align-items-center" style={{ borderBottom: '1px dotted #ccc', paddingBottom: '1.5rem' }}>
              {/* Image */}
              <div className="me-4" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                <img src={menu.url} alt={menu.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Content */}
              <div className="text-start flex-grow-1">
                <h5 className="mb-1 fw-bold">{menu.name}</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>{menu.description}</p>
              </div>

              {/* Price */}
              <h5 className="text-primary fw-bold">${menu.price}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
