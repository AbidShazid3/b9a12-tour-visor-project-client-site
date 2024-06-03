import { CirclesWithBar } from "react-loader-spinner";


const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
                <div>
                    <CirclesWithBar
                        height="200"
                        width="200"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            </div>
    );
};

export default LoadingSpinner;