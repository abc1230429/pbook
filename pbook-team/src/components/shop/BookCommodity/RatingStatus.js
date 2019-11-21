import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import './BookCommodity.scss'

const BookInfoRight = props => {
  return (
    <>
      <div className="d-flex book_star my-3 flex-column">
        <div className="d-flex flex-column align-items-center">
          <span className="book_rank">{props.data && props.data.avg}</span>
          <Box component="fieldset" mb={0} borderColor="transparent">
            <Rating value={props.data && props.data.avg} readOnly />
          </Box>
          <span className="book_review">
            {props.data &&
              props.data.fiveStars + props.data &&
              props.data.fourStars + props.data &&
              props.data.threeStars + props.data &&
              props.data.twoStars + props.data &&
              props.data.oneStars}
            篇評論
          </span>
        </div>
      </div>
    </>
  )
}

export default BookInfoRight
