import React from 'react';
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify';
import { copyToClipboard } from '../utils/clipboard';

interface CopyButtonProps {
  copyText: string;
  buttonText?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ 
  copyText, 
  buttonText = "복사하기" 
}) => {
  const handleCopyClick = async (e: React.MouseEvent, text: string) => {
    const success = await copyToClipboard(text);
    
    if (success) {
      toast.success('클립보드에 복사되었습니다.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('복사하기를 실패했습니다.', {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <button
      onClick={(e) => handleCopyClick(e, copyText)}
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
    >
      <Copy size={18} />
      {buttonText}
    </button>
  );
};