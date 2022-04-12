import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import "./ContentModal.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "80%",
    bgcolor: 'rgb(2,0,36) ',
    borderRadius: 8.2,
    border: '2px #83a8d7',
    boxShadow: 24,
    color: "#fff",
    p: 4,
};

export default function ContentModal({ children, id, movie_banner }) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchData = async () => {
        const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
        setContent(data)
        console.log(data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div onClick={handleOpen}
                style={{ cursor: "pointer" }}
                color="inherit" className='media'>
                {children}
                
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {content && (
                        <Box sx={style}>
                            <div className='ContentModal'>

                                <img className='Content_landscape' src={content.movie_banner} alt='unavailable' />
                                <img className='Content_portrait' src={content.movie_banner} alt='unavailable' />


                                <div className='ContentModal_about'>
                                    <span className='ContentModal_title'>{content.title} ({(
                                        content.release_date
                                    )})
                                    </span>
                                    <div className='japanese_title'>{content.original_title}({(
                                        content.original_title_romanised
                                    )})</div>
                                    <div className="director">Director: {content.director}</div>
                                    <div className="director">Producer: {content.producer}</div>
                                    <div className='date_time'>
                                        <p ><b>Year</b> : {content.release_date}</p>
                                        <p ><b>Duration </b>: {content.running_time}</p>
                                        <p ><b>Rating </b>: {content.rt_score}</p>
                                    </div>
                                    <div className='ContentModal_description'>{content.description}</div>

                                    <button className="button-64" role="button"><span className="text">Watch Trailer</span></button>
                                </div>
                            </div>
                        </Box>
                    )}
                </Fade>
            </Modal>
        </>
    );
}
