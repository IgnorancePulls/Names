import React from 'react';

const HeaderComponent = ({getUsers}) => {

    return (
        <div>
            <p>header component</p>
            <button
                onClick={() => getUsers()}
            >Get</button>
        </div>
    )
};

export default HeaderComponent;