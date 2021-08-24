import React from 'react'
export default function CustomInput({ name = '', label = '', value = '', onfocus='', type = 'text', placeholder = '', handleChange = f => f }) {
    return (
        <div>
            <label>{label}</label>
            <input
            style={{
                backgroundColor: "#04162C",
                borderRadius: 19,
                color: 'white',
                width: "96%",
                alignContent: "center",
                borderColor: '#0b2e5c'}}
                className="form-control"
                onFocus={onfocus}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )

}