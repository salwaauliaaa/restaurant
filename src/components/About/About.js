import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="container about-container">
                <div className="about-img">
                    <img src="/images/about.jpg" alt="Restaurant" />
                </div>
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                        Selamat datang di Yummy Restaurant! Misi kami adalah menyajikan makanan lezat yang dibuat dengan bahan-bahan terbaik.
                        Kami telah menjadi bagian dari komunitas ini selama lebih dari satu dekade dan kami bangga menawarkan berbagai hidangan
                        yang menarik bagi semua selera. Dari keluarga kami hingga keluarga Anda, kami mengundang Anda untuk bergabung dengan kami dan merasakan kecintaan kami terhadap makanan.
                    </p>
                    <p>
                        Baik Anda datang untuk makan cepat saji atau sekadar bersantai, kami ingin membuat setiap kunjungan Anda berkesan. Terima kasih telah memilih kami!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
