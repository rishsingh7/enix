export default function Company({ user }: any) {
    return (
        <>
            <span>Company Name: {user.company.name}</span>
            <span>Company Title: {user.company.title}</span>
            <span>Company Department: {user.company.department}</span>
        </>
    )
}