import { useLoaderData, useNavigate } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useGuides from "../../hooks/useGuides";
import TourGuidesCards from "./TourGuides/TourGuidesCards";


const PackageDetailsCard = () => {
    const packageDetails = useLoaderData();
    const { _id, img, tourType, tripTitle, location, price, aboutTour, tourDuration, tourPlan } = packageDetails
    console.log(packageDetails);
    const [guides] = useGuides();
    const navigate = useNavigate();

    return (
        <div>
            <div className="mt-5">
                <Heading
                    heading={'Package Details'} subHeading={'Welcome to our package details section!'}
                ></Heading>
            </div>
            <div className="flex justify-between">
                <h2 className="text-lg md:text-2xl font-bold p-2">Image Gallery</h2>
                <button onClick={() => navigate(-1)} className="text-lg md:text-2xl font-bold p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2 text-red-500"><FaArrowLeft /> Go Back</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2">
                {
                    img.map((src, idx) => (
                        <img key={idx} src={src} className="w-full h-64 object-cover rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"></img>
                    ))
                }
            </div>
            <div className="overflow-hidden bg-white rounded-lg shadow-md mt-5">
                <div className="p-6">
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold">{tripTitle}</h3>
                        <p className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">Tour Type : {tourType}</p>
                        <p>Location : {location}</p>
                        <p>TK {price}</p>
                        <p className="mt-2 text-sm text-gray-500">
                            {aboutTour}
                        </p>
                    </div>

                    <div className="mt-4 space-y-2">
                        <h2 className="text-xl font-semibold">:: Tour Plan ::</h2>
                        <p className="text-lg">Tour Duration : <span className="text-blue-600">{tourDuration}</span></p>
                    </div>
                    <div>
                        {tourPlan.map((plan, idx) => <div key={idx} className="collapse collapse-arrow bg-base-200 mt-5">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-lg font-semibold flex items-center gap-3">
                                <p className="text-green-800">Day {plan.day}</p>
                                <FaArrowRight />
                                <p>{plan.title}</p>
                            </div>
                            <div className="collapse-content">
                                <p>{plan.description}</p>
                            </div>
                        </div>)}
                    </div>
                    <h2 className="text-3xl font-bold p-2 mt-5">Tour Guides</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2'>
                        {
                            guides.map(guide => <TourGuidesCards key={guide._id} guide={guide}></TourGuidesCards>)
                        }
                    </div>
                    <h2 className="text-center text-3xl font-bold p-2 mt-5 underline underline-offset-8">Booking A Package Please Fill The Form</h2>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetailsCard;