export default function Contacts({ user }: any) {
    return (
        <>
            <span>Phone: {user.phone}</span>
            <span>Email: {user.email}</span>
        </>
    )
}