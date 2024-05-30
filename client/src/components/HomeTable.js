import React from "react";
import { useState } from "react";
import TableData from "./TableData";

const HomeTable = () => {
    const [tableData, setTableData] = useState([])

    return (
        <div className='home-table'>
            <TableData setTableData={setTableData} />

            <div className='home-table-positions'>
                <h3>Pos</h3>
                {tableData.position && tableData.position.map((position, index) => <p key={`${index}0`}>{position}</p>)}
            </div>
            
            <div className='home-table-badges'>
                <h3>Badge</h3>
                {tableData.teamBadge && tableData.teamBadge.map((badge, index) => <img key={`${index}1`} src={badge} />)}
            </div>

            <div className='home-table-names'>
                <h3>Club</h3>
                {tableData.teamName && tableData.teamName.map((name, index) => <p key={`${index}2`}>{name}</p>)}
            </div>

            <div className='home-table-played'>
                <h3>Pl</h3>
                {tableData.gamesPlayed && tableData.gamesPlayed.map((played, index) => <p key={`${index}3`}>{played}</p>)}
            </div>

            <div className='home-table-gd'>
                <h3>Gd</h3>
                {tableData.goalDifference && tableData.goalDifference.map((gd, index) => <p key={`{${index}}4`}>{gd}</p>)}
            </div>

            <div className='home-table-points'>
                <h3>Pts</h3>
                {tableData.points && tableData.points.map((points, index) => <p key={`${index}5`}>{points}</p>)}
            </div>
        </div>
    )
};

export default HomeTable;