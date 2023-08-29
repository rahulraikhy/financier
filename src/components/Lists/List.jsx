import React from "react";
import 'boxicons';

const obj = [
    {
        name: "Savings",
        color: "#f9c74f",
    },
    {
        name: "Investment",
        color: "#f9c74f",
    },
    {
        name: "Expense",
        color: "rgb(54, 162, 235)",
    }
]

export default function List() {
    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4 font-bold text-xl">History</h1>
            {obj.map((value, index) => <Transaction key={index} category={value}></Transaction>)}
        </div>
    )
}

function Transaction({ category }) {
    if (!category) return null;
    return (
        <div className="item flex items-center bg-gray-50 py-2 rounded-r" style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}>
            <button className="px-3 mr-2"><box-icon color={category.color ?? "#e5e5e5"} size="15px" name="trash"></box-icon></button>
            <span className="block flex-grow truncate">{category.name ?? ""}</span>
        </div>
    );
}
