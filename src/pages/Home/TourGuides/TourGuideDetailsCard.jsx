import ImageHeader from "../../Shared/ImageHeader/ImageHeader";
import img4 from '../../../assets/images/8511.jpg'
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";

const TourGuideDetailsCard = () => {
    const guideDetails = useLoaderData();
    const { name, profilePicture, contactDetails, education, skills, workExperience } = guideDetails
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const text = e.target.text.value;
        console.log(text);

    }


    return (
        <div className="mt-10">
            <ImageHeader
                img1={img4} heading={'Meet Our Expert Tour Guides'} shortDis={'Discover the passion and expertise of our professional tour guides. Each guide brings a unique blend of knowledge, experience, and enthusiasm to make your journey unforgettable.'}
            ></ImageHeader>
            <div className="px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
                <div className="flex items-center mt-4">
                    <img className="hidden object-cover w-20 h-20 mx-4 rounded-full sm:block" src={profilePicture} alt="avatar" />
                    <p className="text-3xl font-bold text-gray-700 cursor-pointer dark:text-gray-200">{name}</p>
                </div>

                <div className="mt-2">
                    <p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                        Education : {education}</p>
                    <div className="flex gap-4">
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Email : {contactDetails?.email}
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Phone : {contactDetails?.phone}
                        </p>
                    </div>
                    <div className="mt-2 text-gray-600 dark:text-gray-300">
                        <h3 className="text-lg font-semibold">Skills : </h3>
                        <ul className="list-disc list-inside ">
                            {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="mt-2 text-gray-600 dark:text-gray-300">
                        <h3 className="text-lg font-semibold">Work Experience : </h3>
                        {workExperience.map((exp, idx) => (
                            <div key={idx} className="mt-2">
                                <h4 className="font-medium text-gray-800 dark:text-white">Company : {exp.company}</h4>
                                <p className="text-gray-600 dark:text-gray-400">Role : {exp.role} ({exp.years})</p>
                            </div>
                        ))}
                    </div>
                    <h3 className=" text-lg mt-5 text-green-500">Give your rating and feedback</h3>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex">
                                <div>
                                    <Rating onClick={handleRating} initialValue={rating}/>
                                    <p className="mt-4 text-white font-medium">Rating: {rating}</p>
                                </div>
                                <div>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text text-white">Your Comment</span>
                                        </div>
                                        <textarea className="textarea textarea-bordered h-24" name="text" placeholder="Bio"></textarea>
                                    </label>
                                    <button className="btn btn-primary mt-5">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <button onClick={() => navigate(-1)} className="text-lg md:text-2xl font-bold p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2 text-red-500"><FaArrowLeft /> Go Back</button>
            </div>
        </div >
    );
};

export default TourGuideDetailsCard;