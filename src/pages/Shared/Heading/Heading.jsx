import PropTypes from "prop-types";

const Heading = ({heading, subHeading}) => {
    return (
        <div className="p-2">
            <div className='text-center mb-10 space-y-3'>
                <h2 className='text-xl font-semibold lg:text-3xl uppercase'>{heading}</h2>
                <p className='italic underline underline-offset-8 lg:px-3'>---{subHeading}---</p>
            </div>
        </div>
    );
};

Heading.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
}

export default Heading;