import React from 'react';
import MButton from './MButton'


export default {
    title: 'UI/Button',
    component:MButton
}

const MButtonStory = ({...args})=> <MButton {...args} />

export const Button = MButtonStory.bind({})