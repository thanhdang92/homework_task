import './App.css';
import './Styles/topNav.css'
import './Styles/homework.css'
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Components/Header';
import Main from './Components/Main';
import TopNav from './Components/TopNav';
import { useContext } from 'react';
import { DataContext } from './Components/DataContext';
function App() {
  const { data, setData, setDataTask } = useContext(DataContext)
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Lưu trữ dữ liệu vào localStorage trước khi trang được tải lại
      localStorage.setItem('myData', JSON.stringify(data));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [data]);
  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData))
      setDataTask(JSON.parse(storedData))
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <div className="homework-app">
          <Header />
          <Switch>
            <Route path="/home">
              <Main />
            </Route>
            <Route path="/all_task">
              <Main />
            </Route>
            <Route path="/new_task">
              <Main />
            </Route>
            <Route path="/doing_task">
              <Main />
            </Route>
            <Route path="/done_task">
              <Main />
            </Route>
            <Route path="/create_new_task">
              <Main />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
