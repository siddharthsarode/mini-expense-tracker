import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function EditForm({
    position,
    rowId,
    expenses,
    setExpenses,
    setEditFormPosition,
}) {
    if (!position.top) return;

    // get edit data
    const rowData = expenses.find((expense) => expense.id === rowId);

    const [editFormData, setEditFormData] = useState(rowData);

    const handleInputChange = (event) => {
        setEditFormData((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();

        let updatedData = expenses.map((expense) => {
            if (expense.id === rowId) {
                return { ...editFormData, id: rowId };
            }
            return expense;
        });

        setExpenses(updatedData);

        setEditFormPosition({});
    };

    return (
        <div
            className="shadow-sm"
            style={{
                width: "80%",
                border: "4px solid #58525238",
                position: "absolute",
                background: "#ffffff",
                ...position,
                left: "10%",
            }}
        >
            <form onSubmit={handleEditSubmit} className="pt-3 pb-2 px-1">
                <div className="d-flex align-items-center flex-column">
                    <div
                        className="d-flex align-items-center flex-wrap"
                        style={{ gap: ".5rem" }}
                    >
                        <div>
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Title"
                                value={editFormData.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <select
                                value={editFormData.category}
                                onChange={handleInputChange}
                                name="category"
                                className="form-select"
                            >
                                <option value="" hidden>
                                    Select Category
                                </option>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="Entertainment">
                                    Entertainment
                                </option>
                                <option value="Health">Health</option>
                                <option value="Utilities">Utilities</option>
                            </select>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="amount"
                                className="form-control"
                                placeholder="amount"
                                value={editFormData.amount}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <input
                                type="date"
                                className="form-control"
                                name="date"
                                placeholder="Date"
                                value={editFormData.date}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="d-flex mt-3" style={{ gap: ".5rem" }}>
                        <div>
                            <PrimaryButton text="Save" />
                        </div>
                        <div>
                            <PrimaryButton
                                text="Cancel"
                                type="button"
                                onClick={() => setEditFormPosition({})}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditForm;
