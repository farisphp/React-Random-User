import React from 'react';

const TableFilter = (props) => {
    const { 
        search, 
        handleSearch, 
        gender, 
        handleGenderChange, 
        resetFilter, 
        getUser 
    } = props;
    
    return (
        <div className="flex items-end">
            <div className="mr-3 relative">
                <div>
                    <label className="block" htmlFor="search">Search</label>
                    <input 
                        className="p-2 border rounded w-96" 
                        type="text" 
                        placeholder="Search..." 
                        name="search" value={search} 
                        onChange={(e) => handleSearch(e.target.value)} 
                    />
                </div>
                <button className="absolute right-0 bottom-0 bg-blue-500 py-2 px-6 text-white rounded" onClick={() => getUser()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
            <div className="mr-3">
                <label className="block" htmlFor="gender">Gender</label>
                <select 
                    className="p-2 border rounded" 
                    name="gender" 
                    value={gender} 
                    onChange={(e) => handleGenderChange(e.target.value)} 
                >
                    <option value="all">All</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
            </div>
            <button className="p-2 border rounded" onClick={() => resetFilter()}>Reset Filter</button>
        </div>
    )
}

export default TableFilter
