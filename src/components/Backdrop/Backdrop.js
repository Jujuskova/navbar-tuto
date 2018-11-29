import React from 'react';

import './Backdrop.css';

const Backdrop = props => (
<div className="backDrop" onClick={props.clickBackdrop}/>
);

export default Backdrop;