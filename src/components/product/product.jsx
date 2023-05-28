import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Paper, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import alcemical from '../assets/alcemical.png';
import bonebreaker from '../assets/bonebreaker.png';
import cryptlord from '../assets/cryptlord.png';
import darkcasterx from '../assets/darkcasterx.png'
import duality from '../assets/duality.png'
import glacial from '../assets/glacial.png'
import soulweaver from '../assets/soulweaver.png'

const products = [
  {
    id: 1,
    name: 'Alchemical',
    description: 'Alchemical Naval Commareagentn their mystical, magical workings.',
    image: alcemical,
  }, {
    id: 2,
    name: 'Bonebreaker',
    description: 'Crossing the sea to find more bones to break. Were comin fer ya!',
    image: bonebreaker,
  }, {
    id: 3,
    name: 'Cryptlord',
    description: 'Made from the finest Darkovian silk, This elegant suit is worn by the vampires who are reign over their crypts.',
    image: cryptlord,
  }, {
    id: 4,
    name: 'Darker Caster X',
    description: 'Your foes will not be able to see you coming as the shadows hide your every move.',
    image: darkcasterx,
  }, {
    id: 5,
    name: 'Duality',
    description: 'As the Admiral of the Great Abyss, Nulgath has bestowed a great power upon you, his most loyal Naval Commander. Whether you choose to use such power of Good or Evil is completely up to you…',
    image: duality,
  }, {
    id: 6,
    name: 'Glacial',
    description: 'Th frozen seas of the icy northlands be your huntin grounds. An no cold-hearted corsair can escape th reach of your razor-sharp-rapier.',
    image: glacial,
  }, {
    id: 7,
    name: 'Soulweaver',
    description: 'To become a SoulWeaver you must bond with an Elemental Spirit partner; SoulWeaver Naval Commanders always choose a water, air, or storm elemental.',
    image: soulweaver,
  }
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId] = useState(null);


  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };




  return (
    <Grid id='product' container spacing={3} justifyContent="center" alignItems="center"
      flexWrap="wrap" sx={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0 16px',
      }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} flexGrow={1}>
          <Card sx={{ height: 400, width: 300, backgroundColor: '#0f0b1d', color: 'white', border: '1.5px solid white', borderRadius: '5%' }} >
            <CardMedia component="img" image={product.image} height={280} sx={{
              maxHeight: '280px',
              maxWidth: '300px',
              objectFit: 'contain',
              marginTop: '15px'
            }} />
            <CardContent>
              <Typography variant="h6" sx={{ marginTop: '-15px' }}>{product.name}</Typography>
              <Typography variant="body2" sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>{product.description}</Typography>
              <Button color="secondary" size='small' variant="contained" onClick={() => handleClick(product)}
                sx={{
                  backgroundColor: selectedProductId === product.id ? 'white' : 'transparent',
                  color: selectedProductId === product.id ? 'black' : 'white',
                  transition: 'background-color 0.3s, color 0.3s',
                }}><MoreHorizIcon /></Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {selectedProduct && (
        <Paper sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '16px',
          borderRadius: '2%',
          backgroundColor: '#fff',
          zIndex: '999',
          maxWidth: '80vw'
        }}>
          <IconButton sx={{ position: 'absolute', top: '3%', right: '5%' }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain', marginBottom: '16px' }} />
            <p style={{
              overflowY: 'scroll',
              flex: '1',
              textAlign: 'justify',
            }}>{selectedProduct.description}</p>
          </div>
          <style jsx>{`
      @media screen and (max-width: 768px) {
        p {
          font-size: 13px;
        }
      }
      @media screen and (max-width: 450px) {
        p {
          font-size: 8px;
        }
      }
    `}</style>
        </Paper>
      )}
    </Grid>
  );
};

export default ProductGrid;
