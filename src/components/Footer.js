import React from "react";

export const Footer = () => {
    return (
        <div className="footer mb-5">
            <div className="d-flex align-items-center text-center">
                <div className="footer-text">Copyright © 2019</div>
                <div className="footer-text">HodlInfo.com</div>
                <div className="footer-text">
                    Developed By{" "}
                    <a
                        href="https://www.quadbtech.com"
                        target="_blank"
                        style={{ color: "#3dc6c1" }}
                        rel="noreferrer"
                    >
                        {" "}
                        QuadBTech
                    </a>
                </div>
                <div
                    className="footer-text pointer"
                    style={{ marginLeft: "auto" }}
                >
                    <a
                        href="mailto:support@hodlinfo.com"
                        className="footer-text-link"
                    >
                        Support
                    </a>
                </div>
            </div>
        </div>
    );
};
