import React from "react"
import "./ContactBar.css"

import address_icon from '../../../images/place-24px.png'
import email_icon from '../../../images/email-24px.png'
import phone_icon from '../../../images/call-24px.png'
import fb_icon from '../../../images/Path 20.png'

const ContactBar = ({datas}) => {


    return (
        <div className={'contactbar-wrapper'}>

            <a href={datas.adres[0].linkDoGoogleMaps} target={'_blank'} rel="noreferrer">
                <div className={'contactbar-section'} id={"contactbar-address"}>
                    <div id={"contactbar-address-img"}>
                        <img src={address_icon} className={'contactbar-icon'} alt={'addressicon_'+datas.identyfikator}/>
                    </div>
                    <div className={'contactbar-label'} id={"contactbar-address-content"} dangerouslySetInnerHTML={{__html: datas.adres[0].nazwaIAdresSzkoY}}>

                    </div>

                </div>
            </a>

            <a href={`mailto:${datas.email[0].adresEmail}`}>
                <div className={'contactbar-section'} id={'contactbar-email'}>
                    <div id={"contactbar-email-img"}>
                        <img src={email_icon} className={'contactbar-icon'} alt={"emailicon_"+datas.identyfikator}/>
                    </div>
                    <div className={'contactbar-label'}>{datas.email[0].wyWietlanyAdresEmail}</div>
                </div>
            </a>

            <div className={'contactbar-section'} id={'contactbar-phone'}>
                <div id={"contactbar-phone-img"}>
                    <img src={phone_icon} className={'contactbar-icon'} alt={"phoneicon_"+datas.identyfikator}/>
                </div>
                <div className={'contactbar-label'} dangerouslySetInnerHTML={{__html: datas.telefony[0].telefony}}></div>
            </div>

            <a href={datas.facebook[0].linkDoFacebooka} target={'_blank'} rel="noreferrer">
                <div className={'contactbar-section'} id={'contactbar-fb'}>
                    <div id={"contactbar-fb-img"}>
                        <img src={fb_icon} className={'contactbar-icon'} alt={"fbicon_"+datas.identyfikator}/>
                    </div>
                    <div className={'contactbar-label'}>{datas.facebook[0].wyWietlanaNazwa}</div>
                </div>
            </a>

        </div>
    )
}


export default ContactBar;