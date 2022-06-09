import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="Featured">
        {type && (
            <div className="category">
                  <span>{type === "movie" ? "Movies" : "Series"}</span>
                  <select name="genre" id ="genre">
                      <option>Genre</option>
                      <option value="adventure">Adventure</option>
                      <option value="comdey">Comedy</option>
                      <option value="crime">Crime</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="horror">Horror</option>
                      <option value="romance">Romance</option>
                      <option value="animation">Animation</option>
                      <option value="drama">Drama</option>
                      <option value="documentry">Documentry</option>
                  </select>
            
            </div>
        )}
        <img src="https://softauthor.com/wp-content/uploads/2021/08/CSS-Make-A-Background-Image-Fullscreen-1024x610.png" alt="" />
        
            <div className="info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyBVCHXM4m7n6zH5yOyMXpjUCL-3WOwJpBA&usqp=CAU" alt=""/>
                <span className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>

                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>

            </div>

      
    </div>
  )
}
