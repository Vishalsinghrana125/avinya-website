import cash from '../../assets/Cash.svg'
import adduser from '../../assets/add-user.png'
import thumb from '../../assets/Good Quality.png'

export default function EnrollProcess() {

    return(

        <div className='feature-arena'>
        <div className='feature-card'>
          <img src={adduser} alt="Feature Img" height="50" />
          <h2>Register</h2>
          <div>We invite you to register for the Avinya Partner Program with referral information if you have a strong network of coaching centre and institution owners or an online educator.</div>
        </div>

        <div className='feature-card'>
          <img src={thumb} alt="Feature Img" height="50" />
          <h2>Recommend</h2>
          <div>Encourage trainers and academic institutions in your connection to use the Avinya app. Make us the news of the town and include us in his adventure if you want to.</div>
        </div>

        <div className='feature-card'>
          <img src={cash} alt="Feature Img" height="50" />
          <h2>earning </h2>
          <div>Receive compensation for the App promotions you were successful in making.</div>
        </div>

       
      </div>
    )
    
};
