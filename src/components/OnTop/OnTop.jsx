import styled from './OnTop.module.scss'
import classNames from 'classnames/bind';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from 'react';


function OnTop() {

    const [showGoToTop, setShowGoToTop] = useState(false)
    const cx = classNames.bind(styled)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])

    return (  
        <div> {showGoToTop && (
            <button  onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});   }}  className={cx('gototop')}>
                <KeyboardArrowUpIcon/>
            </button>
        )}
        </div>
    );
}

export default OnTop;