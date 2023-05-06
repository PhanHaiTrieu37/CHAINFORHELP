import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

import SearchAZ from '../components/SearchAZ.jsx';
// import SearchString from '../components/SearchString.jsx';
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns 
      isLoading={isLoading}
      campaigns={campaigns}
    />,
    <SearchAZ
    title="All Campaigns"
    isLoading={isLoading}
    campaigns={campaigns}
    />
    // ,
    // <SearchString
    // title="Search String"
    // isLoading={isLoading}
    // campaigns={campaigns}
    // />
  )
}

export default Home