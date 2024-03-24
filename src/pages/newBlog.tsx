import React from 'react'
import Input from '@mui/material/Input';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import CodeIcon from '@mui/icons-material/Code';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import Button from '@mui/material/Button';
type Props = {}

function newBlog({}: Props) {
  return (
    <div className='container lg:max-w-720 mx-auto flex  flex-col'>
      <section className='border py-3'>
        <FormatBoldIcon />
        <FormatItalicIcon />
        <StrikethroughSIcon />
        <CodeIcon /> 
        <span className='border-l border-r px-3 mx-3'>
          <InsertLinkIcon/>
          <ImageIcon />
          <VideocamIcon />
        </span>
        <span>
        <FormatListBulletedIcon />
        <FormatListNumberedRtlIcon />
        </span>
      </section>
      <section className='flex justify-between'>
        <div>
          <h3>Back</h3>
        </div>
        <div className='right'>
          <Button className="mr-3" variant="outlined">Preview</Button>
         <Button variant="outlined">Continue</Button>
        </div>
      </section>
      <section className='flex flex-col'>
        <textarea className="h-6 mb-3 border-none" placeholder='New Title' />
        <textarea placeholder='New Subtitle' />
      </section>

      <div className='action'>

      </div>
      </div>
  )
}

export default newBlog
