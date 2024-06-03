import PropTypes from "prop-types";

const ImageHeader = ({ img1, heading, shortDis }) => {
    return (
        <div className="py-20" style={{
            backgroundImage: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%),url(${img1})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="flex justify-center items-center mx-auto w-3/4 bg-white p-6 shadow-2xl rounded-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">{heading}</h2>
                    <p>{shortDis}</p>
                </div>
            </div>
        </div>
    );
};

ImageHeader.propTypes = {
    img1: PropTypes.string,
    heading: PropTypes.string,
    shortDis: PropTypes.string,
}

export default ImageHeader;