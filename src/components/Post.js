import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar />
            <div className="post__info">
                <h4>{name}</h4>
                <p>{description}</p>

            </div>

        </div>
        <div className="post__body">
            <p>{message}</p>

        </div>
        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"
            color="gray"/>
             <InputOption Icon={ChatOutlinedIcon} title="Comment"
            color="gray"/>
             <InputOption Icon={RepeatOutlinedIcon} title="Repost"
            color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send"
            color="gray"/>


        </div>

    </div>
  )
}

export default Post