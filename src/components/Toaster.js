// components/Toaster.js
import React from 'react';

export const ToasterContext = React.createContext({
    addToast: () => {}
});

export const ToasterProvider = ({ children }) => {
    const [toasts, setToasts] = React.useState([]);

    const addToast = message => {
        const id = new Date().getTime();
        setToasts([...toasts, { id, message }]);
        setTimeout(() => {
            setToasts(toasts => toasts.filter(toast => toast.id !== id));
        }, 2000);
    };

    return (
        <ToasterContext.Provider value={{ addToast }}>
            <div aria-live="polite" aria-atomic="true" style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
                {toasts.map(toast => (
                    <div key={toast.id} style={{ background: 'green', color: 'white', padding: '10px', marginBottom: '5px' }}>
                        {toast.message}
                    </div>
                ))}
            </div>
            {children}
        </ToasterContext.Provider>
    );
};
