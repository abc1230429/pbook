import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import './bookInfo.scss'
function BookInfo(props) {
  return (
    <div className="book_box col-md-3 mb-4">
      <figure className="">
        <div className="book_pic">
          <img
            src={
              'http://localhost/books/src/venderBooks_Management/vb_images/' +
              props.pic
            }
            alt=""
          />
        </div>
        <div className="book_data">
          <h6 className="px-3 mt-2">{props.name}</h6>
          <span className="info mt-3 mb-2">
            <span>作者：{props.author}</span>
            <div className="">
              <span className="price">79</span> 折
              <span className="price">{props.fixed_price}</span> 元
            </div>
          </span>
          {/* <div className="intro">{props.introduction}</div> */}
          <Link
            to={'/books/information/' + props.sid}
            className="ml-auto mt-auto moreInfo"
          ></Link>
        </div>
        <div className="book_sell d-flex justify-content-center">
          <button className="addCart">放入購物車</button>
        </div>
      </figure>
    </div>
  )
}
export default BookInfo