import React from "react";

function ContextMenu({
    contextMenuPosition,
    setExpenses,
    setContextMenuPosition,
    setEditFormPosition,
    rowId,
    expenses,
}) {
    // if position not set cannot display contextMenu on screen
    if (!contextMenuPosition.left) return;

    // Delete the table row
    const deleteTableRow = (e) => {
        setContextMenuPosition({});

        if (window.confirm("You want to Delete?"))
            setExpenses(expenses.filter((exp) => exp.id !== rowId));
    };

    const deleteAll = () => {
        console.log("Delete All");
        if (window.confirm("Are you sure delete to all expenses")) {
            setContextMenuPosition({});
            setExpenses([]);
        }
    };

    // Edit table row
    const editTableRow = (e) => {
        e.stopPropagation();
        setContextMenuPosition({});
        setEditFormPosition({ top: e.pageY - 60, left: e.pageX });
    };

    return (
        <div
            className="border-2 shadow d-flex flex-column px-2"
            style={{
                width: "fit-object",
                background: "#063437",
                color: "#fff",
                cursor: "pointer",
                position: "absolute",
                zIndex: "999",
                borderRadius: ".7rem",
                ...contextMenuPosition,
            }}
        >
            <p
                onClick={editTableRow}
                className="border-bottom text-white px-3 py-2 m-0"
            >
                Edit
            </p>
            <p
                onClick={deleteTableRow}
                className="border-bottom text-white px-3 py-2 m-0"
            >
                Delete
            </p>
            <p
                onClick={deleteAll}
                className="border-bottom text-white px-3 py-2 m-0"
            >
                Delete All
            </p>
        </div>
    );
}

export default ContextMenu;
