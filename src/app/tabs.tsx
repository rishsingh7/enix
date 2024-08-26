import { useState } from "react"

export default function Tabs({displayTabs, tabVal}: any){
    const [selectedTab, setSelectedTab] = useState('Profile')
    const handleTabs = (tab: string) => {
        setSelectedTab(tab)
        tabVal(tab)
    }
    return (
        <div className="mb-4">
            {
                displayTabs.map((tab: string) => {
                    return(
                        <button onClick={() => handleTabs(tab)} className={`${selectedTab === tab ?  'bg-white-200 border-2 border-blue-800' : 'bg-gray-200'} border border-black p-1 w-40`}>{tab}</button>
                    )
                })
            }
        </div>
    )
}