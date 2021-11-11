import React from 'react'
export default function CustomButton({ type = 'text', className = '', disabled, btnText = 'click', handleSubmit = f => f }) {
    return (
        <div>
            <button
                style={{ borderRadius: 20 }}
                className={className}
                type={type}
                disabled={disabled}
                onClick={handleSubmit}
            >
                {btnText}
            </button>
        </div>
    )
}