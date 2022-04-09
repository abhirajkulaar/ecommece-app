import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

 function ProductCard({title, description, image, price, productId, onClickBuy, onClickDescription}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>

      <CardContent>
      <Typography variant="h6" color="text.secondary">
        {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Buy</Button>
        <Button href={"/products/sampleId"}  size="small">
            Learn More
            </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard