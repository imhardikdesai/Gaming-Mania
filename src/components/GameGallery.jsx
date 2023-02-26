import React from 'react'
import { GameCard } from './index'
import ApiData from '../data/ApiData'

const GameGallery = () => {
    return (
        <div className='d-flex flex-wrap gap-3 align-items-center justify-content-center'>
            {
                ApiData.map((item, index) => {
                    if (index === 0) {
                        return false;
                    }
                    return <GameCard {...item}/>;
                })
            }

        </div>
    )
}

export default GameGallery