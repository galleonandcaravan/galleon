import React from 'react';
import MainContent from '../../components/MainContent';
import PropTypes from "prop-types";
import ImagesSwitcher from "../../components/ImagesSwitcher";

const Safeguarding = ({ switcherImagesVisible }) => (
  <div className="safeguarding" id="page-safeguarding">
    <MainContent
      title=""
    >
      <p>When funds are posted to your account, e-money is issued in exchange for these funds, by an Electronic Money Institution who we work with, called Currencycloud. In line with regulatory requirements, Currencycloud safeguards your funds. This means that the money behind the balance you see in your account is held at a reputable bank, and most importantly, is protected for you in the event of Currencycloud’s, or our, insolvency. Currencycloud stops safeguarding your funds when the money has been paid out of your account to your beneficiary’s account.
      </p>
    </MainContent>

    <ImagesSwitcher
      imageTopClassName="expertise__image-top"
      imageBottomClassName="expertise__image-bottom"
      switcherImagesVisible={switcherImagesVisible}
    />
  </div>
);

Safeguarding.propTypes = {
  switcherImagesVisible: PropTypes.bool,
}

Safeguarding.defaultProps = {
  switcherImagesVisible: false,
}

export default Safeguarding;
