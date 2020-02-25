import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
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

const Fullpage = (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <button onClick={() => fullpageApi.moveTo(2)}>
                  About
              </button>
              <button onClick={() => fullpageApi.moveTo(3)}>
                  Experience
            </button> 
          </div>
          <div className="section">
            <About></About>            
          </div>
          <div className="section">
            <Experience></Experience>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
const anchors = ["firstPage", "secondPage"];

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" id = "navbar">
        <a class="navbar-brand" href="#">Navbar</a>
        <div className = "collapse navbar-collapse">
          <ul className = "navbar-nav mr-auto" id = "myMenu">
            <li data-menuanchor="firstPage" className="nav-item active"><a className="nav-link" href="#firstPage">About</a></li>
            <li data-menuanchor="secondPage" className="nav-item"><a className="nav-link" href="#secondPage">Experience</a></li>
          </ul>
        </div>
      </nav>
      {/* <ul id="myMenu">
        <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
        <li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
        <li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
      </ul> */}
      <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      anchors={anchors}
      navigation
      menu = '#myMenu'
      scrollingSpeed = {1000} /* Options here */

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* <div className="section">
              <button onClick={() => fullpageApi.moveTo(2)}>
                    About
                </button>
                <button onClick={() => fullpageApi.moveTo(3)}>
                    Experience
              </button> 
            </div> */}
            <div className="section">
              <About></About>            
            </div>
            <div className="section">
              <Experience></Experience>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
      />
    </div>
    
  );
}

export default App;
