import React, { useState } from 'react';
import "./Accordion.css";
import Chevron from './chevron.svg';

export default function Accordion() {
    const [accordions, setAccordions] = useState([
        { id: 1, question: "Apa itu NFT ?", answer: "NFT (Non-Fungible Token) adalah bentuk kriptoaktiva yang memperlihatkan kepemilikan digital atas suatu barang atau aset unik, seperti karya seni, musik, video game, atau bahkan tweet. NFT menggunakan teknologi blockchain untuk memberikan sertifikat kepemilikan yang unik dan tidak dapat dipalsukan, sehingga memungkinkan para pencipta konten digital untuk memperoleh nilai dari karyanya secara langsung dari pembeli tanpa perantara. Dalam hal ini, NFT memungkinkan penggemar dan kolektor untuk membeli dan memiliki barang digital unik yang bernilai, yang dapat diperjualbelikan di pasar NFT yang semakin berkembang." },
        { id: 2, question: "Kegunaan NFT ?", answer: "NFT (Non-Fungible Token) digunakan untuk merepresentasikan kepemilikan digital unik seperti seni, musik, video game, dan aset digital lainnya. NFT memungkinkan pencipta konten digital untuk menjual dan memonetisasi karya mereka dengan cara yang lebih mudah dan transparan, sementara pembeli dapat memperoleh kepemilikan unik dan sah atas karya tersebut." },
        { id: 3, question: "Bagaimana cara saya login ?", answer: "Kamu bisa pergi ke halaman login, klik pada bar diatas." },
        { id: 4, question: "Bagaimana cara saya membuat pesanan/transaksi ?", answer: "Untuk sekarang fitur pembelian masih belum tersedia, tunggu untuk fitur fitur selanjutnya." },
        { id: 5, question: "Kenapa pedagang fb selalu inbox saat ditanya harga ?", answer: "Pake nanya." }
    ]);

    const toggleState = (id) => {
        setAccordions(accordions.map(item => {
            if (item.id === id) {
                return { ...item, toggle: !item.toggle }
            }
            else {
                return item
            }
            
        }));
    
        const contentHeight = document.getElementById(`content-${id}`).scrollHeight + "px";
        if (!accordions.find(item => item.id === id).toggle) {
            document.getElementById(`content-${id}`).style.height = contentHeight;
        } else {
            document.getElementById(`content-${id}`).style.height = "0px";
        }
    }

        return (
            <div className="accordion">
                {accordions.map((item) => (
                    <React.Fragment key={item.id}>
                        <button
                            onClick={() => toggleState(item.id)}
                            className="accordion-visible">
                            <span>{item.question}</span>
                            <img
                                className={item.toggle && "active"}
                                src={Chevron} alt='' />
                        </button>
                        <div
                            className={`accordion-toggle ${item.toggle ? 'animated' : ''}`}
                            id={`content-${item.id}`}
                        >
                            <p aria-hidden={item.toggle ? "true" : "false"}>{item.answer}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        );
    }
