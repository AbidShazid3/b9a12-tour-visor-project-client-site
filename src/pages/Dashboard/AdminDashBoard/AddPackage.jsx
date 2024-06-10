import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner } from "react-icons/im";
import { imageUpload } from "../../../components/ImageUpload/imageUpload";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddPackage = () => {
    const [imagePreview, setImagePreview] = useState();
    const [imagePreview2, setImagePreview2] = useState();
    const [imagePreview3, setImagePreview3] = useState();
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();

    const handleImageChange = image => {
        setImagePreview(URL.createObjectURL(image))
    }
    const handleImageChange2 = image => {
        setImagePreview2(URL.createObjectURL(image))
    }
    const handleImageChange3 = image => {
        setImagePreview3(URL.createObjectURL(image))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const tripTitle = form.tripTitle.value;
        const tourType = form.tourTypes.value;
        const location = form.location.value;
        const price = parseInt(form.price.value);
        const tourDuration = form.tourDuration.value;
        const aboutTour = form.aboutTour.value;
        const image1 = form.image1.files[0]
        const image2 = form.image2.files[0]
        const image3 = form.image3.files[0]

        const planDays = form.days.value;
        const planTitle = form.tourPlanTitle.value;
        const planDis = form.tourPlanDescription.value;



        try {
            const image_url1 = await imageUpload(image1);
            const image_url2 = await imageUpload(image2);
            const image_url3 = await imageUpload(image3);

            const packageData = {
                tourType,
                tripTitle,
                location,
                price,
                aboutTour,
                tourDuration,
                img: [image_url1, image_url2, image_url3],
                tourPlan: [{day: planDays, title: planTitle, 
                    description:  planDis}]
            }
            
            const res = await axiosSecure.post('/package', packageData)
            if (res.data.insertedId) {
                form.reset();
                setImagePreview(null)
                setImagePreview2(null)
                setImagePreview3(null)
                toast.success('Package added successfully');
                setLoading(false)
            }

        } catch (err) {
            setLoading(false);
            toast.error(err.message);
        }
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-100'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-6'>
                    <div className='space-y-6'>
                        {/* title of package */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='tripTitle' className='block text-gray-600'>
                                Trip Title/ Package Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='tripTitle'
                                id='tripTitle'
                                type='text'
                                placeholder='Title'
                                required
                            />
                        </div>
                        {/* tour types */}
                        <div className='space-y-1 text-sm'>
                            <label className='block text-gray-600'>
                                Tour Types
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='tourTypes'
                                defaultValue=''
                            >
                                <option disabled value=''>Pick one</option>
                                <option value='Historical'>Historical</option>
                                <option value='Walking'>Walking</option>
                                <option value='Beach'>Beach</option>
                                <option value='Hiking'>Hiking</option>
                                <option value='Adventure'>Adventure</option>
                            </select>
                        </div>
                        {/* tour duration */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='price' className='block text-gray-600'>
                                Tour Duration
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='tourDuration'
                                id='tourDuration'
                                type='text'
                                placeholder='Number of Days, Number of Nights'
                                required
                            />
                        </div>
                        {/* tour plan */}
                        <h2 className="text-green-600">Tour Plan(days, short title, description)</h2>
                        <div className='flex justify-between gap-2'>
                            {/* tourPlan day */}
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='days' className='block text-gray-600'>
                                    Days
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='days'
                                    id='days'
                                    type='number'
                                    placeholder='Days'
                                    required
                                />
                            </div>
                            {/* tourPlan title */}
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='tourPlanTitle' className='block text-gray-600'>
                                    Tour Plan Title
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='tourPlanTitle'
                                    id='tourPlanTitle'
                                    type='text'
                                    placeholder='Tour Plan Title'
                                    required
                                />
                            </div>
                        </div>
                        {/* tourPlan dis */}
                        <div className='space-y-1 text-sm'>
                                <label htmlFor='tourPlanDescription' className='block text-gray-600'>
                                    Tour Plan Description
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='tourPlanDescription'
                                    id='tourPlanDescription'
                                    type='text'
                                    placeholder='Tour Plan Description'
                                    required
                                />
                            </div>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex justify-between gap-2'>
                            {/* location */}
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='location' className='block text-gray-600'>
                                    Location
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='location'
                                    id='location'
                                    type='text'
                                    placeholder='Location'
                                    required
                                />
                            </div>
                            {/* price */}
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Price
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='price'
                                    id='price'
                                    type='number'
                                    placeholder='Price'
                                    required
                                />
                            </div>
                        </div>
                        {/* img */}
                        <div className=' flex items-center justify-center gap-5 p-4 bg-white w-full m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image1'
                                            id='image1'
                                            accept='image/*'
                                            hidden
                                            onChange={e => {
                                                handleImageChange(e.target.files[0])
                                            }}
                                        />
                                        <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            Upload Image 1
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                {imagePreview && <img src={imagePreview} className='size-16 mx-auto rounded-lg' />}
                            </div>
                        </div>
                        {/* img 2 */}
                        <div className=' flex items-center justify-center gap-5 p-4 bg-white w-full m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image2'
                                            id='image2'
                                            accept='image/*'
                                            hidden
                                            onChange={e => {
                                                handleImageChange2(e.target.files[0])
                                            }}
                                        />
                                        <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            Upload Image 2
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                {imagePreview2 && <img src={imagePreview2} className='size-16 mx-auto rounded-lg' />}
                            </div>
                        </div>
                        {/* img3 */}
                        <div className=' flex items-center justify-center gap-5 p-4 bg-white w-full m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image3'
                                            id='image3'
                                            accept='image/*'
                                            hidden
                                            onChange={e => {
                                                handleImageChange3(e.target.files[0])
                                            }}
                                        />
                                        <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            Upload Image 3
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                {imagePreview3 && <img src={imagePreview3} className='size-16 mx-auto rounded-lg' />}
                            </div>
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='aboutTour'
                            ></textarea>
                        </div>
                    </div>
                </div>

                <button
                    disabled={loading}
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    {loading ? <ImSpinner className='animate-spin mx-auto' /> : 'Save & Continue'}
                </button>
            </form>
        </div>
    );
};

export default AddPackage;