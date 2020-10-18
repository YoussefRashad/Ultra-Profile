import React from 'react';
import { volunteeringWork } from '../data'

const Volunteering = () => {
    return (
        <section className="part-cv">
            <div className="header-part">
                <div className="border-part"></div>
                <div className="name-part">VOLUNTEERING WORK</div>
            </div>

            <div className="body-part">
                <div className="div-2">
                    <div className="div-point">
                        {
                            volunteeringWork[0].leftSide.map((item, index) => {
                                return (
                                    <div className="row-point" key={index}>
                                        <div className="point"></div>
                                        <div className="body-point">
                                            <div className="head-point">
                                                {item}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="div-2">
                    <div className="div-point">
                        {
                            volunteeringWork[1].rightSide.map((item, index) => {
                                return (
                                    <div className="row-point" key={index}>
                                        <div className="point"></div>
                                        <div className="body-point">
                                            <div className="head-point">
                                                {item}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Volunteering;
