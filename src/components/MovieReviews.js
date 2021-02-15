import React from 'react'

const MovieReviews = props => {
  return <div className="review-list">
    {renderReviews(props.reviews)}
  </div>
}

const renderReviews = reviews => {
  return reviews.map(review => {
    return <div key={review['display_title']} className="review">
      {review.multimedia ? <img src={review.multimedia.src} alt={review['display_title']}/> : "" }
      <h3>{review.display_title}</h3>
      <p>Opening Date: {review['opening_date']}</p>
      <p>Rating: {review['mpaa_rating']}</p>
      <p>Summary: {review['summary_short']}</p>
    </div>
  })
}

export default MovieReviews