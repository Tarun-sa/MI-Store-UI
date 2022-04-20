import React from 'react';
import '../styles/preFooter.css';
import '../styles/footer.css';


const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><g><path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z M20,13c0-4.42-3.58-8-8-8c-0.06,0-0.12,0.01-0.18,0.01l1.09-1.09L11.5,2.5L8,6l3.5,3.5l1.41-1.41 l-1.08-1.08C11.89,7.01,11.95,7,12,7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02C16.95,20.44,20,17.08,20,13z" /></g></g></svg>;
const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" /></svg>;
const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>;


const Footer = ({ footer }) => {
    return (

        <>
            <div className='preFooter'>
                <div>
                    {repeatIcon}
                    <p><b>Hassle-free replacement</b> <br />10 days easy replacement policy on mi.com</p>
                </div>
                <div>
                    {shieldIcon}
                    <p><b>100% secure payments</b> <br />We support cards,EMI,Wallets,COD</p>
                </div>
                <div>
                    {mapIcon}
                    <p><b>Vast Service Network</b> <br />1000 Mi store across 600 cities</p>
                </div>
            </div>


            <div className='preFooter2'>
                <div>
                    <p>LET'S STAY IN TOUCH</p>
                    <span>Get updates on sales and more</span>
                </div>

                <div>
                    <div>
                        <input type="text" />
                        <button>/</button>
                    </div>
                </div>
                <div>
                    <p>FOLLOW MI </p>
                    <span>We want to hear from you!</span>
                </div>
                <div>
                    f youtube twiiter insta
                </div>

            </div>
            <div className='footer'>
                <div>
                    <p>SUPPORT</p>
                    {
                        footer.support.map((item, index) => {
                            return (<a key={index} href={item.url}>{item.name}</a>)
                        })
                    }
                </div>
                <div>
                    <p>SHOP AND LEARN</p>
                    {
                        footer.shopAndLearn.map((item, index) => {
                            return (<a key={index} href={item.url}>{item.name}</a>)
                        })
                    }
                </div>
                <div>
                    <p>RETAIL STORE</p>
                    {
                        footer.retailStore.map((item, index) => {
                            return (<a key={index} href={item.url}>{item.name}</a>)
                        })
                    }
                </div>
                <div>
                    <p>ABOUT US</p>
                    {
                        footer.aboutUS.map((item, index) => {
                            return <a key={index} href={item.url}>{item.name}</a>
                        })
                    }
                </div>
                <div>
                    <p>CONTACT US</p>
                    {
                        footer.contactUs.map((item, index) => {
                            return <a key={index} href={item.url}>{item.name}</a>
                        })
                    }
                </div>
                <div>

                    <div>Chat with our Virtual AI Bot
                        (24/7 Live Agent Support)</div>
                    <button>CHAT NOW</button></div>
            </div>
            <div className='footerBorder'>
                <div>Copyright © 2010 - 2022 Xiaomi. All Rights Reserved</div>
            </div>
        </>
    )
};

export default Footer;
