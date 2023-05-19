import { useState, useEffect } from "react";

function HomePage() {
    const [welcomeMessage, setWelcomeMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/home')
        .then(response => response.json())
        .then(data => setWelcomeMessage(data.message))
        .catch(error => console.log('welcome error: ', error));
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <p>server message: {welcomeMessage}</p>
        </div>
    );
}

export default HomePage;