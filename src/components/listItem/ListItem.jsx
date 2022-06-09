import { PlayArrow, ThumbUpAltOutlined ,Add, ThumbDownAltOutlined} from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"

export default function ListItem({index}) {

    const [isHovered,setIsHovered] = useState(false);
    const trailer= "https://vimeo.com/390338096";

  return (
    <div className="listItem"
            style={{left:isHovered && index *225 -50 + index*2.5}}
    
             onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
           <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />

            {isHovered && (
<>

           <video src={trailer} autoPlay={true} loop/>

           <div className="itemInfo">
              <div className="icons">
                 <PlayArrow className="icon"/>
                 <Add className="icon"/>
                 <ThumbUpAltOutlined className="icon"/>
                 <ThumbDownAltOutlined className="icon"/>

              </div>
              <div className="itemInfoTop">

                    <span>1 hour 14 mins</span>
                    <span className="limit">+16</span>
                    <span>1999</span>

              </div>
              <div className="desc">
                    Note: You can change the size of the container div if you do not want the image to fill the whole screen because the background image will only be visible based on the size of the container div
                    
              </div>
              <div className="genre">Action</div>
            </div></>
    

        )}
    </div>
  )
}
