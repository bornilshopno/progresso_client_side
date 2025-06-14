import React from 'react';

const KanbanBoard = () => {
    return (
        <div>
            <h3 className='text-center text-lg py-5'>"Plan. Prioritize. Progress."</h3>
         

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="sec border-2 rounded-2xl min-h-96">
                    <h2 className='text-center py-2 border-b-2 italic font-bold'>TO-DO</h2>
                </div>
                <div className="sec border-2 rounded-2xl min-h-96">
                       <h2 className='text-center py-2 border-b-2 italic font-bold'>IN-PROGRESS</h2>
                </div>
                <div className="sec border-2 rounded-2xl min-h-96">
                       <h2 className='text-center py-2 border-b-2 italic font-bold'>COMPLETED</h2>
                </div>

            </div>
        </div>
    );
};

export default KanbanBoard;