import React from 'react';

const EqualCard = ({cards}) => {
    return (
        <div className='cards-curt'>
            {
                cards.map((el, index) => <div key={index} className='card-curt' ></div>)
            }
        </div>
    );
};

export default EqualCard;