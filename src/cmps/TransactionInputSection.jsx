import React from 'react'

function TransactionInputSection({ ammount, cb, isDisabled = false }) {

    function handleChange(e) {
        const { value } = e.target;
        cb(value);
    }
    
    return (
        <div className="transaction-input-section flex row center">
            <input type="text" onChange={(e) => { handleChange(e) }} disabled={isDisabled} value={ammount} />
        </div>
    )
}

export default TransactionInputSection
