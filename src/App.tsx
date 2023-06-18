import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { CreatePage } from './pages/CreatePage/CreatePage';
import { NotfoundPage } from './pages/NotfoundPage/NotfoundPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='create' element={<CreatePage />} />
          <Route path='*' element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
