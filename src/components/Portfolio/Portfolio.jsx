import React, { useEffect, useState } from "react";
import { GreenPort } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Popup.css"
import Image1 from '../../assets/portfolio/web3/image1.png';
import Image2 from '../../assets/portfolio/web3/image2.png';
import Image3 from '../../assets/portfolio/web3/image3.png';
import Image4 from '../../assets/portfolio/web3/image4.png';
import Image5 from '../../assets/portfolio/web3/image5.png';
import Image6 from '../../assets/portfolio/web3/image6.png';
import Web1 from '../../assets/portfolio/web2/image1.jpeg';
import Web2 from '../../assets/portfolio/web2/image2.jpeg';
import Web3 from '../../assets/portfolio/web2/image3.jpeg';
import Web4 from '../../assets/portfolio/web2/image4.jpeg';
import Web5 from '../../assets/portfolio/web2/image5.jpeg';
import Web6 from '../../assets/portfolio/web2/image6.jpeg';






function RightMark() {
  return (
    <svg
      width="40"
      height="13"
      viewBox="0 0 56 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="11.8226" x2="55" y2="11.8226" stroke="black" stroke-width="3" />
      <line
        y1="-1.5"
        x2="14.788"
        y2="-1.5"
        transform="matrix(0.712194 0.701983 -0.35431 0.935128 44.3549 3)"
        stroke="black"
        stroke-width="3"
      />
    </svg>
  );
}

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [openedURL, setOpenedURL] = useState('');
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // const URLs ={
  //   'https://res.cloudinary.com/doqgoey64/image/upload/v1689932478/portfolio/111111111111111_i3zdzu.png',
  // };
  const URLs = [
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948587/darwin/111111111111111_nb5wrz.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948674/darwin/2222222222_sdaocx.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948933/darwin/3333333333_cqvu9r.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948933/darwin/444444444444_nklwng.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948934/darwin/55555555555_cb5ern.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948934/darwin/66666666666666_upin3f.png',
  ]
  const URLs2 = [

  ]

  return (
    <>
      {/* <div className="flex flex-col w-full max-w-7xl  static my-[200px] z-20"> */}
      <div className={`flex flex-col w-full max-w-7xl  static my-[20px] z-20 ${isOpen ? 'blur popupAni' : ''} mx-auto`} id="portfolio">
        <div className="mx-[100px] z-10 PortInside">
          <div className=" boxHead  z-10 " data-aos="fade-down">
            <h1 className="mb-5">WHAT WE CREATED</h1>
            <p>
              我々がこれまでに手がけたサービスやシステムの例をご覧ください。基本的にIT領域{" "}
              <br />{" "}
              のソリューションであれば、ほとんどすべてお受けすることができます。
            </p>
          </div>
          <div className="my-[100px] z-10 Port" data-aos="fade-up">
            <div className="flex items-center ">
              <div className="boxHead w-[400px] ">
                <h1 className="text-[48px]">Web2.0</h1>
              </div>
              <div
                className={`boxPort bg-no-repeat bg-center bg-cover`}
                // style={{ background: `url(${Web1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
                // className="boxPort bg-[url('https://res.cloudinary.com/doqgoey64/image/upload/v1689932478/portfolio/111111111111111_i3zdzu.png')] bg-no-repeat bg-center bg-cover"
                onClick={() => {
                  setIsOpen(true);
                  setOpenedURL(Web1);
                  console.log(openedURL);
                }}
              >
                <img src={Web1} className="portImg" alt="" />
                <RightMark className="rightIcon  bg-white" />
              </div>

              <div className="boxPort "
                // style={{ background: `url(${Web2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
                onClick={() => {
                  setIsOpen(true);
                  setOpenedURL(Web2);
                  console.log(openedURL);
                }}
              >
                <img src={Web2} className="portImg" alt="" />
                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>

            <div className="flex items-center">
              <div className="boxPort "
                // style={{ background: `url(${Web3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
                onClick={() => {
                  setIsOpen(true);
                  setOpenedURL(Web3);
                  console.log(openedURL);
                }}>
                  <img src={Web3} className="portImg" alt="" />
                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort "
                // style={{ background: `url(${Web4})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
                onClick={() => {
                  setIsOpen(true);
                  setOpenedURL(Web4);
                  console.log(openedURL);
                }}>
                  <img src={Web4} className="portImg" alt="" />
                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>

            <div className="flex items-center ml-[100px] PortMR">
              <div className="boxPort "
                // style={{ background: `url(${Web5})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
                onClick={() => {
                  setIsOpen(true);
                  setOpenedURL(Web5);
                  console.log(openedURL);
                }}>
                  <img src={Web5} className="portImg" alt="" />
                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort "
                 
                onClick={() => {
                  setIsOpen(true);
                  setOpenedURL(Web6);
                  console.log(openedURL);
                }}>
                  <img src={Web6} className="portImg" alt="" />
                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>
          </div>
          <div className="my-[100px] z-10 Port" data-aos="fade-up">
            <div className="flex items-center ">
              <div className="boxHead w-[400px] ">
                <h1 className="text-[48px]">Web3.0</h1>
              </div>
              <div className="boxPort"
              // style={{ background: `url(${Image1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(Image1);
                console.log(openedURL);
              }}
              >
                <img src={Image1} className="portImg" alt="" />
                
                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort "
              // style={{ background: `url(${Image2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(Image2);
                console.log(openedURL);
              }}
              >
                <img src={Image2} className="portImg" alt="" />

                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>
            <div className="flex items-center ">
              <div className="boxPort "
              // style={{ background: `url(${Image3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(Image3);
                console.log(openedURL);
              }}
              >
                <img src={Image3} className="portImg" alt="" />

                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort "
              
              // style={{ background: `url(${Image4})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(Image4);
                console.log(openedURL);
              }}>
                <img src={Image4} className="portImg" alt="" />

                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>
            <div className="flex items-center ml-[100px] PortMR">
              <div className="boxPort "
              // style={{ background: `url(${Image5})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(Image5);
                console.log(openedURL);
              }}
              >
                <img src={Image5} className="portImg" alt="" />

                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort "
              // style={{ background: `url(${Image6})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(Image6);
                console.log(openedURL);
              }}
              >
                <img src={Image6} className="portImg" alt="" />

                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 z-0 ">
          <img src={GreenPort} alt="no img" className="w-[800px] h-auto" />
        </div>

      </div>


      {isOpen && (
        // later we will be adding url dynamically- hard coded for now

        <div className={setIsOpen?'popup-content rounded-xl popupAni': 'popup-content rounded-xl'}
         >
          <div className={setIsOpen?' popupeddAni': ''}>
          <img src={openedURL} className="popupImg" alt="" />
          {/* <div className="popup-content rounded-xl bg-[url('https://res.cloudinary.com/doqgoey64/image/upload/v1689932478/portfolio/111111111111111_i3zdzu.png')] bg-no-repeat bg-center bg-cover"> */}
          <span onClick={() => { setIsOpen(false); setOpenedURL('') }} className="close-icon">
            &times;
          </span>
          </div>
            
        </div>
      )}


    </>
  );
}
