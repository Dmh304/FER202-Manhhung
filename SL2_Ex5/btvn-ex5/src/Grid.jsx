import React from 'react';
import { DiHtml5, DiCss3, DiBootstrap } from 'react-icons/di';

function GridDemo() {
    return (
        <div>
            {/* ===== Câu 1 ===== */}
            <div className="bg-light py-5 px-4">
                <h1>Let's test the grid!</h1>
            </div>
            <br />

            {/* ===== Câu 3 ===== */}
            <nav className="d-flex align-items-center gap-3">
                <button className="nav-link active" style={{ color: "blue", padding: 0, border: "none", background: "transparent" }}>
                    Active
                </button>

                <button className="nav-link link" style={{ color: "blue", padding: 0, border: "none", background: "transparent" }}>
                    Link
                </button>

                <button className="nav-link link" style={{ color: "blue", padding: 0, border: "none", background: "transparent" }}>
                    Link
                </button>

                <button className="nav-link disabled" style={{ color: "red", padding: 0, border: "none", background: "transparent" }}>
                    Disabled
                </button>
            </nav>
            <br />

            <div className="container-fluid px-0">
                <div className="row g-0 border text-center">
                    <div className="col-6 border p-3 bg-secondary bg-opacity-10">
                        First col
                    </div>
                    <div className="col-6 border p-3 bg-secondary bg-opacity-10">
                        Second col
                    </div>
                </div>

                <div className="row g-0 border text-center">
                    <div className="col-4 border p-3 bg-secondary bg-opacity-10">col</div>
                    <div className="col-4 border p-3 bg-secondary bg-opacity-10">col</div>
                    <div className="col-4 border p-3 bg-secondary bg-opacity-10">col</div>
                </div>

                <div className="row g-0 border text-center">
                    <div className="col-3 border p-3 bg-secondary bg-opacity-10">col</div>
                    <div className="col-3 border p-3 bg-secondary bg-opacity-10">col</div>
                    <div className="col-3 border p-3 bg-secondary bg-opacity-10">col</div>
                    <div className="col-3 border p-3 bg-secondary bg-opacity-10">col</div>
                </div>
            </div>

            <div className="text-center py-3" style={{ backgroundColor: '#d9c5c5' }}>
                <h2 className="m-0">Created by ABC!</h2>
            </div>

            <div className="bg-light py-5 px-4 text-center mt-5">
                <h1>My First Bootstrap Page</h1>
            </div>

            <div className="container my-5">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-4">
                        <DiHtml5 size={100} color="#e34f26" />
                    </div>
                    <div className="col-4">
                        <DiCss3 size={100} color="#1572b6" />
                    </div>
                    <div className="col-4">
                        <DiBootstrap size={100} color="#7c3aed" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridDemo;