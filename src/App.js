import React, { useState } from 'react';
import Osc1 from './components/Osc1';
import Filter from './components/Filter';

import './App.scss';

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type,
  });

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type,
  });

  const changeOsc1 = (e) => {
    let { value, id } = e.target;
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  };

  const changeOsc1Type = (e) => {
    let { id } = e.target;
    setOsc1Settings({ ...osc1Settings, type: id });
    osc1.type = id;
  };

  const changeFilter = (e) => {
    let { value, id } = e.target;
    setFilterSettings({ ...filterSettings, [id]: value });
    filter[id].value = value;
  };

  const changeFilterType = (e) => {
    let { id } = e.target;
    setFilterSettings({ ...filterSettings, type: id });
    filter.type = id;
  };

  return (
    <div className='App'>
      <h1 className='center'>sliders</h1>
      <div className='center'>
        <button onClick={() => osc1.start()}>start</button>
        <button onClick={() => osc1.stop()}>stop</button>
      </div>

      <Osc1
        change={changeOsc1}
        settings={osc1Settings}
        changeType={changeOsc1Type}
      />
      <Filter
        change={changeFilter}
        settings={filterSettings}
        changeType={changeFilterType}
      />
    </div>
  );
}

export default App;
