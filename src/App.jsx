import Calendar from './components/Calendar';
import './App.css'

function App() {
 
  const now = new Date();
  
  console.log(now)
  return (
    <>
      <Calendar date={now} />
    </>
  )
}

export default App
