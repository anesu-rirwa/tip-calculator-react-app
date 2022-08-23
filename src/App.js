import React, {useState} from 'react';
import './App.css';
import Bill from './components/bill';
import Tip from './components/tip';
import PeopleNumber from './components/people';
import Total from './components/total';

function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [custom, setCustom] = useState('');
  const [people, setPeople] = useState('');

  return (
    <React.Fragment>
      <header className='header'>SPLI<span className='block'>TTER</span></header>

      <div className="App">
        <section className='calculations'>
          <Bill bill={bill} setBill={setBill}/>
          <Tip custom={custom} setCustom={setCustom} setTip={setTip}/>
          <PeopleNumber people={people} setPeople={setPeople}/>
        </section>

        <section className='totals'>
          <Total 
            bill={bill} 
            tip={tip}
            custom={custom}
            people={people}
            setCustom={setCustom}
            setBill={setBill}
            setTip={setTip}
            setPeople={setPeople}
          />
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
