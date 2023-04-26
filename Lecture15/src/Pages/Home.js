import { useCallback, useState } from "react";
import HomeChild from "../HomeChild";

function Home() {

    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    const updateCounter1 = () => {
        setCount((num) => num + 1);
    }
    const updateCounter2 = useCallback(() => {
        setSecondCount((num) => num + 1);
    }, [secondCount]);

    return (
        <>
            <div>
                <p>This is counter # 1 {count}</p>
                <button onClick={updateCounter1}>Counter1 Button</button>
            </div>
            <div>
                <HomeChild secondCount={secondCount} setSecondCount={updateCounter2} />
            </div>
        </>
    );
};

export default Home;