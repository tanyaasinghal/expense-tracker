import { useEffect} from 'react';
import React from 'react';
import'./orb.css';
import { useWindowSize } from '../../utils/useWindowSize';

const Orb = () => {
    const { width, height } = useWindowSize();


    useEffect(() => {
        document.documentElement.style.setProperty('--width', `${width}px`);
        document.documentElement.style.setProperty('--height', `${height}px`);

        return () => {
            document.documentElement.style.removeProperty('--width');
            document.documentElement.style.removeProperty('--height');
        }
    }, [width, height]);
    return(
        
<div className='orbStyled'>
</div>
    )
}
export default Orb;