export default function JoinNowMid() {

    return (

        <>
            <div class="container">
            <img src="/assets/image.jpg" class="img-fluid" alt="Responsive image" />
            </div>

            <div class="container py-3 my-3">
            <div class="about-hedline">JOIN NOW</div>
                <div class="detail">
                    <h4>Hello. Proceed with the basics</h4>
                    <h2 className="fill-heading">Fill Details</h2>
            </div>
                        <div class="row">
 
                                    <div class="panel-heading"><span class="previous-arrow" routerLink="/Join now"> </span> Fill This Details</div>

                                    <form className="join-mid-form">
                                        <div class="join-mid-input">
                                            

                                            <label for="floatingName">Your Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Enter Your Name " />
                                        </div>
                                        <div class="join-mid-input">
                                            

                                            <label for="floatingNumber">Mobile Number</label>
                                            <input type="Number" class="form-control" id="number" placeholder="Enter Your Mobile Number" />
                                        </div>
                                        <div class="join-mid-input">
                                            

                                            <label for="floatingEmail">Email ID</label>
                                            <input type="email" class="form-control" id="email" placeholder="Enter Your Email Id" />
                                        </div>
                                        <div class="join-mid-input">
                                                                                        <label for="floatingAddress">Address</label>
                                            <textarea class="form-control" id="floatingAddress" rows="3"
                                                placeholder="Enter Your Address"></textarea>
                                        </div>
                                        <div class="join-mid-input">
                                            
                                            <label for="floatingCity">City</label>
                                            <input type="text" class="form-control" id="City" placeholder="Enter Your City" />
                                        </div>

                                    </form>
                                                 </div>
                    </div>
                </>
                )
    
};
