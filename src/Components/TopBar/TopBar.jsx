import "./TopBar.css";








const TopBar = () => {
  return (
   
    <div className="topbar-container">
        <div className="topbar-left">
            <div className="logo-left">
                <span className="logo">Video Game Query Machine</span>                
            </div>
        </div>
        <div className="topbar-center">
            <div className="logo-center">
            </div>
        </div>
        <div className="topbar-right">
            <div>
                <a href="https://devcodecamp.com/" target="_blank"><img src ="/images/devCodeCamp-Logo-12W.webp" className = "topbar-image" alt = "devCodeCamp Logo"/></a> 
            </div>

        </div>
    </div>

  );
};

export default TopBar;
