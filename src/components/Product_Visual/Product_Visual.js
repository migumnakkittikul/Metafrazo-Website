import logo from './../../logo.svg';
import './Product_Visual.css';
import { useState } from 'react';

function Header() {

  const [activeLanguage, setActiveLanguage] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveLanguage(buttonId);
  };

  return (
    <div className="ProductVisual" id="product-demo">
      <header className="ProductVisual-header">
        <div className="left-box" style = {{display:'flex', flexDirection:'column', justifyContent:'space-evenly', width:'fit-content', height:'100%'}}>
          <p style={{color:'white',fontSize:'20px', marginBottom:"20px"}}>English</p>
          <div className='video-container'>
            <video style={{marginBottom: "20px"}} width="200" height="360" controls>
              <source src={'/GiannisEnglish.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
        <div className = "vertical-bar">
        </div>
        <div className="right-box" style = {{display:'flex', flexDirection:'column',justifyContent:'space-evenly', width: 'fit-content', height: '100%', marginTop: '5px'}}>
          <div style = {{display:'flex', justifyContent:'space-evenly', fontSize:'20px', marginBottom:"22px"}}>
            <button className={activeLanguage === 1 ? 'demo-button' : 'underlined-demo-button'} onClick={() => handleButtonClick(1)} >Japanese</button>
            <button className={activeLanguage === 2 ? 'demo-button' : 'underlined-demo-button'} onClick={() => handleButtonClick(2)} >Mandarin</button>
            <button className={activeLanguage === 3 ? 'demo-button' : 'underlined-demo-button'} onClick={() => handleButtonClick(3)} >Spanish</button>
          </div>
          <div className='video-container'>
            {activeLanguage === 1 && <video width="200" height="360" controls>
              <source src={'/GiannisJapanese.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>}
            {activeLanguage === 2 && <video width="200" height="360" controls>
              <source src={'/GiannisMandarinChinese.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>}
            {activeLanguage === 3 && <video width="200" height="360" controls>
              <source src={'/GiannisSpanish.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

