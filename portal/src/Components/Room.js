import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';
import { memo } from 'react';
const Room = memo(({ room }) => {
  const { slug, hotelName, imgCollection, price } = room;
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={imgCollection[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6> &#8377;{price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{hotelName}</p>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    imgCollection: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
