import React, {useState} from "react";
import '../src/home.css';
import logo from '../src/pic/visa.png';
import CreditCardForm from '../src/CreditCardForm';
import MobileNumberModal from '../src/mobilenumber';
import brand from '../src/pic/Screenshot 2024-02-29 232157.png';
import Footer from './Footer';
import Footer2 from "./Footer2";
import SavingsIcon from '../src/pic/2617812.png';
import Acc from '../src/pic/9186315.png';
import emg from '../src/pic/1976848.png';
import sec from '../src/pic/security-high-symbolic-icon-1793x2048-29b4a8wi.png';
import wealth from '../src/pic/7403315.png';



const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleExploreRewards = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

    const handleSendMobileNumber = (mobileNumber) => {
      
      console.log("Sending mobile number:", mobileNumber);
    };
    return (
      <div className="container">
        
        <nav>
          <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
            <ul>
            <li className="header"><a href="/home">Home</a></li>
            <li className="header"><a href="/home">credit score check</a></li>
            <li className="header"><a href="/home">CRED pay</a></li>
            
            
            </ul>
        </nav>
        
        <div className="content">
          <h1>Rewards for paying credit card bills</h1>
          <p>Join 9M+ members who win rewards and cashbacks everyday</p>
          <button>Download Card</button>
          </div>
            <CreditCardForm /> 
            <div className="content1">
          <h1>Financial Planning Made</h1>
          <h2>Faster And Simpler</h2>
          <p>The map to your financial goals!</p>
          <div className="icon-row">
        <div className="icon-item">
        <img src={SavingsIcon} alt="icon" />
          <p>Identify And Achieve 
            Your Financial Goals</p>
        </div>
        <div className="icon-item">
        <img src={Acc} alt="icon" />
          <p>Achieve Better Living Standards</p>
        </div>
        <div className="icon-item">
        <img src={emg} alt="icon" />
          <p>Be Ready For Emergencies Retire With </p>
        </div>
        <div className="icon-item">
        <img src={sec} alt="icon" />
          <p>Retire With Security</p>
        </div>
        <div className="icon-item">
        <img src={wealth} alt="icon" />
          <p>Increase Wealth Considering Inflation</p>
        </div>
      </div>
          <button>More to know</button>
          </div>
            <div className="background-container">
          <div className="background-content">
          <h1>feel special
more often.</h1><h2>exclusive rewards for paying your bills</h2>
            <p>every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.</p>
            <button className="background-content-button" onClick={handleExploreRewards}>Explore rewards</button>
          </div>
        </div>
        
        {showModal && <MobileNumberModal onClose={handleCloseModal} onSend={handleSendMobileNumber} />}
        <div className="Brand">
          <img src={brand} alt="Logo" />
        </div>
        <div className="background-container2">
          <div className="background-content">
          <h1>we take your money
matters seriously.</h1><h2>so that you don’t have to.
</h2>
            <p>never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.</p>
            <button className="background-content-button" onClick={handleExploreRewards}>Explore rewards</button>
          </div>
        </div>
        
        {showModal && <MobileNumberModal onClose={handleCloseModal} onSend={handleSendMobileNumber} />}
        <div className="about">
            <div className="about smaller-text">
            <h2>about Nonith</h2>
            <p>Nonith is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. Nonith members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on Nonith.</p>
            <br>
            </br>
            <h2>how does Nonith reward their users?</h2>
            <p>Nonith partners with the best premier and luxury brands to bring you an unmatched experience at the end of every credit card bill payment cycle.</p>
            <br>
            </br>
            <h2>how to earn rewards on Nonith?</h2>
            <p>members can earn rewards in two different ways. Nonith coins & gems.

            Nonith Coin Rewards:

- when you pay your credit card bill on Nonith, for every rupee cleared on your bill you earn a Nonith coin.

- you can then use earned Nonith coins to claim exclusive rewards from different brands.

Nonith Gem Rewards:

- for every person that you refer to Nonith who makes a bill payment, you earn 10 gems.</p>
            <br>
            </br>
            <h2>what do you get as a Nonith Member?</h2>
            <p>as a Nonith member, you instantly make your credit card payment experience hassle-free by unlocking several perks only available to Nonith members.

- seamless bill payment experience through modes like upi, net banking and debit cards

- timely credit card bill payment reminders

- automate your credit card bill payments

- expose hidden charges on your credit card with Nonith protect

- get real-time alerts on duplicate transactions on your credit card

- manage multiple credit cards on a single portal

- keep a realtime check on your credit score</p>
            <br>
            </br>
            <h2>how does one become a member of Nonith?</h2>
            <p>you can apply to be a member by signing up on Nonith with your name and valid mobile number(issued within India). Nonith is India’s most trustworthy and creditworthy community. This means we are selective about the members we take. For membership an Experian credit score of 750 or above is mandatory.</p>
            <br>
            </br>
            <h2>how to know your credit score?</h2>
            <p>upon becoming a member, you can check and refresh your credit score with a single click. Nonith then proceeds to acquire your updated credit score through a CIBIL score soft inquiry. on Nonith, you can access your credit score data anytime without any extra charges. as a member, this helps you keep regular checks on your credit score and re-evaluate your spending patterns to maintain a healthy credit status. Nonith offers Equifax credit score checker, find your CRIF credit score for free, Experian credit score checker for free.

banks supported on</p>
            <br>
            </br>
            </div>

        </div>
        
        
        <Footer />
        <Footer2/>
      </div>
        
    );
  };
  
  export default Home;