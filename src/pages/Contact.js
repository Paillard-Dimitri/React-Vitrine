import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContactForm from '../components/ContacForm';

const Contact = () => {

    return (
        <main>
            <Mouse/>
            <div className="contact">
                <Navigation/>
                <Logo/>
                <ContactForm/>
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>	13 avenue de Guyenne</p>
                            <p>35000 Rennes</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0698133452" className="hover">
                                <p style={{cursor: "pointer"}} className="clipboard" onClick={() => {alert("Téléphone copié !")}}>06 98 13 34 52</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="DimitriPaillard.dev@gmail.com" className="hover">
                                <p style={{cursor: "pointer"}} className="clipboard" onClick={() => {alert("Email copié !")}}>DimitriPaillard.dev@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork/>
                    <div className="credits">
                        <p>Dimitri PAILLARD - 2021</p>
                    </div>
                </div>
                <ButtonsBottom left={"/project-4"} />
            </div>
        </main>
    );
};

export default Contact;