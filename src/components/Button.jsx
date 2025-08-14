import { Box, Button } from '@mantine/core';
import React from 'react'

const button = ({ title, id, leftIcon, rightIcon, containerClass }) => {
  return (
    <>
        <Button 
        radius={'xl'}
        id={id}
        className={`group relative z-10 w-fit cursor-pointer
                   overflow-hidden !bg-violet-50 px-7 py-3 
                   !text-black ${containerClass}`}>{leftIcon}
            <span className='relative incline-flex overflow-hidden
            font-general text-xs uppercase'>
                <Box>
                    {title}
                </Box>
            </span>

            {rightIcon}
        </Button>
    </>
  )
}

export default button