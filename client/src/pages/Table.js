import React from 'react';
import { useState } from 'react';
import '../styles/Table.css';
import TableData from '../components/TableData';

const Table = () => {
    const [tableData, setTableData] = useState([]);

    return (
        <div>
            <TableData setTableData={setTableData} />

            <div className='table-heading'>
                <h1>Table</h1>
            </div>

            <section className='table'>
                <div className='table-container'>
                    <div className='table-positions'>
                        <h5>Position</h5>
                        {tableData.position && tableData.position.map((position, index) => 
                        <p key={index}> {position} </p>)}
                    </div>

                    <div className='table-badges'>
                        <h5>Badge</h5>
                        {tableData.teamBadge && tableData.teamBadge.map((badge, index) => 
                        <img key={index} src={badge} />)}
                    </div>

                    <div className='table-names'>
                        <h5>Club</h5>
                        {tableData.teamName && tableData.teamName.map((name, index) => 
                        <p key={index}> {name} </p>)}
                    </div>

                    <div className='table-played'>
                        <h5>Played</h5>
                        {tableData.gamesPlayed && tableData.gamesPlayed.map((played, index) => 
                        <p key={index}> {played} </p>)}
                    </div>

                    <div className='table-won'>
                        <h5>Won</h5>
                        {tableData.gamesWon && tableData.gamesWon.map((won, index) => 
                        <p key={index}> {won} </p>)}
                    </div>

                    <div className='table-drawn'>
                        <h5>Drawn</h5>
                        {tableData.gamesDrawn && tableData.gamesDrawn.map((drawn, index) => 
                        <p key={index}> {drawn} </p>)}
                    </div>

                    <div className='table-lost'>
                        <h5>Lost</h5>
                        {tableData.gamesLost && tableData.gamesLost.map((lost, index) => 
                        <p key={index}> {lost} </p>)}
                    </div>

                    <div className='table-scored'>
                        <h5>GF</h5>
                        {tableData.scored && tableData.scored.map((goals, index) => 
                        <p key={index}> {goals} </p>)}
                    </div>

                    <div className='table-conceded'>
                        <h5>GA</h5>
                        {tableData.conceded && tableData.conceded.map((concede, index) => <p key={index}> {concede} </p>)}
                    </div>

                    <div className='table-gd'>
                        <h5>GD</h5>
                        {tableData.goalDifference && tableData.goalDifference.map((gd, index) => 
                        <p key={index}> {gd > 0 ? `+${gd}` : gd} </p>)}
                    </div>

                    <div className='table-points'>
                        <h5>Points</h5>
                        {tableData.points && tableData.points.map((points, index) => 
                        <p key={index}> {points} </p>)}
                    </div>

                    <div className='table-form'>
                        <h5>Form</h5>
                        {tableData.form && tableData.form.map((fm, index) => 
                        <p key={index}> {fm} </p>)}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Table;