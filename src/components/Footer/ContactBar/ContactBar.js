import React from "react"
import "./ContactBar.css"

import address_icon from '../../../images/place-24px.png'
import email_icon from '../../../images/email-24px.png'
import phone_icon from '../../../images/call-24px.png'
import fb_icon from '../../../images/Path 20.png'

const ContactBar = (props) => {

    const datas = props.datas;
    return (
        <div className={'contactbar-wrapper'}>

            <a href={datas.address.web} target={'_blank'} rel="noreferrer">
                <div className={'contactbar-section'} id={"contactbar-address"}>
                    <div id={"contactbar-address-img"}>
                        <img src={address_icon} className={'contactbar-icon'} alt={'addressicon_'+datas.fb.label}/>
                    </div>
                    <div className={'contactbar-label'} id={"contactbar-address-content"}>
                        {datas.address.label}
                    </div>

                </div>
            </a>

            <a href={`mailto:${datas.email}`}>
                <div className={'contactbar-section'} id={'contactbar-email'}>
                    <div id={"contactbar-email-img"}>
                        <img src={email_icon} className={'contactbar-icon'} alt={"emailicon_"+datas.fb.label}/>
                    </div>
                    <div className={'contactbar-label'}>{datas.email}</div>
                </div>
            </a>

            <div className={'contactbar-section'} id={'contactbar-phone'}>
                <div id={"contactbar-phone-img"}>
                    <img src={phone_icon} className={'contactbar-icon'} alt={"phoneicon_"+datas.fb.label}/>
                </div>
                <div className={'contactbar-label'}>{datas.phone}</div>
            </div>

            <a href={datas.fb.web} target={'_blank'} rel="noreferrer">
                <div className={'contactbar-section'} id={'contactbar-fb'}>
                    <div id={"contactbar-fb-img"}>
                        <img src={fb_icon} className={'contactbar-icon'} alt={"fbicon_"+datas.fb.label}/>
                    </div>
                    <div className={'contactbar-label'}>{datas.fb.label}</div>
                </div>
            </a>

        </div>
    )
}


export default ContactBar;