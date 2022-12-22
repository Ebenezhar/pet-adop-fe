import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { AiOutlineArrowRight, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { CiTwitter } from 'react-icons/ci';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
    let handlePage = (type) => {
        navigate(`/adoptgive/${type}`);
    }
    return (
        <div style={{ backgroundColor: "#131313", color: "white" }} className="d-flex flex-column px-5 py-4 justify-content-around">
            <div className="row justify-content-around">
                <div className='col-lg-4 col-sm-12 p-5'>
                    <div className='d-flex flex-row p-2 m-2'>
                        <Player
                            className='player'
                            background="transparent"
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_32v7KqVd8G.json"
                            style={{ height: '25px', width: '25px', background: 'transperant' }}
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                        <h5 className='m-1'>ANIMAL SHELTER</h5>
                    </div>
                    <p style={{ color: '#9CA3AF' }} className='fs-6 p-2'>One of the best animal shelter places in India. We’re recognized by the government. Please take a pledge to take care of these lovely pets !</p>
                    <button onClick={() => handlePage('adopt')} className='btn btn-light border border-dark p-2' style={{ backgroundColor: "#FF6584", color: 'white' }} >Adopt <AiOutlineArrowRight /></button>
                </div>
                <div className='col-lg-4 col-sm-12 p-5'>
                    <h6 className='m-2 p-2'>GET IN TOUCH</h6>
                    <div className='d-flex flex-row p-2 m-2'>
                        <h4 className='m-2'><GoLocation /></h4>
                        <p style={{ 'font-size': '14px', color: '#9CA3AF' }}>llesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie woiwemfwokm fwe w ecen cloenwo we - 355233</p>
                    </div>
                    <div className='d-flex flex-row p-2 m-2'>
                        <h4 className='mx-2'><AiOutlineMail /></h4>
                        <p className='m-1' style={{ 'font-size': '14px', color: '#9CA3AF' }}>cisubdcusb@gmail.com</p>
                    </div>
                    <h6 className='m-2 p-2'>FOLLOW US</h6>
                    <div className='d-flex m-3'>
                        <h4 ><CiTwitter /></h4>
                        <h4 className='mx-5'><BsFacebook /></h4>
                        <h4 ><BsLinkedin /></h4>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-12 p-5'>
                    <h6 className='m-2 p-2'>Quick Links</h6>
                    <div className='m-2'>
                        <p className='m-2' style={{ 'font-size': '13px', color: '#9CA3AF' }}>Home</p>
                        <p className='m-2' style={{ 'font-size': '13px', color: '#9CA3AF' }}>Contact Us</p>
                    </div>
                </div>
            </div>
            <footer className='row border-top py-3'>
                <div style={{ 'font-size': '14px', color: '#9CA3AF' }} className='col-lg-8 col-sm-12'>
                    Copyright ©2023. Animal Shelter
                </div>
                <div style={{ 'font-size': '14px', color: '#D1D5DB' }} className=' d-flex justify-content-around col-lg-4'>
                    <p><u>Privacy Policy</u></p>
                    <p><u>Terms of Service</u></p>
                    <p><u>Cookies Settings</u></p>
                </div>
            </footer>
        </div>
    )
}

export default ContactUs