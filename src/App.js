import logo from './logo.svg';
import './App.css';
import Header from './Header'

function App() {
  let a={
    name:'john',
    email:"john@gmail.com"
  }
  return (
    <div className="App">
  

     <Header info={a} >
      <h3>hello</h3>
     </Header>

    </div>
  );
}

export default App;
