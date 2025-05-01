import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const TableData = ({ setTableData }) => {
    const { data } = useFetch('/stats/table', 'table');

    useEffect(() => {
        if (data) {
            const tableData =  { 
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
            }

            setTableData(tableData);
        }
    }, [data])
};

export default TableData;