import { Link } from "react-router-dom";
import useStories from "../../hooks/useStories";
import Heading from "../Shared/Heading/Heading";
import StoryCartDetails from "./StoryCartDetails";



const TouristStory = () => {
    const [stories] = useStories();

    const shortStories = stories.slice(0, 6);

    return (
        <div className="mt-20">
            <Heading heading={'Tourist Story'} subHeading={'Welcome to our Tourist story section. Discover the stories of our happy customers'}></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
                {
                    shortStories.map(story => <StoryCartDetails key={story._id} story={story}></StoryCartDetails>)
                }
            </div>
            <div className='flex justify-center text-lg md:text-2xl font-bold mt-10'>
                <h3>Stories - <Link to="/all-stories" className='text-green-400 hover:text-green-500'>View All</Link></h3>
            </div>
        </div>
    );
};

export default TouristStory;