import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "react-circular-progressbar/dist/styles.css";

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
                <div
                    className="fiat-crypto-table table-responsive"
                    style={{ margin: "0px auto" }}
                >
                    <table className="table table-borderless text-center">
                        <thead>
                            <tr>
                                <th>
                                    <h4>
                                        <span className="pointer">#</span>
                                    </h4>
                                </th>
                                <th>
                                    <h4>
                                        <span className="pointer">
                                            Platform
                                        </span>
                                    </h4>
                                </th>
                                <th>
                                    <h4>
                                        <span className="pointer">
                                            Last Traded Price
                                        </span>
                                    </h4>
                                </th>
                                <th>
                                    <h4>
                                        <span className="pointer">
                                            Buy / Sell Price
                                        </span>
                                    </h4>
                                </th>
                                <th>
                                    <h4>
                                        <span className="pointer">
                                            Difference
                                        </span>
                                    </h4>
                                </th>
                                <th>
                                    <h4>
                                        <span className="pointer">Savings</span>
                                    </h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">
                                    <h4 className="table-text">1</h4>
                                </td>
                                <td className="align-middle">
                                    <a
                                        target="_blank"
                                        href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
                                        rel="noreferrer"
                                    >
                                        <h4 className="table-text">
                                            <img
                                                src="wazix.png"
                                                className="exchange-logo"
                                                alt="WazirX"
                                            />{" "}
                                            <span className="exchange-name ">
                                                WazirX
                                            </span>
                                        </h4>
                                    </a>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">₹ 29,46,009</h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">
                                        <span className="table-text">
                                            ₹ 29,46,110 / ₹ 29,56,596
                                        </span>
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-red">
                                        -0.29 %
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-green">
                                        ▼ ₹ 8,595
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <h4 className="table-text">2</h4>
                                </td>
                                <td className="align-middle">
                                    <a
                                        target="_blank"
                                        href="https://bit.ly/2BJxccc"
                                        rel="noreferrer"
                                    >
                                        <h4 className="table-text">
                                            <img
                                                src="bitbns.png"
                                                className="exchange-logo"
                                                alt="Bitbns"
                                            />
                                            <span className="exchange-name">
                                                Bitbns
                                            </span>
                                        </h4>
                                    </a>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">₹ 29,43,341</h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">
                                        <span>₹ 29,40,025 / ₹ 29,46,546</span>
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-green">
                                        1.93 %
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-green">
                                        ▲ ₹ 55,602
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <h4 className="table-text">3</h4>
                                </td>
                                <td className="align-middle">
                                    <a target="_blank" href=" ">
                                        <h4 className="table-text">
                                            <img
                                                src="giotus.png"
                                                className="exchange-logo"
                                                alt="Giotus"
                                            />
                                            <span className="exchange-name ">
                                                Giotus
                                            </span>
                                        </h4>
                                    </a>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">₹ 29,70,000</h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">
                                        <span>₹ 29,42,000/ ₹ 29,89,500</span>
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-green">
                                        2.85 %
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-green">
                                        ▲ ₹ 82,261
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <h4 className="table-text">4</h4>
                                </td>
                                <td className="align-middle">
                                    <a target="_blank" href=" ">
                                        <h4 className="table-text">
                                            <img
                                                src="colodax.png"
                                                className="exchange-logo"
                                                alt="coodax"
                                            />
                                            <span className="exchange-name ">
                                                Colodax
                                            </span>
                                        </h4>
                                    </a>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">₹ 25,83,138</h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">
                                        <span>₹ 25,75,167 / ₹ 26,08,984</span>
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-red">
                                        -10.55 % %
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-red">
                                        ▼ ₹ 3,04,601
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <h4 className="table-text">5</h4>
                                </td>
                                <td className="align-middle">
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://locahost:3000"
                                    >
                                        <h4 className="table-text">
                                            <img
                                                src="zebpay.png"
                                                className="exchange-logo"
                                                alt="Zebpay"
                                            />
                                            <span className="exchange-name">
                                                Zebpay
                                            </span>
                                        </h4>
                                    </a>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">₹ 29,48,000</h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">
                                        <span>₹ 29,48,000 / ₹ 29,44,000</span>
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-green">
                                        2.09 %
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-green">
                                        ▲ ₹ 60,261
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <h4 className="table-text">6</h4>
                                </td>
                                <td className="align-middle">
                                    <a target="_blank" href=" ">
                                        <h4 className="table-text">
                                            <img
                                                src="coibdcx.png"
                                                className="exchange-logo"
                                                alt="CoinDCX"
                                            />
                                            <span className="exchange-name">
                                                CoinDCX
                                            </span>
                                        </h4>
                                    </a>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">₹ 29,43,251</h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text">
                                        <span>₹ 29,42,000 / ₹ 29,45,882</span>
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-green">
                                        1.92 %
                                    </h4>
                                </td>
                                <td className="align-middle">
                                    <h4 className="table-text color-green">
                                        ▲ ₹ 55,512
                                    </h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
