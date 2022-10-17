import React from 'react';
import './ideas.css';
const Ideas = (props) =>{
    return (
        <div className='ideas'>
            <div className='ideasImgBox'>
            <img src="https://img.freepik.com/free-photo/fruit-cake-with-chocolate-chips-blueberries_176474-2965.jpg?w=740&t=st=1665647270~exp=1665647870~hmac=1c58534c32646b03b35f53dae140c181b4efc95683fe8c18eebf95c6803f0813" alt='ideas' className='ideasImg' />
            </div>
            <div className='ideasText'>
                <h3>Wedding Cakes</h3>
            </div>
        </div>
    );
}

export default Ideas;