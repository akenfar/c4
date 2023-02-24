import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './ListCources.css';
import Slider from "react-slick";
import settings from './setings'
import Card from "./card";
const AllCourcess = () => {
return ( 
        <div className="ListCources">
        <Slider {...settings}> 
           <Card Rate={1} price={100}   users={388}/> 
           <Card Rate={2} price={200}  users={1837}/> 
           <Card Rate={3} price={300}  users={6880}/> 
           <Card Rate={4} price={120}  users={1228}/> 
           <Card Rate={5} price={144} users={7203}/>
           <Card Rate={3} price={64}  users={1355}/>
           <Card Rate={2} price={36}   users={3003}/> 
           <Card Rate={2} price={77}   users={6358}/> 
           <Card Rate={5} price={15}   users={3872}/> 
           <Card Rate={3} price={80}   users={928}/> 
         </Slider>
        </div>
     );
}
 
export default AllCourcess;

































