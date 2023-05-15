import _ from 'lodash';
import React from 'react';

function WhatWeDoSection() {
    const CardContent = [
        { id: 1, image: require('../assets/backupIMage.png'), para: "Our goal is to propel your to business forward...", button: "Read more +", heading: "Backup & Recovery" },
        { id: 2, image: require('../assets/VoIpImage.png'), para: "Our goal is to propel your to business forward...", button: "Read more +", heading: "VoIP Solutions" },
        { id: 3, image: require('../assets/planningImage.png'), para: "Our goal is to propel your to business forward...", button: "Read more +", heading: "Consulting Planning" },
        { id: 4, image: require('../assets/itconsultency.png'), para: "Our goal is to propel your to business forward...", button: "Read more +", heading: "IT Consultency" },
    ]
    return (
        <div className='whatWe_doMain_class'>
            <div>
                <h3>What We Do</h3>
                <h2>We Run all kinds of Service <br /> that your Success</h2>
            </div>
            <div className='card'>
                {_.map(CardContent, ({ id, image, button, heading, para }) => (
                    <div className="grid-item" >
                        <div className="grid-item-inner">
                            <div className="item--featured">
                                <a href="https://demo.casethemes.net/itfirm/service/backup-recovery/">
                                    <img className="no-lazyload " src={image} width="220" height="220" alt="service7" title="service7" />
                                </a>
                                <div className="item--icon">
                                    <i className="flaticon-data-network"></i>
                                </div>
                            </div>
                            <div className="item--holder">
                                <h3 className="item--title">
                                    <a href="https://demo.casethemes.net/itfirm/service/backup-recovery/">{heading}</a>
                                </h3>
                                <div className="item--content">{para}</div>
                                <div className="item-readmore">
                                    <a className="btn btn-dark1" href="https://demo.casethemes.net/itfirm/service/backup-recovery/">Read more<i className="ct-icon-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>



                    // <div className='cardContainer' key={id}>
                    //     <div className='imageSection'>
                    //         <img src={image} />
                    //         <div className='icon'>
                    //             circle
                    //         </div>
                    //     </div>
                    //     <div className='cardContent'>
                    //         <h3>{heading}</h3>
                    //         <p>{para}</p>
                    //         <button>{button}</button>
                    //     </div>
                    // </div>
                ))}
            </div>
            <div>
                <button>More Service +</button>
            </div>
        </div>
    )
}

export default WhatWeDoSection;