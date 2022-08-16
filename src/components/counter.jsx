import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
const Counter = () => {
  return (
    <div className='Counter'>
      {/* <CountUp end={100} duration={5}  /> */}
        <div className="counter_blocks">
            <div className="card">
                <span><CountUp end={100} duration={5}  />+</span>
                <p>Anos de experiência</p>
            </div>
            <div className="card">
                <span><CountUp end={4000} duration={5}  />+</span>
                <p>Clientes ativos</p>
            </div>
            <div className="card">
                <span><CountUp end={400} duration={5}  />+</span>
                <p>Colaboradores</p>
            </div>
            <div className="card">
                <span><CountUp end={1000} duration={5}  />+</span>
                <p>de árvores preservadas</p>
            </div>
        </div>
    </div>
  );
};

export default Counter;