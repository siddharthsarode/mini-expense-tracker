import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        let existingData = JSON.parse(localStorage.getItem(key));
        if (existingData) {
            setData(existingData);
        } else {
            localStorage.setItem(key, JSON.stringify(initialData));
        }
    }, [])

    const updatedData = (newData) => {
        // check newData is function or not. if newData is function then if block is execute with data state variable like previous state argument
        if (typeof newData === "function") {
            localStorage.setItem(key, JSON.stringify(newData(data)));
            setData(newData);
        } else {
            localStorage.setItem(key, JSON.stringify(newData));
            setData(newData);
        }
    }

    return [data, updatedData];
}