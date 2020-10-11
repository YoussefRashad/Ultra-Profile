import React, { useState } from 'react';
import CaroserInner from './caroserInner';
import { dataCarosuelShowList } from '../../data'

const CarosuelShowList = () => {
    const [mouseEnter, setMouseEnter] = useState(false)

    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide container w-55 pb-5"
            data-ride="carousel"
            
        >

            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                />
                {
                    [...Array(7)].map((item, index)=> <li data-target="#carouselExampleIndicators" data-slide-to={index.toString()} key={index} />)
                }
            </ol>
            
            <div 
                className="carousel-inner"
                onMouseEnter={()=> setMouseEnter(true)}
                onMouseLeave={()=> setMouseEnter(false)}
            >
                {
                    dataCarosuelShowList.map((item, index)=> <CaroserInner 
                    {...item} key={index} ID={index} mouseEnter={mouseEnter} />)
                }
            </div>
            
            <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>

            <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>

        </div>
    );
}

export default CarosuelShowList;
