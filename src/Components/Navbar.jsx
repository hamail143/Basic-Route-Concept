/* eslint-disable no-unused-vars */
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <div className="main">
    <div className="inner-main">
        
        <div className="hero-section">
            
            <div className="hero-content">
                <p className="text1-S1">
                    Ledger Nano X
                </p>
                <p className="text2-S1">
                    SECURELY START YOUR CRYPTO JOURNEY.
                </p>
                <p className="text3-S1">
                    Secure, grow your crypto and manage your NFTs with our new Bluetooth-enabled hardware wallet.
                </p>
                <div className="btn-hero">
                    <p className="btn-text-s1">
                        Buy now
                    </p>
                </div>
            </div>
        </div>

        <div className="section-2">
            <div className="uppar-s2-content">
                <p className="t1-s2">
                    Why security matters
                </p>
                <p className="t2-s2">
                    Some people find it difficult to justify spending extra money they could be investing in cryptocurrencies. Here’s the reasoning behind our product. 
                </p>
            </div>
            <div className="video-container">
                <iframe
                    width="1200"
                    height="650"
                    src="https://www.youtube.com/embed/fTMqFkOIbQc?si=PMUq9wJJmRN2CVXo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="lower-vid-section">
                <p className="text1-lower-vid">
                    <u>Security in Crypto</u>
                </p>
                <p className="text2-lower-vid">
                    On the Ledger Nano X
                </p>
            </div>
        </div>

        <div className="bitcoin-section">
            <div className="texts-div-bitcoin">
                <p className="text1-bit">
                    Introducing the Leger Nano X
                </p>
                <p className="text2-bit">
                    Combine the Ledger Nano X cold wallet with the Ledger Live app for maximum security & control over your digital assets. The Ledger Nano X keeps your coins and NFTs offline & protected.
                </p>
            </div>
            <img src="images/Nano X Interface 1.svg" alt="" />
        </div>

        <div className="Industry-section">
            <div className="texts-Ind">
                <p className="text1-ind">Industry-leading security</p>
                <p className="text2-ind">
                    When you own crypto, what you really own is a private key that gives you access to your coins. You need to keep this key completely safe. Ledger wallets are the best way to own and secure this key.
                </p>
            </div>
            <div className="whiteline"></div>
            <div className="plusandtext">
                <p className="bodytext">Body</p>
                <img src="images/cil_x-circle.svg" alt="" />
            </div>
            <div className="whiteline2"></div>
            <div className="plusandtext">
                <p className="bodytext">Screens</p>
                <img src="images/cil_x-circle.svg" alt="" />
            </div>
            <div className="whiteline2"></div>
            <div className="plusandtext">
                <p className="bodytext">2 Buttons</p>
                <img src="images/cil_x-circle.svg" alt="" />
            </div>
            <div className="whiteline2"></div>
            <div className="plusandtext">
                <p className="bodytext">BOLOS</p>
                <img src="images/cil_x-circle (1).svg" alt="" />
            </div>
            <div className="hidden-content_ind">
                <p className="text1-hidden">
                    Homemade operating system created to make the Ledger experience as pleasant and secure as possible.
                </p>
                <img src="images/Battery.svg" alt="" />
            </div>
            <div className="whiteline2"></div>
            <div className="plusandtext">
                <p className="bodytext">CC EAL5+</p>
                <img src="images/cil_x-circle.svg" alt="" />
            </div>
            <div className="whiteline2"></div>
        </div>

        <div className="laptop-section">
            <p className="text1-lapi">We tried our best to create a beautiful, user friendly interface.</p>
            <img src="images/Using Ledger Nano X 1.svg" alt="" />
        </div>

        <div className="live-section"></div>
    </div>
</div>

                
      
    </>
  )
};

export default Layout;




{/* <nav>
        <ul>
         
         
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav> */}