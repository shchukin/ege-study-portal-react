import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/home/home.tsx";
import Feedback from "./pages/feedback/feedback.tsx";
import NotFound from "./pages/not-found/not-found.tsx";
import Header from "./components/header/header.tsx";
import Nav from "./components/nav/nav.tsx";
import Info from "./components/info/info.tsx";
import Footer from "./components/footer/footer.tsx";

function App() {

  return (
    <BrowserRouter>

      <Nav/>
      <Header/>
      <Info/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App
