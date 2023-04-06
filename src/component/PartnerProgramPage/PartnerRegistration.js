import "./PartnerRegistration.css"
import phone from "../../assets/phone.svg"

export default function PartnerRegistration() {

    return (

        <>

            
            <div class="container">
                <div class="form mx-3 my-3 py-5 px-5">
                    <div class="title">
                        Avinya Partner Program Registration
                    </div>
                    <form>
                        <div class="row ">
                            <label for="name" class="col-sm-2  col-form-label1">Name</label>
                            <div class="col-sm-10">
                                <i class="icon fa-solid fa-user fa-lg"></i>
                                <input type="text" class="form-control" id="name" />
                            </div>
                        </div>
                        <div class="row ">
                            <label for="email" class="col-sm-2 col-form-label1">Email</label>
                            <div class="col-sm-10">
                                <i class="icon fa-solid fa-envelope fa-lg"></i>
                                <input type="text" class="form-control" id="email" />
                            </div>
                        </div>
                        <div class="row ">
                            <label for="number" class="col-sm-2 col-form-label1">Mob.no</label>
                            <div class="col-sm-10">
                               
                                <input type="number" class="form-control" id="number" />
                            </div>
                        </div>
                        <div class="row ">
                            <label for="text" class="col-sm-2 col-form-label1">City</label>
                            <div class="col-sm-10">
                                <i class="icon fa-sharp fa-solid fa-location-dot fa-lg"></i>
                                <input type="text" class="form-control" id="city" />
                            </div>
                        </div>
                        <div class="row ">
                            <label for="text" class="col-sm-2 col-form-label1">State</label>
                            <div class="col-sm-10">
                                <select class="form-control my-1 mr-sm-2" id="Pref">
                                    <option selected>State</option>
                                    <option value="1">Andhra Pradesh</option>
                                    <option value="2">Arunachal Pradesh</option>
                                    <option value="3">Assam</option>
                                    <option value="4">Bihar</option>
                                    <option value="5">Chhattisgarh</option>
                                    <option value="6">Goa</option>
                                    <option value="7">Gujarat</option>
                                    <option value="8">Haryana</option>
                                    <option value="9">Himachal Pradesh</option>
                                    <option value="10">Jammu and Kashmir</option>
                                    <option value="11">Jharkhand</option>
                                    <option value="12">Karnataka</option>
                                    <option value="13">Kerala</option>
                                    <option value="14">Madhya Pradesh</option>
                                    <option value="15">Maharashtra</option>
                                    <option value="16">Manipur</option>
                                    <option value="17">Meghalaya</option>
                                    <option value="18">Mizoram</option>
                                    <option value="19">Nagaland</option>
                                    <option value="20">Orissa</option>
                                    <option value="21">Punjab</option>
                                    <option value="22">Rajasthan</option>
                                    <option value="23">Sikkim</option>
                                    <option value="24">Tamil Nadu</option>
                                    <option value="25">Tripura</option>
                                    <option value="26">Uttarakhand</option>
                                    <option value="27">Uttar Pradesh</option>
                                    <option value="28">West Bengal</option>
                                    <option value="29">Tamil Nadu</option>
                                    <option value="30">Tripura</option>
                                    <option value="31">Andaman and Nicobar Islands</option>
                                    <option value="32">Chandigarh</option>
                                    <option value="33">Dadra and Nagar Haveli</option>
                                    <option value="34">Daman and Diu</option>
                                    <option value="35">Delhi</option>
                                    <option value="36">Lakshadweep</option>
                                    <option value="37">Pondicherry</option>
                                </select>
                            </div>
                        </div>
                        <div class="row ">
                            <label for="text" class="col-sm-2 col-form-label1">Referral Name </label>
                            <div class="col-sm-10">
                                <i class="icon fa-solid fa-user fa-lg"></i>
                                <input type="text" class="form-control" id="Referral Name " />
                            </div>
                        </div>
                        <div class="row">
                        <label for="text" class="col-sm-2 col-form-label1 ">Referral Work As </label>
                            <div class="col-sm-10">
                            
                                <div class="row">
                               
                                    <div class="col-sm-10">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label class="form-check-label" for="gridCheck1"> A content creator </label>

                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-sm-10">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label class="form-check-label" for="gridCheck1">coaching center </label>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-sm-10">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label class="form-check-label" for="gridCheck1">
                                            create & sell online courses
                                        </label>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-sm-10">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label class="form-check-label" for="gridCheck1">
                                            Teach in School/College
                                        </label>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-sm-10">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label class="form-check-label" for="gridCheck1">
                                            not an educator/content creator
                                        </label>
                                    </div>
                                </div>
                            </div></div>
                            <div class="row ">
                                <label for="number" class="col-sm-2 col-form-label1">Referral Mob </label>
                                <div class="col-sm-10">
                                    <i class="icon fa-solid fa-mobile fa-lg"></i>
                                    <input type="number" class="form-control" id="Referral Number" />
                                </div></div>
                            <div class="row ">
                                <label for="email" class="col-sm-2 col-form-label1">Referral Email</label>
                                <div class="col-sm-10">
                                    <i class="icon fa-solid fa-envelope fa-lg"></i>
                                    <input type="text" class="form-control" id="email" />
                                </div>
                            </div>
                            <div class="row ">
                                <label for="text" class="col-sm-2 col-form-label1">Referral City</label>
                                <div class="col-sm-10">
                                    <i class="icon fa-sharp fa-solid fa-location-dot fa-lg"></i>
                                    <input type="text" class="form-control" id="city" />
                                </div>
                            </div>
                            <div class="row ">
                                <label for="text" class="col-sm-2 col-form-label1">Referral State</label>
                                <div class="col-sm-10">
                                    <select class="form-control my-1 mr-sm-2" id="Pref">
                                        <option selected>State</option>
                                        <option value="1">Andhra Pradesh</option>
                                        <option value="2">Arunachal Pradesh</option>
                                        <option value="3">Assam</option>
                                        <option value="4">Bihar</option>
                                        <option value="5">Chhattisgarh</option>
                                        <option value="6">Goa</option>
                                        <option value="7">Gujarat</option>
                                        <option value="8">Haryana</option>
                                        <option value="9">Himachal Pradesh</option>
                                        <option value="10">Jammu and Kashmir</option>
                                        <option value="11">Jharkhand</option>
                                        <option value="12">Karnataka</option>
                                        <option value="13">Kerala</option>
                                        <option value="14">Madhya Pradesh</option>
                                        <option value="15">Maharashtra</option>
                                        <option value="16">Manipur</option>
                                        <option value="17">Meghalaya</option>
                                        <option value="18">Mizoram</option>
                                        <option value="19">Nagaland</option>
                                        <option value="20">Orissa</option>
                                        <option value="21">Punjab</option>
                                        <option value="22">Rajasthan</option>
                                        <option value="23">Sikkim</option>
                                        <option value="24">Tamil Nadu</option>
                                        <option value="25">Tripura</option>
                                        <option value="26">Uttarakhand</option>
                                        <option value="27">Uttar Pradesh</option>
                                        <option value="28">West Bengal</option>
                                        <option value="29">Tamil Nadu</option>
                                        <option value="30">Tripura</option>
                                        <option value="31">Andaman and Nicobar Islands</option>
                                        <option value="32">Chandigarh</option>
                                        <option value="33">Dadra and Nagar Haveli</option>
                                        <option value="34">Daman and Diu</option>
                                        <option value="35">Delhi</option>
                                        <option value="36">Lakshadweep</option>
                                        <option value="37">Pondicherry</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row ">
                                <label for="text" class="col-sm-2 col-form-label1">Referral Code</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="code" placeholder="Avinya-101" />
                                </div>
                            </div>
                            <div class="button text-center">
                                <button className="reg-btn">Register</button>
                            </div>

                    </form>
                </div >
            </div >
        </>
    )

};
