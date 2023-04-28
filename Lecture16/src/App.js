import { useRef } from "react";

function App() {

  const userNameRef = useRef();

  const handleClick = () => {
    debugger;
    const userNameValue = userNameRef.current;
  }
  return (
    <>
      <h2>Home</h2>
      <input name="userName" type="text" ref={userNameRef} />

      <button onClick={() => handleClick()}>Submit</button>
    </>
  );
}

export default App;