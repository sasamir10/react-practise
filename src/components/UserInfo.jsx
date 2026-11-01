function User({ name, profession, age, location }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{profession}</p>
            <p>{age}</p>
            <p>{location}</p>
        </div>
    );
}

export default User;
