// components/ui/modals.jsx
import { createPortal } from "react-dom"

export function Modal ({children, onClose}) {
    return createPortal (
        <div 
            className="fixed inset-0 bg-black flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="relative w-full h-full max-w-[78vw] max-h-[88vh] bg-black"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className="absolute top -1 right-1 text-white hover:text-red-500 bg-black bg-opacity-70 rounded-full w-14 h-14 flex items-center justify-center z-10 transition-all border-2 border-white"
                    onClick={onClose}
                >
                    ✖
                </button>
                <div className="w-full h-full flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )
}