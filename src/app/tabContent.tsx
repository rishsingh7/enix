import Company from "./company"
import Contacts from "./contacts"
import Profile from "./profile"

export default function TabContent ({ tab, user }: any) {
    switch (tab) {
        case 'Profile':
           return <Profile user={user}/>
        case 'Contacts':
            return <Contacts user={user} />
        case 'Company':
           return <Company user={user} />
        default:
            return <Profile user={user} />
    }
}