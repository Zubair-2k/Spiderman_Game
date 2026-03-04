import "./Download.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Download = ({startDownloadAnimation}) => {
    const downloadRef = useRef(null);
    const [isSpidermanComing, setIsSpidermanComing] = useState(false) 

    useGSAP(()=>{
        if(!startDownloadAnimation) return;

        const tl1= gsap.timeline({
            scrollTrigger:{
                trigger: downloadRef.current,
                start: "-30%",
                end: "-20%",
            }
            ,onComplete: () => {
                setIsSpidermanComing(true);
            }
        });

        tl1.from(".downloadContentHeader",{
            opacity:0,
            x: -30,
            duration:0.3
        },"downloadAnimate")
        tl1.from(".downloadContentText",{
            opacity:0,
            y: -10,
            duration:0.5,
            // delay: -0.2
        })
        tl1.from(".downloadBtn",{
            opacity:0,
            y: 10,
            duration:0.7,
            // delay: -0.2
        })
        tl1.from(".spidermanDownloadBgImg",{
            opacity:0,
            duration:1,
        },"downloadAnimate")

        tl1.from(".spidermanDownloadBgImgUpdated",{
            opacity:0,
            duration:1,
        },"downloadAnimate")

    },[startDownloadAnimation])

    useLayoutEffect(()=>{
        if(!isSpidermanComing) return; 

        const tl2= gsap.timeline();

        tl2.to(".downloadSpidermanImg",{
            top:230,
            duration: 2.8,
            ease: "elastic.out(1,0.55)",
        })
        .to(".downloadSpidermanImg",{
            rotation: 2,
            transformOrigin: "top center",
            duration:2,
            // delay:1,
            ease: "sine.inOut",
            // repeat: -1,
            // yoyo: true
        })
        .to(".downloadSpidermanImg",{
            rotation: -2,
            transformOrigin: "top center",
            duration:2,
            ease: "sine.inOut",
            // repeat: -1,
            // yoyo: true
        })
        .to(".downloadSpidermanImg",{
            rotation: 5,
            transformOrigin: "top center",
            duration:2,
            // delay:1,
            ease: "sine.inOut",
            // repeat: -1,
            // yoyo: true
        })
        .to(".downloadSpidermanImg",{
            rotation: -5,
            transformOrigin: "top center",
            duration:2,
            ease: "sine.inOut",
            // repeat: -1,
            // yoyo: true
        })
        .to(".downloadSpidermanImg",{
            rotation: 8,
            transformOrigin: "top center",
            duration:2,
            // delay:1,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        })
        .to(".downloadSpidermanImg",{
            rotation: -7,
            transformOrigin: "top center",
            duration:2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });


        const ctx = gsap.context(()=>{

            const mm = gsap.matchMedia();

            mm.add("(min-width: 1200px)",() => {
                gsap.to(".downloadSpidermanImg" ,
                {
                    top:260,
                    duration: 2.8,
                    ease: "elastic.out(1,0.55)",
                })

                
            })

            mm.add("(max-width: 1199px)", () => {
                gsap.to(".downloadSpidermanImg", {
                    top:230,
                    duration: 2.8,
                    ease: "elastic.out(1,0.55)",
                });
    
            });

        });

        return ()=> ctx.revert();
        
    },[isSpidermanComing]);

  return (
    <div className="download" ref={downloadRef}>
        <div className="downloadImg">
            <img src="/Spiderman_Download_Img_updated_2.png" alt="Spiderman_Download_Bg_Img" className="spidermanDownloadBgImgUpdated"/>
            <img src="/DownloadSpidermanBgImg_1.png" alt="Spiderman_Download_Bg_Img" className="spidermanDownloadBgImg"/>
            <img src="/DownloadSpidermanColorEnchancedImg.png" alt="DownloadSpiderman" className="downloadSpidermanImg"/>
            {/* <img src="/DownloadSpidermanImg.png" alt="DownloadSpiderman" className="downloadSpidermanImg"/> */}
        </div>

        <div className="downloadDetails">

            <div className="downloadContentHeader">
                The City Needs a Hero
            </div>
            <div className="downloadContentText">
                Step into the suit of Spider-Man and protect the city from dangerous enemies.
                Swing across towering skyscrapers, master lightning-fast acrobatic combat, and uncover hidden threats lurking in every corner.
                Every mission brings you closer to becoming the hero the city truly needs.

            </div>
            {/* <button className="downloadBtn">Download Now</button> */}

            
                <a href="https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/" target="blank" className="downloadBtn">
                    Play Now
                </a>
    
        </div>
    
    </div>
  )
}

export default Download