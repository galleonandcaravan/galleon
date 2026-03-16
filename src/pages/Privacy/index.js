import React from 'react';
import PropTypes from "prop-types";
import ModalContent from '../../components/ModalContent';
import ImagesSwitcher from '../../components/ImagesSwitcher';

const Complaints = ({ switcherImagesVisible, isActive }) => (
  <div className="privacy" id="page-privacy">
    <ModalContent
      title="Privacy policy"
      toggleModal={() => {
        window.location.href = '';
      }}
      isActive={isActive}
    >
      <p>
        We are required to handle information which we hold about you that is capable of identifying you (either alone or with any other information we may hold about you) in accordance with the Data Protection Act 1998 (“the Act”), which regulates the use of “personal data” in the United Kingdom. You have the right under the Act to ask us in writing for details concerning the “personal data” we hold about you, including a description of that data, the purposes for which it is being used and to whom that data has been or may be disclosed. You can find out more about the Act and your rights by visiting the website of the Information Commissioner at <a href='http://www.ico.gov.uk/'>www.ico.gov.uk.</a>. The Information Commissioner’s Office can also be contacted by telephone on 08456 306060.
      </p>
      <p>
        We use your information only in accordance with this Privacy Policy and take all steps reasonably necessary to ensure we keep your information secure. We may collect your information when you indicate that you would like to receive any of our products and services, when you register with us, when you complete forms online, when you speak with us over the telephone, when you write to us and when you visit our website. We will collect details of transactions you carry out through our site and of the fulfilment of such transactions.
      </p>
      <p>
        We may have to share your information with a government body or regulatory authority, with the police or other law enforcement agencies, or with other persons or bodies by order of a court or to meet a legal or regulatory requirement or for other lawful reasons, such as for taxation or audit purposes; or with credit control or debt collection agencies. We will not normally share your information with anyone else unless we need to do so to provide you with our products or services which you use or unless you have asked us to do so.
      </p>
      <p>
        We may share your information with members of The Currencycloud group of companies where we need to do so to provide you with any of the products or services you have requested. Please read the <a href='https://www.currencycloud.com/legal/privacy/'>Currencycloud Privacy Policy</a>. All data in relation to Currencycloud accounts are retained fora period of 5 years.
      </p>
      <p>
        If you have any questions about the Currencycloud Privacy Policy or your information, please contact them in writing by email <a href='mailto:compliance@currencycloud.com'>compliance@currencycloud.com</a> or by post to the Compliance Officer, Currencycloud, 1 Sheldon Square, London, W2 6TT
      </p>
    </ModalContent>
    <ImagesSwitcher
      imageTopClassName="contact__image-top"
      imageBottomClassName="contact__image-bottom"
      switcherImagesVisible={switcherImagesVisible}
    />
  </div>
);

Complaints.propTypes = {
  switcherImagesVisible: PropTypes.bool,
  isActive: PropTypes.bool,
}

Complaints.defaultProps = {
  switcherImagesVisible: false,
  isActive: false,
}

export default Complaints;
