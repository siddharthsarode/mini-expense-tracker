import { useState } from "react";

export function useFilter(data, callback) {
    // callback is return the string that will be category and other thing.
    const [query, setQuery] = useState("");
    const filteredData = data.filter((exp) => callback(exp)?.toLowerCase().includes(query));

    return [filteredData, setQuery];
}