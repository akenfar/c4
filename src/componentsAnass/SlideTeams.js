
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardTeams from "./CardTeams";
import img from './images/profile-pic.png'





const SlideTeams = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




 
  const Data = [
    { id: 1, name: "HAMZA AGLAGAL", description: "Web Full stack developer", img: img },
    { id: 2, name: "Anass GOUZGAR", description: "Web Full stack developer", img: img },
    { id: 3, name: "Oussama AKROUD", description: "Web Full stack developer", img: img },
    { id: 4, name: "Ahmed AKENFAR", description: "Web Full stack developer", img: img },
    { id: 5, name: "Raja ELGHAZI", description: "Web Full stack developer", img: img },
    { id: 6, name: "Said LOUHAM", description: "Web Full stack developer", img: img }
  ]
  return (

    <div className="caroussel-container" >
      <Slider {...settings} className="slide-teams">
        {
          Data.map((item) => {
            return (
              <CardTeams key={item.id} name={item.name} img={item.img} description={item.description} />

            )
          })
        }



      </Slider>
    </div>
  );
};

export default SlideTeams;
