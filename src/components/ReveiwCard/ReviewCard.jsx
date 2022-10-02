import React from 'react';

const ReviewCard = props => {
  const {review} = props;

  return (
    <div>
      <img src={review.thumbNailImg} />
      <span>{review.username}</span>
      <span>{review.data}</span>
      <span>{review.time}</span>
      <p>{review.content}</p>
    </div>
  )
}

export default ReviewCard;