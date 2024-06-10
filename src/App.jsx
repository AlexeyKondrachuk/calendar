import Calendar1 from './components/Calendar';
import './App.css'

function App() {
 
  const now = new Date();
  

  return (
    <>
      <Calendar1 date={now} />
    </>
  )
}

export default App
