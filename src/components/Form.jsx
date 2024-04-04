import { useState } from 'react'
import './Form.css'

export const Form = () => {
  const [stainedTeeth, setStainedTeeth] = useState(0);
  const [teeth, setTeeth] = useState(0);

  const StainTeethChange = (e) => {
    setStainedTeeth(Number(e.target.value));
  }

  const TeethChange = (e) => {
    setTeeth(Number(e.target.value));
  }

  const Total = () => {
    // 歯の本数が0の場合に0除算を避ける
    if (teeth === 0) return 0;
    return ((stainedTeeth / (teeth * 4)) * 100).toFixed(1)
  }

  return (
    <div>
      <form>
        <input id='stained-teeth' type="number" placeholder="染まった面数" onChange={StainTeethChange}/>
        <input id='teeth' type="number" placeholder='歯の本数' onChange={TeethChange}/>
      </form>
      <h1>{Total()}</h1>
    </div>
  );
}
