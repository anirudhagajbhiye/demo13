import "./App.css";
import { useEffect } from "react";
import useFetch from "./useFetch";

function App() {
  const [data] = useFetch("http://localhost:8765/api/products.json");

  useEffect(() => {}, []);

  return (
    <div className="App">
      {data &&
        data.map((item, index) => {
          return (
            <p key={index}>
              {item.id}, {item.name}
            </p>
          );
        })}
    </div>
  );
}

export default App;
