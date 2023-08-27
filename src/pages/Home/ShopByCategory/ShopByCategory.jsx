import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ToyCard from '../ToyCard/ToyCard';

const ShopByCategory = ({categories}) => {
  // console.log(categories)
  const [activeTab, setActiveTab] = useState(0);
  const [tabContent, setTabContent] = useState([]);

  const fetchTabContent = async(tabName) => {
    const res = await fetch(`http://localhost:3000/toys/${tabName}`)
    const data = res.json();
    return data;
  }

  useEffect(() => {
    async function fetchContent() {
      const content = await fetchTabContent(categories[activeTab].name);
      setTabContent(content);
      // console.log(content);
    }
    fetchContent();
  }, [activeTab, categories]);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

    return (
      <div className='md:w-5/6 mx-auto my-16' data-aos="slide-up">
        <h2 className='text-4xl font-bold text-center mb-10'>Shop By Category</h2>
        <Tabs onSelect={handleTabSelect}>
        <TabList className="grid grid-cols-1 md:grid-cols-4 tabs">
          {
            categories.map((category, idx) => <Tab key={category._id} 
             className={`tab text-lg
               ${idx === activeTab? 'underline underline-offset-8 tab-active no-border' : ''}`}>{category.name}</Tab>)
          }

        </TabList>
        <hr/>
          {
          categories.map((category, idx) => <div key={idx}>
          <TabPanel className="px-4" key={idx}>
            <h2 className='text-2xl font-semibold my-6'>Category: {category.name}</h2>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
            {
              tabContent.map(content => <ToyCard
              key={content._id}
              content = {content}
              ></ToyCard>)
            }
          </div>
        </TabPanel>
          </div>)
        }
        
      </Tabs>
      </div>
    );
};

export default ShopByCategory;