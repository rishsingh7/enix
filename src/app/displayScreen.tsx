
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabs from './tabs';
import TabContent from './tabContent';
import { useState } from 'react';

  
export default function DisplayScreen({user}: any){
    let tabs = ['Profile', 'Contacts', 'Company']
    const [selectedTab, setSelectedTab] = useState('Profile')

    const handleTab = (tab: string) => {
        setSelectedTab(tab)
      }
    
    return (
        <>
        {Object.keys(user).length ?
            <div className="flex flex-col ml-20 border-2 p-4 display-screen">
              <div className="flex justify-end">
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" className="mb-2 cursor-pointer" />
                <FontAwesomeIcon icon="fa-solid fa-trash" className="ml-2 mb-2 cursor-pointer" />
              </div>
              <Tabs displayTabs={tabs} tabVal={handleTab} />
              <TabContent tab={selectedTab} user={user}/>
            </div> : null
          }
          </>
    )
}