// import Profile from "./Profile";
export function Profile() {
    return (
        <img
            src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

function Gallery() {
    return (
        <>
            <h1>Amazing Scientist</h1>
            <Profile />
            <Profile />
            <Profile />
        </>
    );
}

export default Gallery;
