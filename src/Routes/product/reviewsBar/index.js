import Review from "../../../Components/review"
import Grid from '@mui/material/Grid'
import {useContext} from 'react'
import ReviewContext from "../../../Context/Reviews/reviewContext"
function ReviewsBar()
{

    const [review,addReview] = useContext(ReviewContext)
    if(!review)
    { return
        debugger
    }
    return(
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          xs={12}
        >

            <Grid item>
            {review.map(review => <Review {...review}></Review>)}
            </Grid>
         

        </Grid>
    )
    return <Review></Review>
}

export default ReviewsBar