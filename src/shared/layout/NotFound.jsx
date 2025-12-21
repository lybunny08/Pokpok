import React from 'react';
import ButtonComponents from '../../LandingPages/components/ui/ButtonComponents'

function NotFound() {
    return (
        <div className='flex flex-col justify-center item-center gap-[32px] pt-[200px] '>
            <span>Oops! You're lost.</span>
            <span>The page you are looking for was not found or relocated.</span>
            <ButtonComponents>Return Home</ButtonComponents>
        </div>
    );
}

export default NotFound;