import { FaArrowLeft } from "react-icons/fa";
import useGuides from "../../../hooks/useGuides";
import Heading from "../../Shared/Heading/Heading";
import TourGuidesCards from "./TourGuidesCards";
import { useNavigate } from "react-router-dom";


const TourGuides = () => {
    const [guides] = useGuides();
    const navigate = useNavigate();

    return (
        <div className="mt-10">
            <Heading
                heading={'Meet Our Expert Tour Guides'} subHeading={'Our knowledgeable and experienced tour guides are here to make your journey unforgettable. Each guide is an expert in their field, offering unique insights and personalized service to ensure you have the best experience possible. Explore our guides and get to know the people who will lead you on your next adventure.'}
            ></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-5 p-2'>
                {
                    guides.map(guide => <TourGuidesCards key={guide._id} guide={guide}
                    ></TourGuidesCards>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <button onClick={() => navigate(-1)} className="text-lg md:text-2xl font-bold p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2 text-red-500"><FaArrowLeft /> Go Back</button>
            </div>
        </div>
    );
};

export default TourGuides;