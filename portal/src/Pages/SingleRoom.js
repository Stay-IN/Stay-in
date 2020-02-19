import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

import StyledHero from '../Components/StyledHero';
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const { slug, description, capacity, price, wifi, images } = room;
    const [, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${slug} room`}>
            <Link to="/" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={slug} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{wifi && 'free wifi included'}</h6>
            </article>
          </div>
        </section>
      </>
    );
  }
}
