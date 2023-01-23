import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Frontend = () => {

  const sectionRef = useRef(null);
  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(el, {x: -30}, {x: 0, scrollTrigger: {
      trigger: el,
      scrub: true,
      start: "top bottom",
      end: "10px",
      toggleActions: "restart complete reverse pause"
    }})
  });


  return (
    <div ref={sectionRef} className="skills__content">
      <h3 className="skills__title">Living Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Sleeping</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Eating</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Hunting</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Fighting</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Swimming</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Attitude</h3>
              <span className="skills__level">-1000000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
