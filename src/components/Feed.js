import React, {  useState } from 'react'
import "./feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';





function Feed() {
    
   
    const [posts] = useState([]);


   
const sendPost = e => {
    e.preventDefault();
     
    
      
    
    
}

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
       
            <div className="feed__input">
                <CreateIcon />
            
            <form>
                <input  type="text" />
                <button onClick={sendPost} type="submit">Send</button>
            </form>             
               

            </div>
            <div className="feed__inputOptions">
            
            
            <InputOption Icon={ImageIcon} title="Photo"
                color="#70B5f9" />
              
                <InputOption Icon={SubscriptionsIcon} title="Video"
                color="#E7A33E" />
                
                <InputOption Icon={EventNoteIcon} title="Event"
                color="#C0CBCD" />
             
                <InputOption Icon={CalendarViewDayIcon} title="Write Article"
                color="#7FC15E" />


            </div>

        </div>

        {/* Posts */}
        {posts.map((post) =>(
            <Post/>

        ))}


<Post name="Mohammad Anfal V P" description="Solidity | Blockchain | Ethereum" 
        message="Really glad that I got the opportunity to attend one of the sessions of Raj Kapoor who is the Founder of India Blockchain Alliance, the largest Indian Emerging technology tech think tank."/>

<Post name="Mohammad Anfal V P" description="Solidity | Blockchain | Ethereum" 
        message="Really glad that I got the opportunity to attend one of the sessions of Raj Kapoor who is the Founder of India Blockchain Alliance, the largest Indian Emerging technology tech think tank."/>
    </div> 
  )
}

export default Feed;












































































































































