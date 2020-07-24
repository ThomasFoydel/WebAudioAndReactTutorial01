import React from 'react';

const Osc1 = ({ change, settings, changeType }) => {
  let { type, frequency, detune } = settings;
  return (
    <div className='control'>
      <h2>osc 1</h2>

      <div className='param'>
        <h3>frequency</h3>
        <input
          value={frequency}
          onChange={change}
          max='5000'
          type='range'
          id='frequency'
        />
      </div>

      <div className='param'>
        <h3>detune</h3>
        <input value={detune} onChange={change} type='range' id='detune' />
      </div>

      <div className='param'>
        <h3>wave</h3>
        <button
          id='sine'
          onClick={changeType}
          className={`${type === 'sine' && 'active'}`}
        >
          sine
        </button>
        <button
          id='triangle'
          onClick={changeType}
          className={`${type === 'triangle' && 'active'}`}
        >
          triangle
        </button>
        <button
          id='square'
          onClick={changeType}
          className={`${type === 'square' && 'active'}`}
        >
          square
        </button>
        <button
          id='sawtooth'
          onClick={changeType}
          className={`${type === 'sawtooth' && 'active'}`}
        >
          sawtooth
        </button>
      </div>
    </div>
  );
};

export default Osc1;
