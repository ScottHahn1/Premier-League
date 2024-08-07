import { useEffect } from 'react';

const TableData = ({setTableData}) => {

    useEffect(() => {
        fetch('https://premier-league-backend.vercel.app/stats/table')
        .then(response => response.json())
        .then(data => setTableData(
            { 
                position: data.table.map(item => item.intRank), 
                teamBadge: data.table.map(item => item.strBadge),
                teamName: data.table.map(item => item.strTeam),
                gamesPlayed: data.table.map(item => item.intPlayed),
                goalDifference: data.table.map(item => item.intGoalDifference),
                points: data.table.map(item => item.intPoints),
                gamesWon: data.table.map(item => item.intWin),
                gamesDrawn: data.table.map(item => item.intDraw),
                gamesLost: data.table.map(item => item.intLoss),
                scored: data.table.map(item => item.intGoalsFor),
                conceded: data.table.map(item => item.intGoalsAgainst),
                form: data.table.map(item => item.strForm.split('').join(' '))
            }))
    }, []);
};

export default TableData;