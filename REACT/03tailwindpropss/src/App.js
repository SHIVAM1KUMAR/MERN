import{useState} from 'react'
import css from'../src/index.css'
import Card from'./Components/Card'

function App() {
  const [count, setCount]=useState(0)
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>
     Tailwind Test
    </h1>
    <Card />

    </>
  );
}

export default App;
