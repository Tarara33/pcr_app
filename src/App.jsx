import './App.css';
import { Form } from './components/Form';

function App() {
  return (
    <div className='back-ground'>
      <div className='shine shine1'></div>
      <div className='shine shine2'></div>
      <div className='shine shine3'></div>
      <div className='shine shine4'></div>
      <div className='shine shine5'></div>
      <h1 className='title'>PCR値 計算</h1>
      <Form/>
      <div className='agreement'>
        <a  className='link' href="https://forms.gle/Zritt53JFZLtKjrKA" target='blank'>お問い合わせ</a>
        <p>©ぴーしーあーるっち</p>
      </div>
    </div>
  );
}

export default App;
