import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StoryCartDetails = ({ story }) => {
    return (
        <Link to={`/story/${story._id}`} className="w-full max-w-md px-8 py-4 bg-slate-100 rounded-lg shadow-lg object-cover overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <div>
                <h2 className="mt-2 text-lg font-medium uppercase">Package : {story.storyTitle}</h2>
                <div className="md:flex lg:flex justify-between mt-4">
                    <h3 className="text-lg font-medium text-blue-600">{story.touristName}</h3>
                    <p>Tour Date : {story.tripDate}</p>
                </div>
                <p className="mt-2 text-sm">Comment by {story.touristName} : {story.description}
                </p>
            </div>
        </Link>
    );
};

StoryCartDetails.propTypes = {
    story: PropTypes.object,
}

export default StoryCartDetails;