import React, { useEffect, useState } from 'react';


const CustomAlert = ({ message, onClose }) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true); 

        const timer = setTimeout(() => {
            setVisible(false);
            onClose(); 
        }, 3000); 

        return () => clearTimeout(timer); 
    }, [onClose]);
    return (
        
        <div style={{
            position: 'fixed',
            top: '4rem',
            right: '1rem',
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '5px 20px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            fontSize: '17px',
            display: 'flex',
            gap: '0.7rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: visible ? 1 : 0, 
            transform: visible ? 'translateX(0)' : 'translateX(100%)', 
            transition: 'opacity 0.5s ease, transform 0.5s ease', 

        }}>
            <span>{message}</span>
            <button
                onClick={onClose}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '26px',
                    cursor: 'pointer',
                    paddingBottom: '5px'
                }}>
                &times;
            </button>
        </div>
    );
};

export default CustomAlert;
