import React from 'react';
import { training } from '../data'

const Training = () => {
    return (
        <section className="part-cv">
            <div className="header-part">
                <div className="border-part"></div>
                <div className="name-part">TRAINING</div>
            </div>

            <div className="body-part">
                <div className="div-2">
                    <div className="div-point">
                    {
                        training[0].leftSide.map((item, index)=>{
                            return(
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
                            training[1].rightSide.map((item, index) => {
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

                        <div className="row-point">
                            <div className="point"></div>
                            <div className="body-point">
                                <div className="head-point">Small Programmer for ( Suzan
                                Mobarak ) in Scientific Research bulding, Egypt Nov2010 - Jan2011.</div>
                                <div className="cont-body">
                                    <li>I had The 1st place in the Participant, Project Title: World Zoo. {" "}
                                        <a href="https://github.com/YoussefRashad/SmallProgrammer" className="live-serverX" target="_blank" rel="noopener noreferrer">Link</a> {" "}
                                        <a href="https://w8lo30yocojzpufuji6lyg-on.drv.tw/SmallProgrammer/default.htm" className="live-serverX" target="_blank" rel="noopener noreferrer">Live Server</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Training;
