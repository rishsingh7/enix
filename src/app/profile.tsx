export default function Profile({user}: any){
    return(
        <>
                <span>Name: {user.firstName}</span>
                <span>Age: {user.age}</span>
                <span>Height: {user.height}</span>
            </>
    )
}