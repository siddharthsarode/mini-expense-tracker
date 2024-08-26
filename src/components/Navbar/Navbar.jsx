import logo from "/img/logo.png";
import styles from "./Navbar.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

// React icons
import { IoMdEye } from "react-icons/io";
import { MdNoteAdd } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <div id={styles.navbarContainer}>
                <nav className="navbar navbar-expand-lg border-bottom">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img
                                src={logo}
                                style={{ width: "8rem", height: "5rem" }}
                                alt="Mini Expense Tracker"
                            />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        aria-current="page"
                                        to="/exp-add"
                                    >
                                        <PrimaryButton
                                            icon={<MdNoteAdd />}
                                            text="Add Expense"
                                        />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/exp-history"
                                    >
                                        <PrimaryButton
                                            icon={<IoMdEye />}
                                            text="Expense History"
                                        />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/exp-charts">
                                        <PrimaryButton
                                            icon={<FaChartLine />}
                                            text="Expense Charts"
                                        />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/doc"
                                        className="nav-link fw-bold"
                                    >
                                        <PrimaryButton text="Read Doc" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
