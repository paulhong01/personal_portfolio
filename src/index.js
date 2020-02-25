import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactFullpage from '@fullpage/react-fullpage';


ReactDOM.render(<App />, document.getElementById('root'));
// const Fullpage = () => (
//     <ReactFullpage
//       //fullpage options
//       licenseKey = {'YOUR_KEY_HERE'}
//       scrollingSpeed = {1000} /* Options here */
  
//       render={({ state, fullpageApi }) => {
//         return (
//           <ReactFullpage.Wrapper>
//             <div className="section">
//               <p>Section 1 (welcome to fullpage.js)</p>
//               <button onClick={() => fullpageApi.moveSectionDown()}>
//                 Click me to move down
//               </button>
//             </div>
//             <div className="section">
//               <p>Section 2</p>
//             </div>
//           </ReactFullpage.Wrapper>
//         );
//       }}
//     />
//   );
  
// ReactDOM.render(<Fullpage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
