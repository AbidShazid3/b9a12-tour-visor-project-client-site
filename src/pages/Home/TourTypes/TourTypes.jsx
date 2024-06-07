import { TbBeachOff } from "react-icons/tb";
import Heading from "../../Shared/Heading/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FindPackage from "./FindPackage";

const TourTypes = () => {
    return (
        <div className="mt-20">
            <Heading
                heading={'Tour Types'} subHeading={'Welcome to our Tour Types and discover the stories behind'}
            ></Heading>
            <div className="px-2">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-black">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <TbBeachOff className="text-3xl mt-1" />
                                    <h3 className="text-xs font-bold">Adventure</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-black">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <TbBeachOff className="text-3xl mt-1" />
                                    <h3 className="text-xs font-bold">Adventure</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-black">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <TbBeachOff className="text-3xl mt-1" />
                                    <h3 className="text-xs font-bold">Adventure</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-black">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <TbBeachOff className="text-3xl mt-1" />
                                    <h3 className="text-xs font-bold">Adventure</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-black">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <TbBeachOff className="text-3xl mt-1" />
                                    <h3 className="text-xs font-bold">Adventure</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-black">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <TbBeachOff className="text-3xl mt-1" />
                                    <h3 className="text-xs font-bold">Adventure</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-black">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <TbBeachOff className="text-3xl mt-1" />
                                    <h3 className="text-xs font-bold">Adventure</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-black">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <TbBeachOff className="text-3xl mt-1" />
                                    <h3 className="text-xs font-bold">Adventure</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-black">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <TbBeachOff className="text-3xl mt-1" />
                                    <h3 className="text-xs font-bold">Adventure</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <FindPackage></FindPackage>
        </div>
    );
};

export default TourTypes;