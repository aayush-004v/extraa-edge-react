import { useEffect, useState } from 'react';
import './App.css';
import FrontPage from './Components/FrontPage';
import Loader from './Components/Loader';
function App() {

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 2500);
  }, [flag])

  return (
    <>
      {
        flag ? <FrontPage /> : <Loader />
      }

    </>
  );
}

export default App;
