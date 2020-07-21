import React from 'react';
import MusicPlayer from 'react-responsive-music-player';

import './player.styles.scss';

const playlist = [
    {
        id: 1,
        url: 'https://www.last.fm/music/Lady+Gaga/_/911',
        cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/c10ddd30f511a41c1683ef5212e87992.webp#c10ddd30f511a41c1683ef5212e87992',
        title: '911',
        artist: [
          'Lady Gaga'
        ]
    },
    {
        id: 2,
        url: 'https://www.last.fm/music/Bad+Omens/_/Careful+What+You+Wish+For',
        cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/397deff0e78ebceb97b67b5cc55bfae9.webp#397deff0e78ebceb97b67b5cc55bfae9',
        title: 'Careful What You Wish For',
        artist: [
            'Bad Omens'
        ]
    },
    {
        id: 3,
        url: 'https://www.last.fm/music/The+Chicks/_/Gaslighter',
        cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/49e6300558608f6c2c6c773dd82e46ea.webp#49e6300558608f6c2c6c773dd82e46ea',
        title: 'Gaslighter',
        artist: [
            'The Chicks'
        ]
    },
    {
        id: 4,
        url: 'https://www.last.fm/music/Havok/_/Phantom+Force',
        cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/b627d1d934981b23482b3ba156756920.webp#b627d1d934981b23482b3ba156756920',
        title: 'Phantom Force',
        artist: [
            'Havok'
        ]
    },
    {
        id: 5,
        url: 'https://www.last.fm/music/Mac+Miller/_/2009',
        cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/f082f1074b9450b8a83781175df8df03.webp#f082f1074b9450b8a83781175df8df03',
        title: '2009',
        artist: [
            'Mac Miller'
        ]
    }
]

class Player extends React.Component {
    render() {
        return (
            <div className='player'>
                <MusicPlayer playlist={playlist} mode='vertical' />
            </div>
        )
    }
}

export default Player;