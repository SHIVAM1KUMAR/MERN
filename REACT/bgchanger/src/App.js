import {useState} from"react"


function App() {
  const [color,setColor] =useState("olive")
  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
          onClick={() => setColor("Red")}
           className="outline-none px-4 py-2 rounded-fulltext-white shadow-lg"
          style={{backgroundColor:"Red"}}
          > Red</button>
          <button 
          onClick={() => setColor("Yellow")}
          className="outline-none px-4 py-2 rounded-fulltext-white shadow-lg"
          style={{backgroundColor:"Yellow"}}
          > Yellow</button>
          <button 
          onClick={() => setColor("Green")}
          className="outline-none px-4 py-2 rounded-fulltext-white shadow-lg"
          style={{backgroundColor:"Green"}}
          > Green</button>
          <button 
          onClick={() => setColor("Black")}
          className="outline-none px-4 py-2 rounded-fulltext-white shadow-lg"
          style={{backgroundColor:"Black"}}
          > Black</button>
        </div>
      </div>
    </div>
  );
}

export default App;
