import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonComponents from '../../LandingPages/components/ui/ButtonComponents';

function NotFound() {
    const navigate = useNavigate();
    
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className='flex flex-col justify-center items-center gap-[8px] pt-[150px] '>
            <span className='text-[40px] font-medium '>Oops! You're lost.</span>
            <span>The page you are looking for was not found or relocated.</span>
            <ButtonComponents 
                className='mt-4' 
                textColor='black' 
                borderColor='black' 
                text="Return Home"
                onClick={handleGoHome}
            />
        </div>
    );
}

export default NotFound;