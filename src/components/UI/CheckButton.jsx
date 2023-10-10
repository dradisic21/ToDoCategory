import React from 'react';
import "../../styles/CheckButton.scss"

export function CheckButton({ index, checked, onChange }) {
    return (
        <div className="check-list">
            <div className="toggle-border">
                <input
                    id={index}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <label htmlFor={index}>
                    <div className="handle"></div>
                </label>
            </div>
        </div>
    );
}
