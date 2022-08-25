import React from 'react';


const Counter = () => {
   

    return (
        <div className="m-5 text-center">
            <h1>Counter:  0</h1>

            <div className="m-5 d-flex justify-content-evenly align-items-center">
                <button className="btn btn-primary mt-2">-1</button>
                <input className="form-control w-25" type="number" name="numero"  placeholder="Valor" />
                <button className="btn btn-primary mt-2">+1</button>
            </div>

            <div className="mt-3">
                <button className="btn btn-info">Reset</button>
            </div>

        </div>
    );
};

export default Counter;