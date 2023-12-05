import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Rating } from '@mui/material'
import { updateReviewThunk } from '../../services/reviews-thunks'
import WhiteTextBtn from '../../../ui-styling/buttons/text/whiteTextBtn'

const EditReviewItem = ({review, toggleEditing}) => {
  const[rating, setRating] = useState(review.rating)
  const[title, setTitle] = useState(review.title)
  const[text, setText] = useState(review.review_text)
  const[showError, setShowError] = useState(false)

  const dispatch = useDispatch()

  console.log("")

  const handleUpdate = () => {
    if (title.length === 0) {
      setShowError(true);
    } else {
      const newReview = {...review, 
                             title, 
                             rating, 
                             "review_text": text, 
                             "date_reviewed": new Date().toISOString().slice(0, 19).replace('T', ' ')}
      dispatch(updateReviewThunk({ newReview }))
      toggleEditing()
    }
  }

  return(
    <div className="list-group-item list-group-item-action flex-column align-items-start wd-movie-list-item 
                        position-relative">
       <button type="button" className="btn-close position-absolute top-0 end-0" onClick={toggleEditing}>
          </button>
        <label for="edit-title">Title:</label>
        <div>
        <input id="edit-title"
                value={title}
                className="form-control w-75"
                onChange={(event) => setTitle(event.target.value)}/>  
        </div>

        <label for="edit-rating">Rating</label>
        <div>
        <Rating
          id="edit-rating"
          name="simple-controlled"
          value={rating}
          size="large"
          onChange={(event, newValue) => setRating(newValue)}
      />
      </div>
      <label for="edit-text">Review:</label>
        <div>
        <input id="edit-review"
               value={text}
               className="form-control w-75"
               onChange={(event) => setText(event.target.value)}/>  
        </div>
        <br/>
        {
          showError &&
          <>
            <div className='text-danger'> Review must have a title. </div>
            <br/>
          </>
        }
        <WhiteTextBtn text="Update" fn={handleUpdate}/>
      </div>
  )
}
export default EditReviewItem;