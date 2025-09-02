import React, { useEffect, useState } from 'react';
import { FaTelegram } from 'react-icons/fa';
import { PropagateLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {loading ? (
        <PropagateLoader color='#be3d2cff' />
      ) : (
        <div className='text-center'>
          <h2 className='text-3xl font-semibold mb-4'>Order Was Successful!</h2>
          <p className='mb-4'>Your Order Has Been Successfully Placed</p>

          <a
            href="https://t.me/SWASTIK_tripathibot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-red-600 hover:underline mb-4"
          >
            <FaTelegram className="text-2xl" />
            <span className="font-medium">Know More About Your Order - Message Us</span>
          </a>

          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Return Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
