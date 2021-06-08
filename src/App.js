import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { AuthProvider, PrivateRoute } from './lib/auth'
import Discover from './pages/Discover'
import FinishedBooks from './pages/FinishedBooks'
import ReadingList from './pages/ReadingList'
import { loadBooks, loadFinishedBook, loadReadingList } from './redux/actions/bookActions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadBooks())
  },[dispatch])

  useEffect(() => {
      dispatch(loadReadingList())
  }, [dispatch])

  useEffect(() => {
    dispatch(loadFinishedBook())
  }, [dispatch])
  
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Discover} />
          <PrivateRoute path="/reading" component={ReadingList} />
          <PrivateRoute path="/finish" component={FinishedBooks} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
