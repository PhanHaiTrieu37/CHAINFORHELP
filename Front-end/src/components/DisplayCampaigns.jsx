import React from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }

  // Search the campaign 
  const [searchCampaign, setSearchCampaign] = useState('');
  const filteredItems = campaigns.filter(campaign => {
    return campaign.title.toLowerCase().includes(searchCampaign.toLowerCase());
  });
  const handleSearchCampaign = (e)  => {
    setSearchCampaign(e.target.value);
  };
  return (
    <div>

      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input 
          type="text" 
          placeholder="Search for campaigns" 
          className="flex w-full font-epilogue 
          font-normal text-[14px] placeholder:text-[#4b5264] text-white 
          bg-transparent outline-none" 
          value={searchCampaign} //added
          onChange={handleSearchCampaign}
          />
          
          {filteredItems.map(campaign => (<FundCard 
          key={campaign.id}
          {...campaign}
            />))}
            
        <div 
        
        className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer"
        >
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div>

      </div>


      <h1 className="font-epilogue font-semibold text-[18px] text-gray-800 text-left">{title} ({campaigns.length})</h1>



      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns
