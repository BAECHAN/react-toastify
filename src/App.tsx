import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CopyButton } from './components/CopyButton';

function App() {
  const textToCopy = "안녕하세요! 이 텍스트가 복사됩니다.";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
        <p className="text-gray-600 mb-4">{textToCopy}</p>
        <CopyButton copyText={textToCopy} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;