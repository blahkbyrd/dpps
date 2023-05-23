import React, { useEffect } from 'react'
import SplitType from 'split-type'

const CircleText = (props) => {

    useEffect(() => {
        const splittedText = new SplitType(".split");
        console.log(splittedText.chars);

    }, [])
    return (
        <p className='split'>{props.text}</p>
    )
}

export default CircleText