import Home from './components/Home'
import Books from './components/Books';
import SemesterHome from './components/SemesterHome';
import Developer from './components/Developer';
import './App.css'
import './css/homePage.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='pbooks' element={ <Books category="pBooks" /> } />
        <Route path='semesters' element={ <SemesterHome/> } />
        <Route path='semesters/Semester 1&2' element={ <Books category="Semester 1&2" /> } />
        <Route path='semesters/Semester 3&4' element={ <Books category="Semester 3&4" /> } />
        <Route path='semesters/Semester 5&6' element={ <Books category="Semester 5&6" /> } />
        <Route path='semesters/Semester 7&8' element={ <Books category="Semester 7&8" /> } />
        <Route path='developers' element={ <Developer/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;