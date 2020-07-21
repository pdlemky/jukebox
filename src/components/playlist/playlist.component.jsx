import React from 'react';

import './playlist.styles.scss';
import PlaylistItem from '../playlist-item/playlist-item.component';

class Playlist extends React.Component {
    constructor() {
        super();

        this.state = {
            playlist: [
                {
                    id: 1,
                    url: 'https://www.last.fm/music/Lady+Gaga/_/911',
                    cover: 'https://lastfm.freetls.fastly.net/i/u/avatar70s/c10ddd30f511a41c1683ef5212e87992.webp',
                    title: '911',
                    artist: [
                      'Lady Gaga'
                    ]
                },
                {
                    id: 2,
                    url: 'https://www.last.fm/music/Bad+Omens/_/Careful+What+You+Wish+For',
                    cover: 'https://lastfm.freetls.fastly.net/i/u/avatar70s/befacb539dc0dfe9213c2662a2a7c1a8.webp',
                    title: 'Careful What You Wish For',
                    artist: [
                        'Bad Omens'
                    ]
                },
                {
                    id: 3,
                    url: 'https://www.last.fm/music/The+Chicks/_/Gaslighter',
                    cover: 'https://lastfm.freetls.fastly.net/i/u/avatar70s/106686fe9870faffbb61e9897626e68a.webp',
                    title: 'Gaslighter',
                    artist: [
                        'The Chicks'
                    ]
                },
                {
                    id: 4,
                    url: 'https://www.last.fm/music/Havok/_/Phantom+Force',
                    cover: 'https://lastfm.freetls.fastly.net/i/u/avatar70s/ff48f4f203dd26dfd029f73aad126314.webp',
                    title: 'Phantom Force',
                    artist: [
                        'Havok'
                    ]
                },
                {
                    id: 5,
                    url: 'https://www.last.fm/music/Mac+Miller/_/2009',
                    cover: 'https://lastfm.freetls.fastly.net/i/u/avatar70s/f082f1074b9450b8a83781175df8df03.webp',
                    title: '2009',
                    artist: [
                        'Mac Miller'
                    ]
                }
            ]
        }
    }

    render () {
        return (
            <div className='playlist'>
                <ul>
                    {this.state.playlist.map(({id, ...otherPlaylistProps}) => (
                        <PlaylistItem key={id} {...otherPlaylistProps} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Playlist;