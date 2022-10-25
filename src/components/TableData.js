import { useEffect } from 'react';

const TableData = ({setTableData}) => {

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=4328&s=2022-2023')
        .then(response => response.json())
        .then(data => setTableData(
            { 
                position: data.table.map(item => item.intRank), 
                teamBadge: data.table.map(item => item.strTeamBadge),
                teamName: data.table.map(item => item.strTeam),
                gamesPlayed: data.table.map(item => item.intPlayed),
                goalDifference: data.table.map(item => item.intGoalDifference),
                points: data.table.map(item => item.intPoints),
                gamesWon: data.table.map(item => item.intWin),
                gamesDrawn: data.table.map(item => item.intDraw),
                gamesLost: data.table.map(item => item.intLoss),
                scored: data.table.map(item => item.intGoalsFor),
                conceded: data.table.map(item => item.intGoalsAgainst),
                goalDifference: data.table.map(item => item.intGoalDifference),
                form: data.table.map(item => item.strForm.split('').join(' '))
            }))
    }, []);
};

export default TableData;