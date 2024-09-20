import React, { useState } from "react";
import styles from "./ExpenseHistory.module.css";
import ContextMenu from "../ContextMenu/ContextMenu";
import EditForm from "../EditForm/EditForm";
import SelectMenu from "../SelectMenu";
import { TbFilterUp, TbFilterDown } from "react-icons/tb";
import BackButton from "../BackButton";
import { MdCurrencyRupee } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
import { useFilter } from "../../hooks/useFilter";
import { Link } from "react-router-dom";

function ExpenseHistory({ expenses, setExpenses }) {
    const [contextMenuPosition, setContextMenuPosition] = useState({});
    const [editFormPosition, setEditFormPosition] = useState({});
    const [rowId, setRowId] = useState("");
    const [callback, setCallback] = useState(() => () => {});
    const [title, setTitle] = useState("");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Custom hooks
    const [filteredExpenses, setQuery] = useFilter(expenses, (data) => {
        return data.category;
    });

    // Select Menu function
    const handleSelectChange = (event) => {
        event.stopPropagation();
        setQuery(event.target.value.toLowerCase());
    };

    const handleContextMenu = (event, id) => {
        event.preventDefault();
        setContextMenuPosition({ left: event.pageX, top: event.pageY });
        setRowId(id);
    };

    const ascendingByTitle = () => {
        setCallback(() => (a, b) => {
            if (a["title"].toLowerCase() < b["title"].toLowerCase()) return -1;
            if (a["title"].toLowerCase() > b["title"].toLowerCase()) return 1;
            return 0;
        });
    };

    const descendingByTitle = () => {
        setCallback(() => (a, b) => {
            if (a["title"].toLowerCase() < b["title"].toLowerCase()) return 1;
            if (a["title"].toLowerCase() > b["title"].toLowerCase()) return -1;
            return 0;
        });
    };

    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredExpenses
        .sort(callback)
        .filter((exp) => exp.title.toLowerCase().includes(title))
        .slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(filteredExpenses.length / rowsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <ContextMenu
                rowId={rowId}
                expenses={expenses}
                setExpenses={setExpenses}
                setContextMenuPosition={setContextMenuPosition}
                contextMenuPosition={contextMenuPosition}
                setEditFormPosition={setEditFormPosition}
            />

            <EditForm
                position={editFormPosition}
                expenses={expenses}
                rowId={rowId}
                setEditFormPosition={setEditFormPosition}
                setExpenses={setExpenses}
            />

            <div className="container">
                <div className="mt-3">
                    <BackButton />
                </div>
            </div>

            {expenses.length === 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-14 col-lg-8 mx-auto mt-5">
                            <h1 className="text-center">Add a first Expense</h1>
                            <h5 className="text-center">
                                <Link
                                    to="/exp-add"
                                    className="btn btn-dark"
                                    style={{
                                        width: "fit-content",
                                    }}
                                >
                                    Click To Add
                                </Link>
                            </h5>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <th className={styles.titleColumn}>
                                    <div>
                                        <div
                                            className="d-flex align-items-center"
                                            style={{ gap: ".5rem" }}
                                        >
                                            <span>Title</span>
                                            <span
                                                className={styles.filterIcon}
                                                title="Ascending Order by Title"
                                                onClick={ascendingByTitle}
                                            >
                                                <TbFilterUp />
                                            </span>
                                            <span
                                                className={styles.filterIcon}
                                                title="Descending Order by Title"
                                                onClick={descendingByTitle}
                                            >
                                                <TbFilterDown />
                                            </span>
                                        </div>

                                        <input
                                            type="text"
                                            placeholder="Filter by title"
                                            className={styles.filterInput}
                                            onChange={(e) =>
                                                setTitle(
                                                    e.target.value.toLowerCase()
                                                )
                                            }
                                        />
                                    </div>
                                </th>
                                <th>
                                    <SelectMenu
                                        onChange={handleSelectChange}
                                        name="category"
                                        cls="form-select w-75 bg-dark text-white fw-bold"
                                        defaultText={"All Category"}
                                        options={[
                                            "Food",
                                            "Transport",
                                            "Entertainment",
                                            "Health",
                                            "Utilities",
                                        ]}
                                    />
                                </th>
                                <th className={styles.amountColumn}>
                                    <div>
                                        <div
                                            className="d-flex align-items-center"
                                            style={{ gap: ".5rem" }}
                                        >
                                            <span>Amount</span>
                                            <span
                                                className={styles.filterIcon}
                                                title="Ascending Order by Amount"
                                                onClick={() =>
                                                    setCallback(
                                                        () => (a, b) =>
                                                            a.amount - b.amount
                                                    )
                                                }
                                            >
                                                <TbFilterUp />
                                            </span>
                                            <span
                                                className={styles.filterIcon}
                                                title="Descending Order by Amount"
                                                onClick={() =>
                                                    setCallback(
                                                        () => (a, b) =>
                                                            b.amount - a.amount
                                                    )
                                                }
                                            >
                                                <TbFilterDown />
                                            </span>
                                        </div>
                                    </div>
                                </th>
                                <th className={styles.dateColumn}>
                                    <div>
                                        <span>Date</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody
                            className={styles.tbody}
                            onClick={(event) => {
                                event.stopPropagation();
                                setContextMenuPosition({});
                                setEditFormPosition({});
                            }}
                        >
                            {currentRows.length > 0 ? (
                                currentRows.map((exp) => {
                                    return (
                                        <tr
                                            key={exp.id}
                                            onContextMenu={(e) =>
                                                handleContextMenu(e, exp.id)
                                            }
                                            className={styles.row}
                                        >
                                            <td>{exp.title}</td>
                                            <td>{exp.category}</td>
                                            <td>
                                                <span>
                                                    <MdCurrencyRupee />
                                                </span>
                                                {parseFloat(
                                                    exp.amount
                                                ).toLocaleString("en-In")}
                                            </td>
                                            <td>{exp.date}</td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4}
                                        style={{ textAlign: "center" }}
                                    >
                                        <p className="h2 fw-light">
                                            Not Existing
                                        </p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot className={styles.tfoot}>
                            <tr>
                                <td
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setCallback(() => {})}
                                >
                                    <div
                                        className="d-flex"
                                        style={{ gap: ".3rem" }}
                                    >
                                        <span>Clear Sort </span>
                                        <span>
                                            <VscClearAll />
                                        </span>
                                    </div>
                                </td>
                                <td>Total</td>
                                <td colSpan="1">
                                    <b className="d-flex align-items-center">
                                        <span>
                                            <MdCurrencyRupee />
                                        </span>
                                        <span>
                                            {filteredExpenses
                                                .reduce(
                                                    (acc, curr) =>
                                                        acc +
                                                        parseFloat(curr.amount),
                                                    0
                                                )
                                                .toLocaleString()}
                                        </span>
                                    </b>
                                </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>

                    <div className={styles.pagination}>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                disabled={currentPage === index + 1}
                                className={styles.pageButton}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ExpenseHistory;
