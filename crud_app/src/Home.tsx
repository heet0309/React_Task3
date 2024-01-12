import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToProductPage = () => {
    navigate('/Product')
};

  return (
    
      <div>
        <h2>Welcome to the Home Page!</h2>
        <button onClick={navigateToProductPage}>Products</button>
      </div>
    );
  };
  



export default Home;
