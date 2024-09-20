import { Link } from "react-router-dom";
import FooterAll from "../../components/footer2";
import Navbar from "../../components/navbar";

export default function PrivacyPolicy(){
    return(
        <div>
            <Navbar />
            <div>
                <div class="emptyBox"></div>
                <div class="pageTitle py-5 bg-orange w-100">
                    <div class="container-lg">
                        <h1 class="display-4 mb-0">Privacy Policy</h1>
                    </div>
                </div>
                <div class="breadcrumbContainer">
                    <div class="container-lg">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                        </ol>
                    </div>
                </div></div>
                <div className="w-100 padding position-relative overflow-hidden">
      <div className="container-lg">
        <p className="text-serif">
          Saya Homes Pvt. Ltd. is committed to maintain the privacy and accuracy of information that has been provided on this site. All information is provided with the complete knowledge of owner and appropriate measures have been taken to ensure that user's credentials are not misused, accidentally destroyed or lost within the environment of Saya Homes Pvt. Ltd. Though care has been taken in the production of information on this website, Saya Homes Pvt. Ltd. will not be responsible and accept any liability for loss incurred in any way whatsoever, by anyone who may seek to depend on the information contained herein.
        </p>

        <div className="head-conditions">
          <h4 className="h3 text-serif">What this privacy policy covers</h4>
          <div className="list">
            <ul>
              <li>This Privacy Policy covers our usage of personally identifiable material that is shared by you on our site. This Policy also covers treatment of any personally identifiable information shared with us.</li>
              <li>The Privacy Policy Covers personally identifiable material that may be collected through the use of any app owned and operated by Saya Homes Pvt. Ltd.</li>
              <li>This Privacy Policy does not apply to the activities of organizations not owned or controlled by us, or to people who are not employed or managed by us as also in respect of information required to be shared with public/private authority by operation of any applicable law, court order or direction.</li>
            </ul>
          </div>

          <h4 className="h3 text-serif mt-4">Information collection and use</h4>
          <div className="list">
            <ul>
              <li>We use your personal information only for providing and improving the site. By using the site, you agree to the collection and use of information in accordance with this Privacy Policy.</li>
              <li>We compile personally identifiable information when you submit the enquiry form on our website or through interactions with our apps.</li>
              <li>While using our site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to your name.</li>
              <li>When you voluntarily send us electronic mail / fill up the form, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.</li>
              <li>When you submit a form, we ask for your name, email address and phone number apart from what you mention in your comments. Once the form is submitted and it reaches us, the information provided by you is saved in our database and is not shared with any third party.</li>
              <li>We use this information to revert to your query and future reference, and to contact you about products & services.</li>
              <li>Like many site operators, we collect information that your browser sends whenever you visit our site. This log data may include information such as your computer's internet protocol, IP address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</li>
              <li>Technical details such as device information, location and network carrier when you use our mobile app.</li>
            </ul>
          </div>

          <h4 className="h3 text-serif mt-4">The following information is collected</h4>
          <div className="list">
            <ul>
              <li>Information about you - Your personal information such as your name, gender, age, images, contact/ postal address, telephone, email id, nationality and content.</li>
              <li>Your payment details - Account and billing information.</li>
              <li>Our interactions with you - A record of any interactions and correspondence between us such as any interactions you have with our team members and any interactions with us online or posts that refer to us on social media.</li>
              <li>Survey information - Your responses to customer surveys conducted by us or on our behalf.</li>
              <li>Your use of our website, apps and social media platforms - Details of your visits to our website, your use of social media platforms and our mobile applications and other information collected through cookies and other tracking technology including information that you look at.</li>
              <li>Online Identifiers - such as your mobile device advertising identifier and geo-location data when using any SAYA HOMES mobile application.</li>
              <li>Geo-location data is used during registration process with SAYA HOMES apps to assist with delivering location specific services.</li>
            </ul>
          </div>

          <h4 className="h3 text-serif mt-4">Information sharing and disclosure</h4>
          <div className="list">
            <ul>
              <li>We do not sell, rent or share personally identifiable information made available to us.</li>
              <li>We share personally identifiable information to other companies or people only if:
                <ol className="list">
                  <li>We have consent to share the information; or we may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to court orders/summons/directions, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms of Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.</li>
                  <li> We find that your actions on our websites violate the Terms of Service</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
                <FooterAll/>
                </div>
    );
}