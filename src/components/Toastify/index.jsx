import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Toast = () => {
    return (
        <div>
             <ToastContainer 
                autoClose={2000}
                position="top-left"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </div>
    )
}