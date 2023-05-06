import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';

const SearchAZ = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState('asc');

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  // Sort campaigns by title
  const sortedCampaigns = useMemo(() => {
    return campaigns.slice().sort((a, b) => {
      const compareResult = a.title.localeCompare(b.title);
      return sortOrder === 'asc' ? compareResult : -compareResult;
    });
  }, [campaigns, sortOrder]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-black text-left">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap justify-between items-center mt-[20px] mb-[10px]">
        <div>
          <label htmlFor="sort-select" className="mr-[10px] font-epilogue font-medium text-black">
            Sort by title:
          </label>
          <select
            id="sort-select"
            value={sortOrder}
            onChange={handleSortChange}
            className="bg-[#333333] px-[10px] py-[6px] rounded-md text-white"
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        {/* Show loader if campaigns are being loaded */}
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}
      </div>

      <div className="flex flex-wrap gap-[26px]">
        {/* Show message if no campaigns are found */}
        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

        {/* Display sorted campaign cards */}
        {!isLoading &&
          sortedCampaigns.length > 0 &&
          sortedCampaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchAZ;