import React from 'react';
import MProgress from './Progress'


export default {
    title: 'UI/Progress',
    component:MProgress
}

const MProgressStory = ({...args})=> <MProgress {...args} />

export const Progress = MProgressStory.bind({})