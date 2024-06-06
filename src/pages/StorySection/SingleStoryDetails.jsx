import { useLoaderData } from "react-router-dom";
import ImageHeader from "../Shared/ImageHeader/ImageHeader";
import img2 from '../../assets/images/slider/md-anwar-hossain-r2DwuIjw5T4-unsplash.jpg'


const SingleStoryDetails = () => {
    const singleStory = useLoaderData();
    const { touristName, storyTitle, description, spots, tripDate, location } = singleStory;
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
                            <div className="md:flex lg:flex">
                                <p>Most Attractive Spots : </p>
                                {spots.map((sp, idx) => <p key={idx} className="mx-2 text-green-500">{sp}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleStoryDetails;