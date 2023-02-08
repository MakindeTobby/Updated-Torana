import React from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import useGlobalContext from '../../hooks/useGlobalContext';

const VideoPopup = ({ videoId }) => {
    const popupValue = useGlobalContext();
    const { isOpen, setIsOpen } = popupValue
    return (
        <>
            <ModalVideo channel='custom' url='https://toranacareaustralia.org.au/wp-content/uploads/2020/08/About-Torana-Care-Australia.mp4' autoplay isOpen={isOpen}
                onClose={() => setIsOpen(false)} />
        </>
    );
};

export default VideoPopup;