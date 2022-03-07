import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  function Toast(){
    const notify = () => toast("Your account has been creat!");

    return (
      <div>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        {/* <button onClick={notify}>Notify!</button> */}
        
      </div>
    );
  }

  export default Toast;