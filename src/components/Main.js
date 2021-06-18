import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "react-circular-progressbar/dist/styles.css";
import Table from "./Table";

export const Main = () => {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [countDownTimer, setCountDownTimer] = useState(60);
    useEffect(() => {
        if (countDownTimer === 0) {
            setCountDownTimer(60);
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
        countDownTimer > 0 &&
            setTimeout(() => setCountDownTimer(countDownTimer - 1), 1000);
    }, [countDownTimer]);
    const onThemeButtonClick = () => {
        setIsLightTheme(!isLightTheme);
    };

    useEffect(() => {}, []);

    return (
        <React.Fragment>
            <div className={"theme-" + (isLightTheme ? "light" : "dark")}>
                <Header
                    isLightTheme={isLightTheme}
                    onThemeButtonClick={onThemeButtonClick}
                    countDownTimer={countDownTimer}
                />
                <div
                    className="Container-fluid "
                    style={{ padding: "0px 30px" }}
                >
                    <div
                        className="d-flex justify-content-around align-items-center average-header"
                        style={{ padding: "10px 0px" }}
                    >
                        <div className="text-center">
                            <div className="average-header-maintext color-green">
                                0.47 %
                            </div>
                            <div className="average-header-subHeading">
                                5 Mins
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="average-header-maintext color-green">
                                1.06 %
                            </div>
                            <div className="average-header-subHeading">
                                1 Hour
                            </div>
                        </div>
                        <div style={{ maxWidth: "40%" }}>
                            <div className="text-center font-32 average-block">
                                <div className="average-subText">
                                    <span className="subText-heading">
                                        Best Price to Trade
                                    </span>
                                </div>
                                <div
                                    className="average-heading"
                                    style={{ paddingBottom: "10px" }}
                                >
                                    ₹ 29,54,604
                                </div>
                                <div className="average-subText">
                                    Average ETH/INR net price including
                                    commission
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="average-header-maintext color-green">
                                2.52 %
                            </div>
                            <div className="average-header-subHeading">
                                1 Day
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="average-header-maintext color-green">
                                9.71 %
                            </div>
                            <div className="average-header-subHeading">
                                7 Days
                            </div>
                        </div>
                    </div>
                    <a
                        target="_blank"
                        href="https://finstreet.in/"
                        rel="noreferrer"
                    >
                        <img
                            src="cryptonews.png"
                            style={{ width: "100%", padding: "0px 0px 20px" }}
                            alt="news"
                        />
                    </a>
                </div>
                <Table />
                <div className="padding-header" style={{ padding: "20px" }}>
                    <a
                        target="_blank"
                        href="https://ftx.com/#a=finstreet"
                        rel="noreferrer"
                    >
                        <img
                            src="BannerFTXNews.png"
                            style={{ width: "100%" }}
                            alt="Banner"
                        />
                    </a>
                </div>
                <Footer />
                <div
                    style={{
                        border: "solid 1px #191d28",
                        backgroundColor: "#191d28",
                        position: "fixed",
                        left: "0",
                        alignItems: "center",
                        width: "100vw",
                        height: "47px",
                        bottom: "0",
                        zIndex: "8",
                    }}
                />
            </div>
        </React.Fragment>
    );
};
