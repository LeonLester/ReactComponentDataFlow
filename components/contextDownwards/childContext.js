import 'antd/dist/antd.css';
import { GrandFatherContext } from './grandFatherDownwardsContext';
import { useContext } from 'react';

export default function childContext() {
  const context = useContext(GrandFatherContext);
  return (
    <div>
      <h1>dose timh</h1>
      <h3>h timi h dikia mou:{context}</h3>
    </div>
    )
  }