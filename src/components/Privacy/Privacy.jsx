import React from "react";
import "./Privacy.scss";

import privacyImg from "../../assets/images/privacy-blur.jpg";
import { Parallax } from "react-parallax";

const Privacy = () => {
  return (
    <div className="privacy__container">
      <div className="privacy__image">
        <Parallax
          blur={0}
          bgImage={privacyImg}
          bgImageAlt="about-image"
          strength={200}
        >
          <div className="about__content">
            <div className="about__title">Privacy Policy</div>
            <div className="about__description">
              At MassMoving, accessible from{" "}
              <a href="">https://www.massmoving.com</a>, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by MassMoving and how we use it. <br />
              <br /> If you have additional questions or require more
              information about our Privacy Policy, feel free to contact us
              through email at&nbsp;
              <span>info@mozartmoving.com</span>
            </div>
          </div>
        </Parallax>
      </div>
      <div className="privacy__text">
        <div className="privacy__box">
          <div className="privacy__box__title">Log Files</div>
          <div className="privacy__box__description">
            <span>MassMoving</span> follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services’ analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users’ movement on the website, and gathering
            demographic information.
          </div>
        </div>
        <div className="privacy__box">
          <div className="privacy__box__title">Privacy Policies</div>
          <div className="privacy__box__description">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of MassMoving. <br />
            <br /> Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Mozart Moving,
            which are sent directly to users’ browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit. <br />
            <br /> Note that <span>MassMoving</span> has no access to or control over these
            cookies that are used by third-party advertisers.
          </div>
        </div>
        <div className="privacy__box">
          <div className="privacy__box__title">
            Third Party Privacy Policies
          </div>
          <div className="privacy__box__description">
            <span>MassMoving’s Privacy Policy</span> does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You may find a complete list of
            these Privacy Policies and their links here: Privacy Policy Links.{" "}
            <br />
            <br />
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers’
            respective websites.
          </div>
        </div>
        <div className="privacy__box">
          <div className="privacy__box__title">Children’s Information</div>
          <div className="privacy__box__description">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.{" "}
            <br />
            <br />
            <span>MassMoving</span> does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </div>
        </div>
        <div className="privacy__box">
          <div className="privacy__box__title">Online Privacy Policy Only</div>
          <div className="privacy__box__description">
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in <span>MassMoving</span>. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
