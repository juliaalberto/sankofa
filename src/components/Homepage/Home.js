import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Home.css';

function Home() {

    return (
        <div>
            <Helmet>
                <title>Sankofa | Home</title>
            </Helmet>
            
            <div className="home-container">
                <div className="about">
                    <h1>What is Sankofa?</h1>
                    <p>
                        The word Sankofa comes from an African language which means “go back and fetch it” which is significant to the 
                        mission and purpose of the group which is to take information and resources we learn back to people in the community. 
                        Sankofa was founded in 2015 in order to meet the unique needs of parents of Black children with autism and other 
                        developmental disabilities. Since our inception, Sankofa has supported the needs of the parents by providing advocacy 
                        and resources that have increased awareness of developmental disabilities at the community level.
                    </p>
                </div>

                <div className="mission-statement">
                    <h1>Mission Statement</h1>
                    <p>
                        To collaborate with individuals with developmental disabilities and their families to improve quality of life and 
                        community inclusion. 
                    </p>
                </div>

                <button className="learn-more-button">
                    <Link to="/about-us" className="button-text">Learn More</Link>
                </button>

                <div className="announcements">
                    <h1>Announcements</h1>
                    <div className="announcement-item">
                        <h2>Lorem ipsum</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sem nunc enim dapibus. Semper quis tempor dictum 
                            ullamcorper amet. Sit praesent quis viverra nunc massa, odio porta non adipiscing. Sapien auctor turpis quam urna. 
                            Magna sodales non faucibus nisl.
                            <br></br>
                            Dolor aliquet cursus a adipiscing adipiscing ipsum, id. Suscipit aenean a aliquam augue at tortor. Blandit mauris, ut 
                            amet quis lacus. Purus tellus dolor scelerisque vitae leo. Justo pulvinar odio ac vitae.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;