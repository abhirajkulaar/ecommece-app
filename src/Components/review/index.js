import Rating from '@mui/material/Rating';
import {Typography, CardContent} from '@mui/material'


function Review({title,rating,description,})
{
    return (
        



    <CardContent sx={{m:3}} style={{backgroundColor:'rgb(199 213 220)'}}>
      <Typography variant="h5" color="initial">{title}</Typography>
      
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
      <Typography variant="body1" color="initial">{description}</Typography>
    </CardContent>



    )

}

export default Review