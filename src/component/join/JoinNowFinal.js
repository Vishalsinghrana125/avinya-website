import "./joinnowfinal.css"

export default function JoinNowFinal() {
    return(
        <>


<div class="container py-3 my-3">
    <div class="title text-center text-primary">JOIN NOW</div>
        <div class="detail text-center text-dark">
            Hello. Proceed with the basics.
    </div>
    <div class="row">
        <div class="col-md-12 ">
            <div class="panel panel-primary py-5 px-5">
        
                    <div className="about-hedline">Fill This Details </div>
                

                <form>
                    <div class="check ">
                        <div class="check-title">Do you currently teach online?</div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck1"/>
                            <label class="form-label" for="exampleCheck1">Yes, I teach, but in an offline
                                manner.</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck2"/>
                            <label class="form-label" for="exampleCheck2">Yes, I teach in an Online
                                manner.</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck3"/>
                            <label class="form-label" for="exampleCheck3">Yes i teach via videos and webinar but
                                not published course yet</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck4"/>
                            <label class="form-label" for="exampleCheck4">No, I plan to launch online
                                courses.</label>
                        </div>
                        <div class="check-title">What is the size of your audience?</div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck1"/>
                            <label class="form-label" for="exampleCheck1">0-10</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck2"/>
                            <label class="form-label" for="exampleCheck2">10-50</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck3"/>
                            <label class="form-label" for="exampleCheck3">50-100</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck4"/>
                            <label class="form-label" for="exampleCheck4">100-500</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck5"/>
                            <label class="form-label" for="exampleCheck5">500-1000</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck6"/>
                            <label class="form-label" for="exampleCheck6">More Than 1000</label>
                        </div>
                        <div class="check-title">Do you have a website for your business?</div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck1"/>
                            <label class="form-label" for="exampleCheck1">Yes</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck2"/>
                            <label class="form-label" for="exampleCheck2">No</label>
                        </div>
                        <div class="check-title">Do you have a logo for your business?</div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck1"/>
                            <label class="form-label" for="exampleCheck1">Yes</label>
                        </div>
                        <div class="form-check ">
                            <input type="checkbox" class="form-input" id="exampleCheck2"/>
                            <label class="form-label" for="exampleCheck2">No</label>
                        </div>
                    </div>
                    <div className="join-button">
                            <button className="join-submit"> Submit</button>
                        </div>
                    
                </form>
            </div>
        </div>
    </div>
</div>
</>
    )
    
};
