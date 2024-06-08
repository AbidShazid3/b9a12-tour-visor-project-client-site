import useStories from "../../hooks/useStories";
import ImageHeader from "../Shared/ImageHeader/ImageHeader";
import img1 from '../../assets/images/slider/1694198836218.jpg'
import StoryCartDetails from "./StoryCartDetails";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AllStories = () => {
    const [stories] = useStories();
    const navigate = useNavigate();

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
            <div className="flex justify-center mt-10">
                <button onClick={() => navigate(-1)} className="text-lg md:text-2xl font-bold p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2 text-red-500"><FaArrowLeft /> Go Back</button>
            </div>
        </div>
    );
};

export default AllStories;