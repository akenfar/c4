
import Slider from "react-slick";
import headerSettings from './headerSettings'
import "slick-carousel/slick/slick.css";
import "./headerSliderContainer.css"

import HeaderSilder1 from './HeaderSilder1';
import HeaderSilder2 from './HeaderSlider2';
import HeaderSilder3 from './HeaderSlider3';

const HeaderSliderContainer = () => {
return ( 
      <div className="HeaderSliderContainer">

        <Slider {...headerSettings}> 
            <HeaderSilder1/>
             <HeaderSilder2/>
             <HeaderSilder3/>
        </Slider>
      </div>
        
     );
}
 
export default HeaderSliderContainer;




































  {/* <Card Rate={1} price={100}   users={388}/> 
           <Card Rate={2} price={200}  users={1837}/> 
           <Card Rate={3} price={300}  users={6880}/> 
           <Card Rate={4} price={120}  users={1228}/> 
           <Card Rate={5} price={144} users={7203}/>
           <Card Rate={3} price={64}  users={1355}/>
           <Card Rate={2} price={36}   users={3003}/> 
           <Card Rate={2} price={77}   users={6358}/> 
           <Card Rate={5} price={15}   users={3872}/> 
           <Card Rate={3} price={80}   users={928}/>  */}