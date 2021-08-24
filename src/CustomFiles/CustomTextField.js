import React from 'react'
export default function CustomTextField({ name = '', label = '', value = '', onfocus = '', type = 'text', placeholder = '', handleChange = f => f }) {
    return (
        <div>
            <label>{label}</label>
            <textarea className="form-control"
            style={{
                backgroundColor: "#04162C",
                borderRadius: 19,
                color: 'white',
                width: "96%",
                alignContent: "center",
                borderColor: '#0b2e5c'}}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            ></textarea>
        </div>
            )

}