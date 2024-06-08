import { useLoaderData, useNavigate } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useGuides from "../../hooks/useGuides";
import TourGuidesCards from "./TourGuides/TourGuidesCards";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const PackageDetailsCard = () => {
    const { user } = useAuth();
    const packageDetails = useLoaderData();
    const { _id, img, tourType, tripTitle, location, price, aboutTour, tourDuration, tourPlan } = packageDetails;
    console.log(packageDetails);
    const [guides] = useGuides();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [selectedGuide, setSelectedGuide] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosSecure = useAxiosSecure();

    const handleSelectedChange = e => {
        setSelectedGuide(e.target.value)
    }

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const touristName = form.name.value;
        const email = form.email.value;
        const imgUrl = form.photo.value;
        const price = parseInt(form.price.value);
        const tourDate = startDate;
        const tourGuide = selectedGuide;

        const details = { touristName, email, imgUrl, price, tourDate, tourGuide, packageTitle: tripTitle , status: 'In Review', packageId: _id}

        axiosSecure.post('/bookings', details)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    setIsModalOpen(true);
                    setStartDate(new Date());
                    setSelectedGuide('');
                }
            })
            .catch(error => {
                toast.error(error.message);
        })
        
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };


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
                <div className="p-2">
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
                            <div className="collapse-title text-sm md:text-lg font-semibold flex items-center gap-3">
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
                    <h2 className="text-center text-lg  md:text-3xl font-bold p-2 mt-10 underline underline-offset-8">Booking A Package Please Fill The Form</h2>
                    <div className="bg-slate-300 rounded-lg mt-5">
                        <form onSubmit={handleBooking} className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tourist Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName || ''} name="name" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tourist Email</span>
                                </label>
                                <input type="text" defaultValue={user?.email || ''} name="email" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control col-span-full">
                                <label className="label">
                                    <span className="label-text">Tourist Image URL</span>
                                </label>
                                <input type="text" name="photo" defaultValue={user?.photoURL || ''} className="input input-bordered" readOnly/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price (TK)</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Your Tour Date</span>
                                </label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control col-span-full">
                                <label className="label">
                                    <span className="label-text">Select Tour Guide</span>
                                </label>
                                <select
                                    name="tour-guide"
                                    value={selectedGuide}
                                    onChange={handleSelectedChange}
                                    className="select select-bordered"
                                    required>
                                    <option value='' disabled>Select a guide</option>
                                    {guides.map(guide =>
                                        <option key={guide._id} value={guide.name}>{guide.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="mt-6 col-span-full">
                                {user && user?.email ? <button className="btn btn-outline btn-info text-xl w-full">Booking Now</button> : <button disabled className="btn btn-accent text-xl w-full">Booking Now</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white rounded-lg p-8">
                        <h2 className="text-xl font-bold mb-4">Your Booking Has Been Confirmed</h2>
                        <p>{tripTitle} Details Has Been Added.</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => navigate('/dashboard/my-bookings')}
                                className="mt-4 btn btn-sm btn-secondary"
                            >
                                Go to My Bookings
                            </button>
                            <button
                                onClick={closeModal}
                                className="mt-4 btn btn-sm text-white btn-error"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackageDetailsCard;