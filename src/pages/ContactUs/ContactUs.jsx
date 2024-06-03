

const ContactUs = () => {
    return (
        <div className="mt-10">
            <h1 className="text-xl font-bold text-center bg-gray-300 rounded-md py-4">Contact with TourVisor!</h1>
            <div className="mt-5 p-4">
                <h2 className="text-2xl font-bold mb-2">Contact Details</h2>
                <p>If you have any questions, just contact us, and we will answer you shortly. If you are living nearby, come visit our office.</p>
                <div className="mt-6">
                    <p className="font-semibold">Client Support:</p>
                    <div className="flex p-2 gap-3 items-center">

                        <p>+8801640310327</p>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="font-semibold">E-mail:</p>
                    <div className="flex p-2 gap-3 items-center">

                        <p>info@tourvisor.org</p>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="font-semibold">Main Office:</p>
                    <div className="flex p-2 gap-3 items-center">

                        <p>Porjoton Bhaban, West Agargaon, Sher-E Bangla Nagar ( Administrative Area), Dhaka-1207</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;