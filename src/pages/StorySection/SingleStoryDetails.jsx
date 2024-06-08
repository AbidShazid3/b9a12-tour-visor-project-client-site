import { useLoaderData, useNavigate } from "react-router-dom";
import ImageHeader from "../Shared/ImageHeader/ImageHeader";
import img2 from '../../assets/images/slider/md-anwar-hossain-r2DwuIjw5T4-unsplash.jpg'
import { FaArrowLeft } from "react-icons/fa";


const SingleStoryDetails = () => {
    const singleStory = useLoaderData();
    const { touristName, storyTitle, description, spots, tripDate, location } = singleStory;
    const navigate = useNavigate();

    return (
        <div>
            <ImageHeader
                img1={img2} heading={'Bangladesh: Tales of Adventure and Culture'} shortDis={'Join us as we explore the diverse beauty and rich heritage of Bangladesh through the personal stories of travelers who have experienced the country`s most captivating destinations.'}
            ></ImageHeader>
            <div className="mt-10">
                <div className="card bg-slate-100">
                    <div className="card-body space-y-2">
                        <h2 className="card-title uppercase">Taken Package : {storyTitle}</h2>
                        <h2 className="card-title">Tourist Name : {touristName}</h2>
                        <p>Tour Date : {tripDate}</p>
                        <p>Location : {location}</p>
                        <div className="card-actions bg-slate-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold">Comment by {touristName} : {description}</h2>
                            {spots && <div className="md:flex lg:flex">
                                <p>Most Attractive Spots : </p>
                                {spots?.map((sp, idx) => <p key={idx} className="mx-2 text-green-500">{sp}</p>)}
                            </div>}

                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button onClick={() => navigate(-1)} className="text-lg md:text-2xl font-bold p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2 text-red-500"><FaArrowLeft /> Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleStoryDetails;