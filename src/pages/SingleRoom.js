import React, { useContext} from "react";
import { RoomContext } from "../RoomContext";
import { useParams, Link } from "react-router-dom";
//import defaultImg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
const SingleRoom = () => {
  const { getRoom } = useContext(RoomContext);
  const { slug } = useParams();
  const room = getRoom(slug);
  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found....</h3>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...defaultImg] = images;
  return (
    <>
      <StyledHero img={mainImg || defaultImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>Price: {price}</h6>
            <h6>Size : {size} SQRT</h6>
            <h6>
              Max Capacity
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allow" : "no pets allow"}</h6>
            <h6>{breakfast && "breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>exras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
