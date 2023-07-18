import React, { Fragment } from 'react'

const Emotions = ({images}) => {
    
    return (
        <>
            {
                images.map((image, index) => (
                    <div>

                        <input type="radio" name="emotions" id={index} value={index} />
                        <label htmlFor={index}>
                            <img src={image} alt="emoji" />
                        </label>

                    </div>

                ))
            }


        </>
    )

}

export default Emotions