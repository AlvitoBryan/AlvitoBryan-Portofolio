import React from 'react'
import TextPressure from './TextPressure';

const HeroDescription = () => {
    return (
        <div className='flex w-[692px] h-[800px] flex-col justify-center items-center gap-[10px] shrink[0]'>
            <TextPressure
            text="Hello!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={false}
            italic={true}
            textColor="#000000"
            strokeColor="#ff0000"
            minFontSize={36}
            />
            <p>hello</p>
        </div>
    )
}

export default HeroDescription;