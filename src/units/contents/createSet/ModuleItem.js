import React from 'react';
import move from '../../../assests/images/move.png';
import move2x from '../../../assests/images/move@2x.png';
import move3x from '../../../assests/images/move@3x.png';
import readables from '../../../assests/images/readables.png';
import readables2x from '../../../assests/images/readables@2x.png';
import readables3x from '../../../assests/images/readables@3x.png';
import remove from '../../../assests/images/remove.png';
import remove2x from '../../../assests/images/remove@2x.png';
import remove3x from '../../../assests/images/remove@3x.png';
import video from '../../../assests/images/video.png';
import video2x from '../../../assests/images/video@2x.png';
import video3x from '../../../assests/images/video@3x.png';
import './ContentCreateSet.css';

const ModuleItem = (props) => {
    return (
        <span className='topic-row'>
            <span className='topic-display'>
                <img src={move} srcSet={`${move2x} 2x, ${move3x} 3x`} alt="move" className="move" />
                <span className='topic-name'> {props.idx}. {props.topicName}</span>
                {props.type == "video" ?
                    <img src={video} srcSet={`${video2x} 2x, ${video3x} 3x`} alt="video" className="video" />
                    :
                    <img src={readables} srcSet={`${readables2x} 2x, ${readables3x} 3x`} alt="Readables" className="video" />
                }
                <span className='topic-duration'> {props.duration} </span>
            </span>
            <img src={remove} srcSet={`${remove2x} 2x, ${remove3x} 3x`} alt="video" className="remove" onClick={() => props.removeTopic(props.index)} />
        </span>
    );
};
export default ModuleItem;