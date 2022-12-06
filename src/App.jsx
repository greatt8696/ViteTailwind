import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Gallery from "./component/gallery/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App example flex min-w-[800px] overflow-y-scroll">
        <div className="w-3/4 min-w-[500px] m-auto">
          <Gallery />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
