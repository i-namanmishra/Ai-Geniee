import { CardCarousel } from "./card"
import { SideBar } from "./sideBar"
import { useContext, useState, useRef, useEffect } from "react"
import { Context } from "../context/context"
import { VoiceSearch } from "../context/voice"
import { FaCopy } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
export const MainPage = () => {
    const { loginWithRedirect,logout ,isAuthenticated,user} = useAuth0();

    const { input, setInput, recent, result, loading, resultData, sent } = useContext(Context);
    const [hamMenu, setHamMenu] = useState(false);
    const [copied, setCopied] = useState(false);
    const [popup,setpopup]=useState(false);
    // Add refs for scroll functionality
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    
   
    const handleClickbtn = () => {
        setHamMenu(!hamMenu);
    };

    // Add auto-scroll effect
    useEffect(() => {
        const scrollToBottom = () => {
            if (containerRef.current && contentRef.current) {
                const container = containerRef.current;
                const isNearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 50;
                
                if (isNearBottom) {
                    container.scrollTo({
                        top: container.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            }
        };

        scrollToBottom();
        
        const observer = new MutationObserver(scrollToBottom);
        
        if (contentRef.current) {
            observer.observe(contentRef.current, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }

        return () => observer.disconnect();
    }, [resultData]);


    const handleCopyButton = () => {
        if (resultData) {
            const textArea = document.createElement('textarea');
            const plainText = resultData.replace(/<[^>]*>/g, '');
            textArea.value = plainText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
        }
    };
    const handlePopUpButton=()=>{
        setpopup(!popup);
    }
    return (
        <>       
            <div className={!isAuthenticated && !popup ? "popup" : "nopopup"}>
                <div className="popupbar">
                    <h2>Thanks for trying Ai Genie</h2>
                    <p>
                    Log in or sign up to get smarter responses, <br /> upload files and images, and more.
                    </p>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                    <button onClick={() => loginWithRedirect()}>Sign In</button>
                <button className="last_btn" onClick={handlePopUpButton}>No,Thanks</button>
                </div>
            </div>
            <div className={!popup ? "black-container pro-main-container" : "pro-main-container"}>
                <div className="side">
                    <button className={!hamMenu ? "ham-menu" : "ham-menu new-menu"} onClick={handleClickbtn}>
                        <img src="/images/menu.png" alt="menu" />
                    </button>
                    <div className={!hamMenu ? "not-container" : "container"}>
                        <SideBar/>
                    </div>
                </div>
                <div className="main-pages">
                    <div className="top-bar">
                            {isAuthenticated ? 
                            <div className="logout">
                                {/* <p>{user.email}</p> */}
                                <img className="profile" src="./images/profile.png" alt="profile" />
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    <img src="/images/logout.png" alt="login" />    
                                </button>    
                            </div>
                                :
                               <>
                                <button onClick={() => loginWithRedirect() }>
                                <img src="/images/login.png" alt="login" />
                                </button>
                               </>
                            }
                    </div>
                    
                    <div className="head-container">
                        {!result ? (
                            <div>
                                <div className="head1">
                                    <h4>THE WORLD'S MOST SECURE</h4>
                                    <h1>Ai Genie Assistant</h1>
                                    <h2>Hello, Developer....</h2>
                                    <h5>How can I help you today?</h5>
                                </div>
                                <CardCarousel/>
                            </div>
                        ) : (
                            
                            <div className="main-search">
                                 <div className={`copy-content ${copied ? 'copied' : ''}`}  onClick={handleCopyButton}><FaCopy /></div>
                            <div className="search-result" ref={containerRef}>
                                <div className="result-title">
                                    <img src="./images/profile.png" alt="profile" />
                                    <p>{recent}</p>
                                </div>
                                <div className="result-data">
                                    <img src="./images/sparkling.png" alt="sparkle" />
                                    {loading ? (
                                        <div className='loader'>
                                            <hr />
                                            <hr />
                                            <hr />
                                        </div>
                                    ) : (
                                        <div ref={contentRef}>
                                            <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                                        </div>
                                    )}
                                </div>
                            </div>
                           
                            </div>
                        )}
                        
                        <div className="input-text">
                            <input 
                                onChange={(e) => setInput(e.target.value)} 
                                value={input} 
                                type="text"  
                                placeholder="Ask AIGenie"
                            />
                            <div className="voice">
                                <VoiceSearch/>
                            </div>
                            <button className="search-button" onClick={sent}>
                                <img src="./images/next-button.png" alt="send" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};