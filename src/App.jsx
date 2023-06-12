import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import './Styles/homework.css'
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
  console.log(data)
  return (
    <div className="App">
      <div className="homework-app">
        <Header
          isCreate={isCreate}
          setIsCreate={setIsCreate}
        />
        <Main
          isCreate={isCreate}
          setIsCreate={setIsCreate}
          data={data}
          setData={setData}
          dataTask={dataTask}
          setDataTask={setDataTask}
        />
      </div>
    </div>
  );
}

export default App;
