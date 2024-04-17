import React from 'react';
import PropTypes from "prop-types";
import MainContent from '../../components/MainContent';
import ImagesSwitcher from "../../components/ImagesSwitcher";

const Complaints = ({ switcherImagesVisible }) => (
  <div className="complaints" id="page-complaints">
    <MainContent
      title=""
    >
      <p>We are your first port of call for any queries or concerns, including complaints. We will handle these complaints in line with our complaints process.</p>
      <p>
        If you wish to submit a complaint, please contact <a href='mailto:hello@galleonandcaravan.com'>hello@galleonandcaravan.com</a> or call us on 02080755665, and we will send you a Complaints Register to fill out and return to us. You will then be contacted within one business day, confirming that your complaint is being considered and advising you of next steps. We endeavour to finally resolve all complaints within fifteen business days.
      </p>
      <p>
        We work with Currencycloud, who ultimately provides you with regulated payments and e-money services. Currencycloud has certain obligations as a regulated financial services institution, including around complaints. We keep them informed of the complaints we receive from you regarding the regulated payments and e-money services they ultimately provide to you. They oversee how we handle complaints to ensure we do this to the standard required under the regulations. However, if for any reason your complaint regarding your payments and e-money services has not been acknowledged or dealt with by us, or if you have concerns about the way it has been handled, Currencycloud’s complaints information can be found <a href='https://www.currencycloud.com/legal/complaints-procedure/'>here</a>.
      </p>
    </MainContent>

    <ImagesSwitcher
      imageTopClassName="expertise__image-top"
      imageBottomClassName="expertise__image-bottom"
      switcherImagesVisible={switcherImagesVisible}
    />
  </div>
);

Complaints.propTypes = {
  switcherImagesVisible: PropTypes.bool,
}

Complaints.defaultProps = {
  switcherImagesVisible: false,
}

export default Complaints;
