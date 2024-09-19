import React from 'react';

function Button({ buttonName, changeName }) {
    return (
        <>
            <button type="button" onClick={changeName}>{buttonName}</button>
        </>
    );
}

export default Button;