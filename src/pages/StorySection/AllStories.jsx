import useStories from "../../hooks/useStories";
import ImageHeader from "../Shared/ImageHeader/ImageHeader";
import img1 from '../../assets/images/slider/1694198836218.jpg'
import StoryCartDetails from "./StoryCartDetails";


const AllStories = () => {
    const [stories] = useStories();
    return (
        <div className="mt-10">
            <ImageHeader
                img1={img1} heading={'Through the Heart of Bangladesh'} shortDis={'Experience the diverse landscapes and rich cultural heritage of Bangladesh through captivating stories of exploration, adventure, and discovery in its most iconic destinations.'}
            ></ImageHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 mt-5'>
                {
                    stories.map(story => <StoryCartDetails key={story._id} story={story}></StoryCartDetails>)
                }
            </div>
        </div>
    );
};

export default AllStories;