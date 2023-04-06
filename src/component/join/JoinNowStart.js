import "./joinnow.css"
import vector from "../../assets/Vector (1).png"
import { Link } from "react-router-dom";

export default function JoinNow() {


    return (
        <>


            <div class="join-container">

                <div class="about-hedline">JOIN NOW</div>
                <div class="detail">
                    <h4>Hello. Proceed with the basics to Join  Now for Avinya App .</h4>
                    <h2 className="fill-heading">Fill Details</h2>
            </div>
         <div class="join-form-section">



                    <form className="join-form">
                        <div class="form-group">
                            <label for="Name">What is the name of your business?</label>
                            <input type="text" class="join-input" id="name" />
                        </div>
                        <div class="form-group ">
                            <label for="Description">Short Introduction about Your Businesss?</label>
                            <input type="text" class="join-input" id="Description" />
                        </div>
                        <div class="check">
                            <p class="check-label">What are the topics of your courses?</p>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck1" />
                                <label class="form-label" for="exampleCheck1">Academic</label>
                            </div>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck2" />
                                <label class="form-label" for="exampleCheck2">Languages</label>
                            </div>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck3" />
                                <label class="form-label" for="exampleCheck3">Software Training</label>
                            </div>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck4" />
                                <label class="form-label" for="exampleCheck4">Business</label>
                            </div>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck5" />
                                <label class="form-label" for="exampleCheck5">Marketing</label>
                            </div>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck6" />
                                <label class="form-label" for="exampleCheck6">Health Training</label>
                            </div>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck7" />
                                <label class="form-label" for="exampleCheck7">Personality Development </label>
                            </div>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck8" />
                                <label class="form-label" for="exampleCheck8">Yoga & Meditation</label>
                            </div>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck9" />
                                <label class="form-label" for="exampleCheck9">Stock Market</label>
                            </div>
                            <div class="form-check ">
                                <input type="checkbox" class="form-input" id="exampleCheck10" />
                                <label class="form-label" for="exampleCheck10">Other</label>
                            </div>

                        </div>
                        <div className="join-button">
                        <Link className="nav-link-title" to={"/join-now/joinnowmid"}>
          
                            <button className="join-next-button"> Next <img src={vector} alt="" width={10} /></button></Link>
                        </div>
                    </form>


                </div>
            </div>

        </>
    )
};
