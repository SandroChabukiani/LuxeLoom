const HomeSectionTen = () => {
  return (
    <div className="HSTenCont">
      <div className="HSTenHeaderDiv">
        <div className="lineOneT"></div>
        <h2 style={{color: 'gray'}}>LUXELOOM</h2>
        <div className="lineTwoT"></div>
      </div>
      <div className="HSTenContentDiv">
        <div className="HSTenButtons">
          <button>How to shop?</button>
          <button>FAQS</button>
          <button>Need help?</button>
        </div>
        <div className="HSTenMiniContent">
          <h2>Want to stay stylishly in the know?</h2>
          <p>
            Subscribe to the FARFETCH to recieve an extra 15% off your next
            order! You’ll also be the first to know about our exclusive new
            arrivals, latest trends and upcoming promotions.{" "}
          </p>
          <input type="email" id="email" placeholder="Enter your email address"/>
          <input type="submit" id="subscribe" value="Subscribe" />
          {/* <div className="HSTenInpSub">
            <input type="email" id="" />
            <input type="submit" value="Subscribe" />
          </div> */}
        </div>
      </div>
      <div className="bottonLine"></div>
    </div>
  );
};

export default HomeSectionTen;
