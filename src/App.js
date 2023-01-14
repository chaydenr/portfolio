// !!!! npm run deploy !!!!
import signature from './signature.gif';
import './App.css';

function App() {
  return (
    <div className='header'>
      <div className='sword-animation'>
        <div className='sword' />
      </div>
      <img src={signature} />
    </div>
  );
}

export default App;
