function User({ person, profession, age, location }) {
    return (
        <div>
            <h3>{person}</h3>
            <p>{profession}</p>
            <p>{age}</p>
            <p>{location}</p>
        </div>
    );
}

export default User;
