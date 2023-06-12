import './App.css';
import './Styles/topNav.css'
import './Styles/homework.css'
import { useEffect, useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Components/Header';
import Main from './Components/Main';
import TopNav from './Components/TopNav';
function App() {
  const [data, setData] = useState([]);
  const [dataTask, setDataTask] = useState([]);
  const [isCreate, setIsCreate] = useState(true);
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
          <Header
            isCreate={isCreate}
            setIsCreate={setIsCreate}
          />
          {/* <Main
            isCreate={isCreate}
            setIsCreate={setIsCreate}
            data={data}
            setData={setData}
            dataTask={dataTask}
            setDataTask={setDataTask}
          /> */}
          <Switch>
            <Route path="/">
              <Main
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                data={data}
                setData={setData}
                dataTask={dataTask}
                setDataTask={setDataTask}
              />
            </Route>
            <Route path="/all_task">
              <Main
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                data={data}
                setData={setData}
                dataTask={dataTask}
                setDataTask={setDataTask}
              />
            </Route>
            <Route path="/new_task">
              <Main
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                data={data}
                setData={setData}
                dataTask={dataTask}
                setDataTask={setDataTask}
              />
            </Route>
            <Route path="/doing_task">
              <Main
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                data={data}
                setData={setData}
                dataTask={dataTask}
                setDataTask={setDataTask}
              />
            </Route>
            <Route path="/done_task">
              <Main
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                data={data}
                setData={setData}
                dataTask={dataTask}
                setDataTask={setDataTask}
              />
            </Route>
            <Route path="/create_new_task">
              <Main
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                data={data}
                setData={setData}
                dataTask={dataTask}
                setDataTask={setDataTask}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
