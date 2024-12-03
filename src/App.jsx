import React, { useState } from 'react'
import Checked from '../src/assets/Checked.svg'
import Checking from '../src/assets/Checking.svg'
import Down_Arrow from '../src/assets/Down_Arrow.svg'
import edit from '../src/assets/edit.svg'
import Habot from '../src/assets/Habot.svg'
import Dark from '../src/assets/Dark_Region.svg'
import List from '../src/assets/List.svg'
import location from '../src/assets/location.svg'
import Main_Image from '../src/assets/Main_Image.svg'
import person from '../src/assets/person.svg'
import quote_request from '../src/assets/quote_request.svg'
import Right_Arrow from '../src/assets/Right_Arrow.svg'
import shakehand from '../src/assets/shakehand.svg'
import suitcase from '../src/assets/suitcase.svg'
import Youtube from '../src/assets/Youtube.svg'
import Habot_latest from '../src/assets/Habot_latest.svg'
import styles from './app.module.css'


const YouTubeVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={styles.videoContainer}>
      {!showVideo ? (
        <img
          src={Youtube}
          alt="Play Video"
          className={styles.videoThumbnail}
          onClick={handleThumbnailClick}
        />
      ) : (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IZLp-TZyDkQ"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};


function App() {
  return (
    <div>
      <div className={styles.start} >
        <img src={Habot} className={styles.habotimage} />

        <div className={styles.start1} >
          <p className={styles.starttext} >Find Suppliers</p>
          <p className={styles.starttext} >Find Service Tags</p>
          <img src={Down_Arrow} className={styles.down_image} />
          <button className={styles.login_button} >Login / Sign Up</button>
        </div>

      </div>

      <div className={styles.Image_Area} >
        <img src={Main_Image} className={styles.Main_Image} />
        <div className={styles.top} >
          <p className={styles.p1} >Are You a Supplier?</p>
          <p className={styles.p2} >Explore Matching Opportunities.</p>
          <br />

          <div className={styles.inputsections} >
            <input type="text" placeholder='Search your required service here' className={styles.input} />
            <img src={suitcase} className={styles.suitcase} />
            <input type="text" placeholder='Search your desired location here' className={styles.input} />
            <img src={location} className={styles.location} />
            <button className={styles.search} >Search</button>
          </div>

          <p className={styles.p3} >Are you a buyer?  <a href="" className={styles.p4}> click here if you are looking to post a requirements </a> </p>
        </div>
      </div>

      <div className={styles.important_region} >
        <div className={styles.box_region} >
          <p className={styles.b1} >Ready to dive into HABOT?</p>
          <br />
          <p className={styles.para} >Signing up with Habot opens the doors to the new Opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources,
            and take the first step towards realising your entrepreneurial dreams
          </p>
          <br />
          <button className={styles.signup} >Sign up Today ! <img className={styles.rightarrow} src={Right_Arrow} /> </button>
        </div>

        <div className={styles.boxes} >
          <button className={styles.box} >Abu Dhabi</button>
          <button className={styles.box} >Dubai</button>
          <button className={styles.box} >Sharjah & Ajman</button>
          <button className={styles.box} >Fujairah</button>
          <button className={styles.box} >Ras AI Khaimah</button>
          <button className={styles.box} >Umm AI Quwain</button>
        </div>
      </div>

      <div className={styles.dark_region} >
        <img src={Dark} className={styles.dark_image} />
        <div className={styles.video} >
          <YouTubeVideo />
        </div>
      </div>

      <div className={styles.small_section} >
        <p className={styles.small_text} >Let Suppliers Find You</p>
        <hr className={styles.reqline} />
        <button className={styles.verified} >Get Verified</button>
      </div>

      <div>
        <p className={styles.work} >How it works?</p>

        <p className={styles.work1} >Buyers post their needs and review top suppliers, while suppliers complete
          profiles, connect with potential buyers, and build successful business
          relationships, sharing valuable feedback.
        </p>
      </div>

      <div className={styles.images_section} >
        <div className={styles.inner_images1} >
          <img src={person} />
          <p className={styles.imagetext} >Select your role and
            sign up
          </p>
        </div>

        <div className={styles.inner_images} >
          <img src={Checked} />
          <p className={styles.imagetext}>Buyers post your
            requirements
          </p>
        </div>

        <div className={styles.inner_images3} >
          <img src={Checking} />
          <p className={styles.imagetext}>Review, Select and Contact the
            Best Suppliers
          </p>
        </div>

        <div className={styles.inner_images} >
          <img src={edit} />
          <p className={styles.imagetext}>Suppliers Complete your profile and
            get notified for opportunities
          </p>
        </div>

        <div className={styles.inner_images5} >
          <img src={quote_request} />
          <p className={styles.imagetext}>Contact to Buyers and Share your
            Quote for the service
          </p>
        </div>

        <div className={styles.inner_images} >
          <img src={shakehand} />
          <p className={styles.imagetext}>Both the Parties can Connect and Make
            Business Leave a Feedback
          </p>
        </div>
      </div>

      <div className={styles.final_section} >

        <hr className={styles.line} />

        <div className={styles.final_content} >

          <div className={styles.final_habot} >
            <img src={Habot_latest} />
            <div className={styles.container} >
              <p className={styles.circle_text} >c</p>
              <p className={styles.text} > R Singhania</p>
            </div>
          </div>

          <div className={styles.final_text} >
            <div  >
              <p className={styles.text1} >Company</p>
              <p className={styles.text}>About</p>
              <p className={styles.text}>FAQ</p>
            </div>

            <div>
              <p className={styles.text1}>Terms</p>
              <p className={styles.text}>Data Privacy</p>
              <p className={styles.text}>Terms</p>
              <p className={styles.text}>Accessbility</p>
            </div>

            <div>
              <p className={styles.text1}>Related</p>
              <p className={styles.text}>Find Buyer</p>
              <p className={styles.text}>Feedback</p>
            </div>
          </div>

          <img src={List} className={styles.lastimage} />
        </div>

        <hr className={styles.line} />

      </div>

    </div>


  )
}

export default App