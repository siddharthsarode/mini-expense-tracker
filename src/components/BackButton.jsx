import React from "react";

function BackButton() {
    return (
        <button
            className="btn btn-dark"
            style={{ background: "var(--primary)", border: "none" }}
            onClick={() => {
                window.history.back();
            }}
        >
            Go Back
        </button>
    );
}

export default BackButton;
