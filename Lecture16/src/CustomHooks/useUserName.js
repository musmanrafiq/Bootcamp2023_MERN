import { useState } from "react";

function useUserName(name) {

    const [userName, setUserName] = useState(name);

    // sets username if required

    return [userName];
}

export default useUserName;