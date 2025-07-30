import React from "react";
import { useFetch } from '../hooks/useFetch';
import { Fragment } from "react";

const HomeTable = () => {
    const { data, isLoading } = useFetch('/stats/table', ['table']);

    if (isLoading || !data?.length) {
        return null;
    }

    return (
        <div className='mt-10 ml-2 border-1 border-black grid grid-cols-[auto_auto_auto_auto_auto] gap-2 text-xs'>
            <span className='font-medium'>Pos</span>
            <span />
            <span className='font-medium'>Club</span>
            <span className='font-medium'>Gd</span>
            <span className='font-medium'>Pts</span>
            {data?.table.map(team => (
                <Fragment key={team.idTeam}>
                    <span className='col-span-1'>
                        {team.intRank}
                    </span>

                    <img 
                        className='col-span-1 w-7'
                        src={team.strBadge}
                        alt='Team badge'
                    / >
                    {/*</img>*/}

                    <span className='col-span-1'>
                        {team.strTeam}
                    </span>

                    <span className='col-span-1'>
                        {team.intGoalDifference}
                    </span>

                    <span className='col-span-1'>
                        {team.intPoints}
                    </span>
                </Fragment>
            ))}
        </div>
    )
};

export default HomeTable;