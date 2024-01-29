import './Footer.css';
import { FacebookLogo, InstagramLogo, TwitterLogo,  } from 'phosphor-react';
export default function Footer () {
    return(
        <div>
            <div className='footer'>
                <div className='one'>
                    <h1> Service</h1>
                    <h1>FAQs</h1>
                    <h1> Delivery</h1>
                </div>
                <div className='two'>
                    <h1>About us</h1>
                    <h1>Investors</h1>
                    <h1>Partners</h1>
                </div>
                <div>
                    <div className="first">
                        <h1>About LuxeLoom</h1>
                        <h1>Discount and membership</h1>
                        <h1>LuxeLoom membership</h1>
                    </div>
                    <div className="second">
                        <FacebookLogo className='fb' />
                        <InstagramLogo className='ins' />
                        <TwitterLogo className='twt'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
