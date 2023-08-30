
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Maui from './pages/Maui.fires';
import LandingPage from './pages/landingpage';

const App = () => {

  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/maui-fire' element={<Maui />} />
            <Route path='/fl-hurricane' element={<Maui />} />

            {/* <Route path='/signup' element={<Signup />} />
            <Route path="/mainpage/:username" element={<MainPage/>}/>
            <Route path="/trade" element={<Trade/>}/>             */}
          </Routes>
      </Router>
    </div>
  );
};

export default App;