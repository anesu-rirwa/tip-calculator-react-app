import React from 'react';

function Tip(props) {
    const handleTips = (event) => {
        props.setTip(event.target.value);
    }

    const handleCustomTip = (event) => {
        props.setCustom(event.target.value);
    }
    
    return (
        <React.Fragment>
            <label className='names'>Select Tip %</label>
            <div className='tip'>
                <button value={0.05} onClick={handleTips} className='btn btn-tip'>5%</button>
                <button value={0.10} onClick={handleTips} className='btn btn-tip'>10%</button>
                <button value={0.15} onClick={handleTips} className='btn btn-tip'>15%</button>
                <button value={0.25} onClick={handleTips} className='btn btn-tip'>25%</button>
                <button value={0.50} onClick={handleTips} className='btn btn-tip'>50%</button>
                <input onChange={handleCustomTip} type="text" placeholder="Custom" value={props.custom} className='input-tip' />
            </div>
        </React.Fragment>
    );
}

export default Tip;