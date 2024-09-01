import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/home/home.tsx";
import Feedback from "./pages/feedback/feedback.tsx";
import NotFound from "./pages/not-found/not-found.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
