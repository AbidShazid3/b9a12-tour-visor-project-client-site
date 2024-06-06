import TouristStory from "../StorySection/TouristStory";
import CatTab from "./CatTab";
import Slider from "./Slider";
import TourTypes from "./TourTypes/TourTypes";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CatTab></CatTab>
            <TourTypes></TourTypes>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;