import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider1 from '../../assets/images/slider/1694198836218.jpg'
import slider2 from '../../assets/images/slider/ahsan-manzil-museum-in-dhaka-nw0sfyt8x4ibglxq.jpg'
import slider3 from '../../assets/images/slider/md-anwar-hossain-r2DwuIjw5T4-unsplash.jpg'
import slider4 from '../../assets/images/slider/sabbir-ahmed-AvGCGMMu9XU-unsplash.jpg'
import slider5 from '../../assets/images/slider/masudur-rahman-3VIASEA4xZ0-unsplash.jpg'

const Slider = () => {
    return (
        <div className='mt-5'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slider1} alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" className='rounded-lg' /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;