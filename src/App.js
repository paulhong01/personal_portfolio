import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/about.js'
import Experience from './components/experience.js'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <button type="button" className="btn btn-primary">Primary</button>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <div>
      <About></About>
      <Experience></Experience>
    </div>
  );
}

export default App;
