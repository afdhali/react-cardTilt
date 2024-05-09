import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const customOptions = {
  reverse: true,
  max: 45,
  perspective: 1500,
  scale: 1.2,
  speed: 2000,
  transition: true,
  axis: "X",
  reset: false,
  easing: "cubic-bezier(.2,.8,.3,1)",
};

const Card = ({ image, title, description }) => {
  return (
    <Tilt options={defaultOptions}>
      <div className="relative w-64 h-80 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-md rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
