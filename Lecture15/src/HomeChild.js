import { memo } from "react";

function HomeChild({ secondCount, setSecondCount }) {
    return (
        <>
            <div>This is home's child counter</div>
            <div>{secondCount}</div>
            <button onClick={setSecondCount}>Second Counter Button</button>
        </>
    )
}

export default memo(HomeChild);