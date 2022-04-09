import ReviewContext from "./reviewContext";
import { useState, useEffect } from "react";

const ReviewState = (props) => {


  const [reviews,setReviews] = useState()

  useEffect(
    async ()=>{
 //     const apiData = await fetch(`https://www.fakerestapi.com/datasets/api/v1/amazon-echo-reviews.json`)
 
 // Unable to find mock API with product level reviews so using sample data
      setReviews(
      [
        {
          title:'Good Quality',
          rating:3.5,
          description:`told him that I know what I'm doing and that it loses its connection to my network and the only way to reconnect it is to unplug it and go through the setup process every other`
        },
        {
          title:'Bad Product',
          rating:2,
          description:`island where she still remains.  For almost a year she spoke sweet nothings to me about the weather, serenaded me when I was feeling blue, and scheduled that meeting I had`
        },
        {
          title:'I dont like it at all',
          rating:3.5,
          description:'random sample description'
        },
        {
          title:'Awesome!!!',
          rating:5,
          description:'random sample description'
        },
        {
          title:'Nope',
          rating:1,
          description:'random sample description'
        }
      ]
      )
    },[])

  const addReviews =async (newReview)=> {

    setReviews((reviews=>[...reviews,newReview]))
  }

    return(
        <ReviewContext.Provider value = {[reviews,addReviews]}>
            {props.children}
        </ReviewContext.Provider>
    )
}

export default ReviewState