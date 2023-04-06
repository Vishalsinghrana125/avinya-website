import "./participate.css"
import rightbutton from "../../assets/Right Button.png"

export default function Participate(){ 

return(

    <div className="participate-section">
        <div className=" p-heading">
            <h2>Who may participate in the Avinya Partner Program?</h2>
        </div>
        <div className="part-menu">
            <div>
                <div className="part-item">
                <img src={rightbutton} alt="" />
                <p>Business Entrepreneur </p>
                </div>


                <div className="part-item">
                <img src={rightbutton} alt="" />
                <p>Teacher </p>
                </div>

                <div className="part-item">
                <img src={rightbutton} alt="" />
                <p>Coaching /Institute Owner </p>
                </div>


                <div className="part-item">
                <img src={rightbutton} alt="" />
                <p>Bloggers </p>
                </div>

                <div className="part-item">
                <img src={rightbutton} alt="" />
                <p>Youtubers </p>
                </div>

                <div className="part-item">
                <img src={rightbutton} alt="" />
                <p>Others </p>
                </div>
                        
              </div>
        </div>
    </div>
)
    
};
