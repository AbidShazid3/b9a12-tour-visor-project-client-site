import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PackageCard from './PackageCard';
import { Link } from 'react-router-dom';
import Heading from '../Shared/Heading/Heading';
import video1 from '/ranga.mp4';
import video2 from '/cox.mp4';
import video3 from '/martin.mp4';
import usePackages from '../../hooks/usePackages';
import TourGuidesCards from './TourGuides/TourGuidesCards';
import useGuides from '../../hooks/useGuides';


const CatTab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [packages] = usePackages();
    const [guides] = useGuides();

    const handleTabSelect = index => {
        setActiveTab(index);
    }

    const shortPackages = packages.slice(0, 3)

    return (
        <div className='mt-20'>
            <Heading
                heading={'Your Ultimate Travel Guide'} subHeading={'Discover our mission and why we`re your best choice for unforgettable travel.'}
            ></Heading>
            <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
                <div className='flex justify-center items-center font-semibold'>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Packages</Tab>
                        <Tab>Meet Tour Guides</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='mt-5'>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-5 p-2'>
                        <div>
                            <video width="560" height="315" controls>
                                <source src={video1} type="video/mp4" />
                            </video>
                        </div>

                        <div>
                            <video width="560" height="315" controls>
                                <source src={video3} type="video/mp4" />
                            </video>
                        </div>

                        <div>
                            <video width="560" height="315" controls>
                                <source src={video2} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 p-2'>
                        {
                            shortPackages.map(pack => <PackageCard key={pack._id} pack={pack}></PackageCard>)
                        }
                    </div>
                    <div className='flex justify-center text-lg md:text-2xl font-bold mt-10'>
                        <h3>Tour Packages - <Link to="/all-packages" className='text-green-400 hover:text-green-500'>View All</Link></h3>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-5 p-2'>
                        {
                            guides.map(guide => <TourGuidesCards key={guide._id} guide={guide}
                            ></TourGuidesCards>)
                        }
                    </div>
                    <div className='flex justify-center text-lg md:text-2xl font-bold mt-10'>
                        <h3>Tour Guides - <Link to='/tour-guides' className='text-green-400 hover:text-green-500'>View All</Link></h3>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CatTab;