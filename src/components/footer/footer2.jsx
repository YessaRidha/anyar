import React from "react"
import './footer2.css'
import fb from '../assets/fb.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import discord from '../assets/discord.png'

const Footer2 = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div_pt">
                        <h2>Zavisit</h2>
                        <p>Masih percobaan. ini adalah deskripsi perusahaan. masih perobaan untuk mencoba</p>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Location</h4>
                        <a href="/location">
                            <p>Jl AM Sangaji No 999</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Partner</h4>
                        <a href="/jigo">
                            <p>PT Jigoku</p>
                        </a>
                        <a href="/kyuu">
                            <p>PT Aoyama</p>
                        </a>
                        <a href="/kimetsu">
                            <p>PT Yaiba</p>
                        </a>
                        <a href="/slime">
                            <p>PT Datta</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div_media">
                        <div className="socialmedia">
                            <p><img src={fb} alt=""></img></p>
                            <p><img src={instagram} alt=""></img></p>
                            <p><img src={twitter} alt=""></img></p>
                            <p><img src={discord} alt=""></img></p>
                        </div>
                    </div>
                </div>
                <hr></hr>        
                    <div className="sb_footer-copyright" >
                        <p>
                            @{new Date().getFullYear()} YessaID. All right reserved
                        </p>
                    </div>
                    <div className="sb_footer-below">
                        <div className="sb_footer-below-links">
                            <a href="/terms"><div><p>Syarat & Ketentuan </p></div></a>
                            <a href="/privacy"><div><p>Privacy </p></div></a>
                            <a href="/security"><div><p>Security </p></div></a>
                            <a href="/cookie"><div><p>Cookie </p></div></a>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Footer2