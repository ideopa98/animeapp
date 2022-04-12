
import { Badge } from '@mui/material'
import React from 'react'
import "./SinglePage.css"
import ContentModal from './ContentModal'

const SinglePage = ({
    thumbnail,
    title,
    rating,
    duration,
    releasedate,
    id
}) => {
    return (

        <ContentModal id={id} className='media'>
            <Badge badgeContent={rating} color={rating > 80 ? 'primary' : 'secondary'} />
            <img className='poster' src={thumbnail} alt="unavailable" />
            <b className='title'>{title}</b>
            <p className='subTitle'>{duration} mins ({releasedate})</p>
        </ContentModal>

    )
}

export default SinglePage
