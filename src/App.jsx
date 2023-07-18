import Navbar from './components/Navbar.jsx'
import ListCard from './components/ListCard.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const lists = [
    {
      id: 1,
      task: 'Revamp Portfolio',
      deadline: 'August 01, 2023',
      progress: 64
    },
    {
      id: 2,
      task: 'Do Laundry',
      deadline: 'Anytime',
      progress: 0
    },
    {
      id: 3,
      task: 'Project 1: NavBar',
      deadline: 'July 24, 2023',
      progress: 80
    },
    {
      id: 4,
      task: 'Project 2: Documentation',
      deadline: 'August 31, 2023',
      progress: 30
    },
    {
      id: 5,
      task: 'Go to Bank',
      deadline: 'Any Weekdays',
      progress: 22
    },
    {
      id: 6,
      task: 'Organizing Files',
      deadline: 'Every Weekends',
      progress: 100
    }
  ]

  const listCardList = lists.map(
    (list) => <ListCard key={list.id} task={list.task} deadline={list.deadline} progress={list.progress}/>
  );

  return (
    <>
      <Navbar />

      <h1 className="text-danger">Your Progress:</h1>
      <p className="animate__animated animate__bounce">Please, be reminded that the <b>RED</b> cards needed <u>more</u> attention, Master. Thank you!</p>

      { listCardList }

      <Footer />
      
    </>  
  )
}

export default App
