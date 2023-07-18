import React from 'react'

const Record = ({ list , deleteRecords }) => {
    return (
        <>
            {
                list.map((R,index) => (
                    <div key={index}>
                        <img src={R.emoji} alt="emoji" />
                        <p>{R.text}</p>
                        <button onClick={(e)=>deleteRecords(index,e)}>Delete</button>
                    </div>
                    
                ))
            }

        </>

    );
};

export default Record