import useGuides from "../../../hooks/useGuides";
import Heading from "../../Shared/Heading/Heading";
import TourGuidesCards from "./TourGuidesCards";


const TourGuides = () => {
    const [guides] = useGuides();

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
        </div>
    );
};

export default TourGuides;