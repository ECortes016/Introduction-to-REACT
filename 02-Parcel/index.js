import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';

// ReactDOM.render(<App />, document.getElementById('app'))





// function Welcome(props) {
//     return <h1>Welcome</h1>
// }

export const Welcome = (props) => {
    return <h1>welcome to my apppppppppppp, {props.name}, the former {props.skills}</h1>
}

ReactDOM.render(
    <>
    <Navbar/>
    <Jumbotron/>
    <Welcome name="Michelle Obama" skills="First Lady"/>
    </>
,
 
document.getElementById('app'))