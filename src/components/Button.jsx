import React from "react"

function Button() {
    return (
        <>
            <button className='productButton bg-cyan-600 rounded-lg p-2 text-white hover:bg-cyan-800'
                onClick={() => navigate('product')}>
                Button
            </button>
        </>
    )
}

export default Button