import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Rating} from '@mui/material'

 function ProductCard({title, description, image, price, id, rating}) {
  return (
    <Card  height='500px' sx={{ maxWidth: 345 }}>
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
        <Rating  defaultValue={rating.rate} precision={0.5} readOnly />
        <Typography variant="body" color="text.secondary">
        ({rating.count})
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={`/products/${id}`}  size="small" variant='contained' >
        Buy
            </Button>
        <Button href={`/products/${id}`}  size="small" sx={{ml:3}}>
            Learn More
            </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard