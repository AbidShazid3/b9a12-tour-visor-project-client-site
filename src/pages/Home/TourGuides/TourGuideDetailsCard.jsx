import ImageHeader from "../../Shared/ImageHeader/ImageHeader";
import img4 from '../../../assets/images/8511.jpg'

const TourGuideDetailsCard = () => {

    return (
        <div className="mt-10">
            <ImageHeader
            img1={img4} heading={'Meet Our Expert Tour Guides'} shortDis={'Discover the passion and expertise of our professional tour guides. Each guide brings a unique blend of knowledge, experience, and enthusiasm to make your journey unforgettable.'}
            ></ImageHeader>
            <div className="px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
                <div className="flex items-center mt-4">
                    <img className="hidden object-cover w-20 h-20 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                    <p className="text-3xl font-bold text-gray-700 cursor-pointer dark:text-gray-200">Khatab wedaa</p>
                </div>

                <div className="mt-2">
                    <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                        Accessibility tools for designers and developers
                    </a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
                    </p>
                </div>
            </div>
        </div >
    );
};

export default TourGuideDetailsCard;