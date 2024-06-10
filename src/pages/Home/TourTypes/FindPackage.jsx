import { Link } from "react-router-dom";
import img1 from '../../../assets/images/8511.jpg'
import { motion } from "framer-motion"

const FindPackage = () => {
    return (
        <div >
            <div className="mt-16">
                <div className="hero bg-base-100">
                    <div className="hero-content flex-col lg:flex-row bg-[#d9e6ff] rounded-[40px]">
                        <div className="flex-1">
                            <img src={img1} alt="" className="rounded-[40px]" />
                        </div>
                        <div className="px-4 py-10 flex-1">
                            <p className="text-[#3979e7] font-bold">Find Package</p>
                            <h1 className="text-5xl font-bold text-[#151515] pt-5">Discover Your Perfect Adventure Package</h1>
                            <p className="pt-7">Bangladesh is like a painter`s dream come true with a rich tapestry of colors and texture. The traditional emphasis of the tourist trade has always been on the material facilities offered by a country rather than on its actual charms. This may be a reason why Bangladesh has seldom been highlighted in the World`s tourist maps.</p>
                            <Link to="/all-packages" className="btn btn-outline btn-info text-lg mt-5"><motion.button
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 1 },
                                  }}
                                  whileTap={{ scale: 0.9 }}
                            >Find More</motion.button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindPackage;