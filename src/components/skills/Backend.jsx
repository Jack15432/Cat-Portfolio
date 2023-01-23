import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Backend = () => {

  const sectionRef = useRef(null);
  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(el, {x: 30}, {x: 0, scrollTrigger: {
      trigger: el,
      scrub: true,
      start: "top bottom",
      end: "10px",
      toggleActions: "restart pause reverse pause"
    }})
  });

  return (
    <div ref={sectionRef} className="skills__content">
      <h3 className="skills__title">Appearance</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Breed</h3>
              <span className="skills__level">Munchkin Cat</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Body Size</h3>
              <span className="skills__level">Small</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Height</h3>
              <span className="skills__level">Short legs</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Relationship Status</h3>
              <span className="skills__level">Single</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Salary</h3>
              <span className="skills__level">20K</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-analyse"></i>
            <div>
              <h3 className="skills__name">Color</h3>
              <span className="skills__level">Black and White</span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Backend