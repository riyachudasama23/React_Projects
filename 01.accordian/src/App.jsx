import { useState } from "react";
import "./App.css";
import data from "./components/data";

function App() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    //setSelected(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
    //open and close single selection
  }
  console.log(selected);

  return (
    <div className="wrapper">
      <h1>Accordian</h1>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default App;
