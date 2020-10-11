import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import ShowAchievements from './ShowAchievements';


import { dataAchievement } from '../../data'

const Achievement = ()=> {
    const [initialShow, setInitialShow] = useState([true, false, false])
    const [style, setStyle] = useState(['page-item active', 'page-item', 'page-item'])
    const tabs = ['All', 'Honors', 'Certification']

    const selectTypeOfAchievement = (index) => {
        const styleVar = ['page-item', 'page-item', 'page-item'];
        const initialShowVar = [false, false, false];

        styleVar[index] = 'page-item active';
        initialShowVar[index] = true;

        setInitialShow(initialShowVar)
        setStyle(styleVar)
    };

    return (
        <div className="container-fluid">

            <div className="container">
                <h1 className="display-5 d-flex justify-content-center" style={{margin: '4rem 2rem 0.5rem 2rem'}}>
                    My Achievements
                </h1>
                <div className="lead d-flex justify-content-center">
                    <ul className="pagination pagination-lg m-4">
                        <Pagination tabs={tabs} style={style} selectTypeOfTabs={selectTypeOfAchievement} />
                    </ul>
                </div>
            </div>
            
            <div>
                {
                    initialShow[0] ? 
                    <ShowAchievements achievements={dataAchievement[0].honors.concat(dataAchievement[1].certifications)} />
                    : initialShow[1] ?<ShowAchievements achievements={dataAchievement[0].honors} />
                    : <ShowAchievements achievements={dataAchievement[1].certifications} />
                }
            </div>

        </div>
    );
}

export default Achievement;
