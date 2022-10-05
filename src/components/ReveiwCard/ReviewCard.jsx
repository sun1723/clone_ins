import React from 'react';

import classes from './ReviewCard.scss';

const ReviewCard = props => {
  const {review} = props;

  return (
    <div>
      <img src={review.thumbNailImg} className={classes.reviewImg}/>
      <span>{review.username}</span>
      <span>{review.data}</span>
      <span>{review.time}</span>
      <p>{review.content}</p>
    </div>
  )
}

export default ReviewCard;