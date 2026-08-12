import React from 'react';

function FptHomePage() {
    return (
        <div>
            {/* ===== HEADER: nền cam + logo + navbar ===== */}
            <header style={{ backgroundColor: '#e8871e' }}>
                {/* Khung logo trắng, canh giữa */}
                <div className="d-flex justify-content-center pt-4 pb-3">
                    <div className="bg-white p-4" style={{ maxWidth: '400px' }}>
                        {/* Thay bằng logo thật: <img src={logo} alt="FPT University" className="img-fluid" /> */}
                        <div className="text-center">
                            <h2 className="mb-0">
                                <img src="/LogoFPT.png" alt="FPT University" className="img-fluid" />
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Nav links */}
                <nav className="pb-3">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* ===== BODY: About + Contact ===== */}
            <main className="container text-center py-5">
                <section id="about" className="mb-5">
                    <h2 className="fw-bold">About</h2>
                    <p>This is the about section of the website.</p>
                </section>

                <section id="contact">
                    <h2 className="fw-bold">Contact</h2>
                    <p>For any inquiries, please contact us at example@example.com.</p>
                </section>
            </main>

            {/* ===== FOOTER ===== */}
            <footer
                className="text-center text-white py-3"
                style={{ backgroundColor: '#f0c584' }}
            >
                © 2023 Website. All rights reserved.
            </footer>
        </div>
    );
}

export default FptHomePage;