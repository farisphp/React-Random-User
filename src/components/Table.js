import React from 'react';
import TableFilter from './TableFilter';
import { formatDate } from '../utils/DateUtil';

const Table = (props) => {
    const { 
        data, 
        search, 
        handleSearch, 
        gender, 
        handleGenderChange, 
        resetFilter, 
        getUser, 
        page, 
        handlePageChange, 
        error 
    } = props;

    const TableRow = (props) => {
        const { data } = props;
        return (
            <tr>
                <td>{data.login.username}</td>
                <td>{data.name.first} {data.name.last}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{formatDate(data.registered.date)}</td>
            </tr>
        )
    }

    return (
        <div className="my-5">
            <TableFilter 
                search={search} 
                handleSearch={handleSearch} 
                gender={gender} 
                handleGenderChange={handleGenderChange} 
                resetFilter={resetFilter} 
                getUser={getUser} 
            />
            <div className="my-5">
                <table className="table-auto w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Registered Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row,index) => <TableRow key={index} data={row} />)}
                    </tbody>
                </table>
                {error && <p>{error}</p>}
                <div className={`flex justify-end mt-5 ${error && "hidden"}`}>
                    <button className={`mx-1 py-2 px-3 border ${page === 1 && "cursor-default opacity-50"}`} disabled={page === 1} onClick={() => handlePageChange(page-1)}>{'<'}</button>
                    <button className={`mx-1 py-2 px-3 border ${page === 1 && "border-blue-400"}`} onClick={() => handlePageChange(1)}>1</button>
                    <button className={`mx-1 py-2 px-3 border ${page === 2 && "border-blue-400"}`} onClick={() => handlePageChange(2)}>2</button>
                    <button className={`mx-1 py-2 px-3 border ${page === 2 && "cursor-default opacity-50"}`} disabled={page === 2} onClick={() => handlePageChange(page+1)}>{'>'}</button>
                </div>
            </div>
        </div>
    )
}

export default Table
