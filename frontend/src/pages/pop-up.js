import React, { useState, useEffect } from 'react';

function PopUp() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showLogoPopup, setShowLogoPopup] = useState(false);

  useEffect(() => {
    // Show disclaimer modal on component mount if cookie is not present
    const cookies = document.cookie.split('; ');
    const sessionCookie = cookies.find(row => row.startsWith('jquery_popup='));
    if (!sessionCookie) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAgreeClick = () => {
    // Hide the disclaimer modal
    setShowDisclaimer(false);
    // Set cookie
    const d = new Date();
    d.setTime(d.getTime() + (2 * 60 * 60 * 1000)); // 2 hours
    const expires = "expires=" + d.toGMTString();
    document.cookie = `jquery_popup=sessionexists; ${expires}`;
    // Show the logo popup modal
    setShowLogoPopup(true);
  };

  const handleLogoCloseClick = () => {
    setShowLogoPopup(false);
  };

  return (
    <div>
      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="modal testim-modal fade bd-example-modal-xl" id="disclaimersaya" tabIndex="-1" role="dialog" aria-labelledby="sapnaModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow rounded-0">
              <div className="modal-body p-0">
                <div className="content">
                  <div className="row m-0">
                    <div className="col-sm-12 p-0">
                      <div className="content-view">
                        <div className="disclaimerbody p-3">
                          <h5 className="modal-title mt-3">DISCLAIMER</h5>
                          <p><small>This disclaimer (“Disclaimer”) will be applicable to the Website. By using or accessing the Website you agree with the Disclaimer without any qualification or limitation. The Company reserves the right to add, alter or delete material from the Website at any time and may, at any time, revise these Terms without notifying you.</small></p>
                          {/* Additional disclaimer text here */}
                          <div className="viewmore">
                            <button className="button stroke bg-orange text-white" onClick={handleAgreeClick}>I Agree</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logo Popup Modal */}
      {showLogoPopup && (
        <div className="modal testim-modal fade bd-example-modal-xl" id="sayalogopopup" tabIndex="-1" role="dialog" aria-labelledby="sapnaModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow rounded-0">
              <button type="button" className="close d-flex align-items-center justify-content-center" onClick={handleLogoCloseClick} aria-label="Close">
                <span aria-hidden="true" className="ion-ios-close">×</span>
              </button>
              <div className="modal-body p-0">
                <div className="content">
                  <div className="row m-0">
                    <div className="col-sm-12 p-0">
                      <div className="content-view">
                        <a href="https://sayasouthx.com/biztop/" target="_blank" rel="noopener noreferrer">
                          <img src="images/POP-UP5824.webp" alt="Saya Homes" title="Saya Homes" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other modals can be added here */}
    </div>
  );
}

export default PopUp;
