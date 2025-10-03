import React from 'react'
import TextPressure from './TextPressure';
import TextType from './TextType';

const HeroDescription = () => {
    return (
        <div className='flex w-[692px] h-[800px] flex-col justify-start items-left gap-[10px] shrink[0]'>
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
            minFontSize={50}
            />

            <TextPressure
            text="I'm Alvito"
            flex={true}
            alpha={true}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000"
            strokeColor="#ff0000"
            minFontSize={50}
            />

            <TextType 
            text={["Software Engineer", "Fullstack Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            />

            <p className='mt-[10px] text-black text-[1.75rem] font-medium leading-[130.22%]'>
            I’m a passionate Software Engineer dedicated to building modern and user-friendly web applications.
            My focus is on clean, efficient code and seamless user experiences.
            I strive to transform ideas into impactful digital solutions.
            </p>
        </div>
    )
}

export default HeroDescription;