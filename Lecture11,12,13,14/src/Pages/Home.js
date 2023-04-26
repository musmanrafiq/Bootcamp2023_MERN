import { useState, useEffect } from "react";
function Home() {

    const [user, setUser] = useState(0);
    useEffect(() => {
        debugger;
    }, [user]);

    const settingUser = () => {
        const newUser = user + 1;
        setUser(newUser);
    }
    return (
        <><h1>I am home</h1>
            <button onClick={settingUser}>I am a button at home</button></>

    );
}

export default Home;