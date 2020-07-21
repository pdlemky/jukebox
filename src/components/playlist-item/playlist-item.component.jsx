import React from 'react';

import './playlist-item.styles.scss';

const PlaylistItem = ({cover, title, artist}) => (
    <li className='playlist-item'>
        <div className='playlist-item-cover'><img alt='' src={cover} /></div>
        <div className='playlist-item-details'>
            <span className='playlist-item-title'>{title}</span>
            <span className='playlist-item-artist'>{artist}</span>
        </div>
    </li>
)

export default PlaylistItem;