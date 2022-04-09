import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography'


function Review({author,rating,description,timestamp})
{
    return (
        

        <>
        <Typography variant="h5" color="initial">Author Name</Typography>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        <Typography variant="body1" color="initial">Lorem Ipsum sample review of product</Typography>

        </>


    )

}

export default Review