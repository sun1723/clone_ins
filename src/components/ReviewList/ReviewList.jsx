import ReveiwCard from "../ReveiwCard";
import { mockReviewListResponse } from "./__data__/mock-review-list-response";

const ReviewList = () => {
  const child = mockReviewListResponse.map((review,i) => <ReveiwCard key={i} review={review} />)
  return (
    <div>
      {child}
    </div>
  )
}

export default ReviewList;