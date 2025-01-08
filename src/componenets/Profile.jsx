function Profile(){
    return(
        <div>
            <h1>Profile card challenging</h1>
            <ProfileCards
            name="sneha"
            age={20}
            greeting={
                <div>
                    <strong>Hii sneha have a wonderful day</strong>
                </div>
            }
            >
                <p>Hobbies: Rading,hiking</p>
                <button>Contact</button>
            </ProfileCards>

            <ProfileCards
            name="Mosin"
            age={21}
            greeting={
                <div>
                    <strong>Hii mosin have a wonderful day</strong>
                </div>
            }
            >
                <p>Hobbies: Rading,hiking</p>
                <button>Contact</button>
            </ProfileCards>
        </div>
    )
}
export default Profile;

function ProfileCards({name,age,greeting,children}){
    // this is destructure using props
    // const{name,age,greeting,children}=props
    return(
        <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        {/*  jsx pass the props */}
        <div>{children}</div>
        </>
    )
}