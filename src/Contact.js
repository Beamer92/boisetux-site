import React from 'react'
import myData from './data/main.json'
import {Link} from 'react-router-dom'


export default function Contact(props){

    let contact = myData.contact

    return (
        <div>
            <div className='container-fluid home'>
            <Link to='/' className='link'>&#8592; Back to Home</Link>
                <div className='row contact'>
                        <img src={'/imgs/TuxShopLogo.png'} alt='Boise Tuxedo Shop logo' className='contact-logo'/>
                        <h2 className='title'>Boise Tuxedo Shop - Contact Us</h2>
                        {contact.about.map((x, ind)=> <p className='about' key={'con' + ind}>{x}</p>)}
                        <p className='visit'>{`Come visit us at ${contact.contactInfo.address}!`}</p>
                        <iframe title={"Find Us"} className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.745179848096!2d-116.37944692701844!3d43.62005262686805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae5474e3e6a035%3A0xd200c4620b0eac3!2s1270+E+Fairview+Ave+%23120%2C+Meridian%2C+ID+83642!5e0!3m2!1sen!2sus!4v1553032102065"></iframe>
                        <p className='visit'>{`Give us a call at ${contact.contactInfo.phone}`}</p>
                        <p className='visit'>{`Or send us an email at ${contact.contactInfo.email}`}</p>
                </div>
            </div>
        </div>
    )
}