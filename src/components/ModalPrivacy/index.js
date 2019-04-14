import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Portal } from 'react-portal';
import './styles.css';

class ModalPrivacy extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    activeBlock: PropTypes.string,
    togglePopup: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isOpen: false,
    activeBlock: ''
  };

  state = {
    activeBlock: ''
  };

  constructor(props) {
    super(props);

    this.modal = React.createRef();
    this.privacy = React.createRef();
    this.security = React.createRef();
    this.terms = React.createRef();
  }

  componentDidMount() {
    const { state, props } = this;
    if (props.isOpen && props.activeBlock !== state.activeBlock) {
      this.scrollToActiveBlock();
    }
  }

  componentDidUpdate() {
    const { state, props } = this;
    if (props.isOpen && props.activeBlock !== state.activeBlock) {
      this.scrollToActiveBlock();
    }
  }

  scrollToActiveBlock = () => {
    const { activeBlock } = this.props;
    this.setState({ activeBlock });
    this.modal.current.scrollTop = this[activeBlock].current.offsetTop - 60;
  };

  render() {
    const { togglePopup, isOpen } = this.props;

    return (
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal-privacy"
        unmountOnExit
      >
        <Portal>
          <div className="modal-privacy" ref={this.modal}>
            <div className="modal-privacy__container">
              <div
                className="modal-privacy__close"
                onClick={() => togglePopup('')}
              />
              <div className="modal-privacy__paragraph" ref={this.privacy}>
                <span className="modal-privacy__title">Privacy</span>

                <span className="modal-privacy__text">
                  Galcar Limited (t/a Galleon & Caravan) and Ebury Partners UK Limited (“We”, “Us” or “Our”) are committed to protecting and respecting your privacy.
                  <br /><br />
                  As part of Our normal business operation We collect certain personal information from Our clients. This policy sets out the basis on which We process any such personal information that We collect or that you provide to Us. Please read this policy carefully to understand Our practices regarding your personal information.
                  <br /><br />
                  By visiting www.ebury.com, online.ebury.com or bos.eburypartners.com (“Our sites”) you are accepting and consenting to the practices described in this policy.
                  <br /><br />
                  For the purpose of the General Data Protection Regulation (the “Regulation”):
                  <br /><br />
                  <b>Data Controller</b><br />
                  Ebury Partners UK Limited,<br />
                  100 Victoria Street,<br />
                  London, SW1E 5JL.<br />
                  Telephone: +44 (0) 20 3872 6670<br />
                  Email: info@ebury.com<br />
                  <br /><br />
                  <b>Data Protection Officer</b><br />
                  Ben de la Salle, Ebury Partners UK Limited,<br />
                  100 Victoria Street, London, SW1E 5JL.<br />
                  Telephone: +44 (0) 20 7197 9900<br />
                  Email: dpo@ebury.com<br />
                  <br /><br />

                  You may contact Our Data Protection Officer directly with any enquiries relating to Data Protection.
                  <br /><br />
                  You have the right to lodge a complaint with your Supervisory Authority. For the purpose of Our processing the lead Supervisory Authority is:
                  <br /><br />
                  <b>Lead Supervisory Authority</b><br />
                  Information Commissioner’s Office<br />
                  Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom<br />
                  Telephone: +44 (0) 303 123 1113<br />
                  Email: casework@ico.org.uk<br />
                  Website: https://ico.org.uk
                  <br /><br /><br />
                  <b>We may collect and process the following data about you:</b>
                  <br /><br />
                  <b>Information you give Us.</b>
                  <br /><br />

                  • You may give Us information about you by filling in forms on Our sites or by corresponding with Us by phone, e-mail or otherwise. This includes information you provide when you register to use Our sites, subscribe to Our services, place an order or transact on Our sites or report a problem with Our sites. The information you give Us may include your name, address, e-mail address and phone number, financial and credit information.
                  <br className="modal-privacy__break-big" />
                  • You may give Us information relating beneficiaries, shareholders, trustees and directors to enable us to deliver Our services. This may be through filling in forms on Our sites or by corresponding with Us by phone, e-mail or otherwise. You must obtain appropriate consent before disclosing such information to Us. The information you give Us may include their name, address, e-mail address and phone number, financial and credit information.
                  <br /><br /><br />
                  <b>Information We collect about you.</b>
                  <br /><br />
                  With each visit to Our sites We may automatically collect the following information:
                  <br /><br />
                  •  technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform;
                  <br className="modal-privacy__break-big" />
                  •  information about your visit, including the full Uniform Resource Locators (URL) clickstream to, through and from Our sites (including date and time); products you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page and any phone number used to call Our customer service number.
                  <br /><br /><br />
                  <b>Information We receive from other sources.</b>
                  <br /><br />
                  We may receive information about you if you use any other websites We operate or other services We provide. This data may be shared internally and combined with data collected on this site. We are also working closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, credit reference agencies) and may receive information about you from them. Where this is the case We will ensure this will be in full compliance of the Regulation.
                  <br /><br /><br />
                  <b>Cookies</b>
                  <br /><br />
                  We follow the “Implied Consent” basis for processing cookies. The first time you visit Our sites We will inform you of the cookies We use and that by continuing to browse Our sites you are implying your consent for Us to use cookies.
                  <br /><br />
                  A cookie is a very small text file placed on your computer, that allows Us to distinguish you from other users of Our sites. These cookies help Us to provide you with a good experience when you browse Our sites. We use the following cookies:
                  <br /><br />
                  •  Strictly necessary cookies. These are cookies that are required for the operation of Our sites. They include, for example, cookies that enable you to log into secure areas of Our sites.
                  <br className="modal-privacy__break-big" />
                  • Analytical/performance cookies. They allow Us to recognise and count the number of visitors and to see how visitors move around Our sites when they are using them. This helps Us to improve the way Our sites work, for example, by ensuring that users are finding what they are looking for easily.
                  <br className="modal-privacy__break-big" />
                  • Functionality cookies. These are used to recognise you when you return to Our sites. This enables Us to personalise Our content for you, by remembering your preferences (for example, your choice of language or region).
                  <br /><br />
                  Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which We have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.
                  <br /><br />
                  You may block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of Our sites.
                  <br /><br /><br />
                  <b>How We use your information</b>
                  <br /><br />
                  Information you give to Us. – We will use this information:
                  <br /><br />
                  • to carry out Our obligations arising from any contracts entered into between you and Us and to provide you with the information, products and services that you request from Us;
                  <br className="modal-privacy__break-big" />
                  • to provide you with information about other products and services We offer;
                  <br className="modal-privacy__break-big" />
                  •  where you are an existing customer, We will only contact you with information about goods and services similar to those which were the subject of a previous sale or negotiations of a sale to you.
                  <br className="modal-privacy__break-big" />
                  •  where you are a new customer, We will contact you only if you have consented to this. If you do not want Us to use your data in this way, please tick the relevant box situated on the form on which We collect your data.
                  <br className="modal-privacy__break-big" />
                  • You may withdraw this consent at any time by using the links provided at the bottom of marketing emails from Us, or by contacting Our DPO.to provide you with information about other products and services We offer;
                  <br className="modal-privacy__break-big" />
                  • to notify you about changes to Our service;
                  <br className="modal-privacy__break-big" />
                  • to respond to any enquiry you have made through Our sites, or via phone, e-mail or otherwise.
                  <br className="modal-privacy__break-big" />
                  •  to comply with legal obligations We are subject to as a data controller and regulated business
                  <br className="modal-privacy__break-big" />
                  •  where required to protect your vital interests or that of another natural person
                  <br className="modal-privacy__break-big" />
                  •  where performing tasks carried out in the public interest or in the exercise of official authority invested in Us
                  <br /><br /><br />
                  <b>Information We collect about you. – We will use this information:</b>
                  <br /><br />
                  •  to administer Our sites and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;
                  <br className="modal-privacy__break-big" />
                  •  to improve Our sites to ensure that content is presented in the most effective manner for you and for your computer;
                  <br className="modal-privacy__break-big" />
                  •  to allow you to participate in interactive features of Our services, when you choose to do so;
                  <br className="modal-privacy__break-big" />
                  •  as part of Our efforts to keep Our sites safe and secure;
                  <br className="modal-privacy__break-big" />
                  •  to measure or understand the effectiveness of advertising We serve to you and others, and to deliver relevant advertising to you;
                  <br /><br /><br />
                  <b>Information We receive from other sources. – We will use this information:</b>
                  <br /><br />
                  We may combine this information with information you give to Us and information We collect about you. We may use this information and the combined information for the purposes set out above (depending on the types of information We receive).
                  <br /><br /><br />
                  <b>Information We disclose about you</b>
                  <br /><br />
                  We may share your personal information with any member of Our group, which means Our branches, Our representative offices, Our subsidiaries, Our ultimate holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006. Any such sharing will be made in full compliance with the Regulation.We will never sell your personal data without your consent. We may share your information with selected third parties. Where this is necessary, We are required to comply with all aspects of the Regulation.The following are the types of organisations We may share some of your personal information with:
                  <br /><br />
                  •  Business partners, suppliers and sub-contractors for the performance of any contract We enter into with them or you.
                  <br className="modal-privacy__break-big" />
                  •  Analytics and search engine providers that assist Us in the improvement and optimisation of Our sites.
                  <br className="modal-privacy__break-big" />
                  •  Credit reference agencies for the purpose of assessing your credit score where this is a condition of Us entering into a contract with you.We may disclose your personal information to third parties:
                  <br className="modal-privacy__break-big" />
                  •  In the event that We sell or buy any business or assets, in which case We may disclose your personal information to the prospective seller or buyer of such business or assets.
                  <br className="modal-privacy__break-big" />
                  •  If Ebury Partners UK Limited or substantially all of its assets are acquired by a third party, in which case personal information held by it about its customers will be one of the transferred assets.
                  <br className="modal-privacy__break-big" />
                  •  If We are under a duty to disclose or share your personal information in order to comply with any legal obligation, or in order to enforce or apply Our Terms of Use or Terms and Conditions and other agreements; or to protect the rights, property, or safety of Us, Our group companies, customers or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.
                  <br /><br /><br />
                  <b>Where We store your personal information</b>
                  <br /><br />
                  The data that We collect from you may be transferred to, and stored at, a destination outside the European Economic Area (“EEA”). It may also be processed by staff operating outside the EEA who work for Us or for one of Our suppliers. Such staff may be engaged in, among other things, the fulfilment of your order, the processing of your payment details and the provision of support services. When these transfers are needed, they will be done in full compliance of the Regulation.
                  <br /><br />
                  All your personal information will be afforded a high level of protection wherever it is processed and no matter whether it is held by Us, or Our contractors or agents.
                  <br /><br />
                  All information you provide to Us is stored under Our control. Any payment transactions will be encrypted. Where We have given you (or where you have chosen) a password which enables you to access certain parts of Our site, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.
                  <br /><br />
                  Unfortunately, the transmission of information via the internet is not completely secure. Although We will do Our best to protect your personal information, We cannot guarantee the security of your data transmitted to Our site; any transmission is at your own risk. Once We have received your information, We will use strict procedures and security features to try to prevent unauthorised access.
                  <br /><br />
                  Should you have particular concerns about a method of data transmission, We will take reasonable steps to provide an alternative method.
                  <br /><br /><br />
                  <b>Your rights</b>
                  <br /><br />
                  You may contact Our Data Protection Officer, dpo@ebury.com, to exercise your rights. When exercising your rights We will always inform you of any lawful reason that may require Us to continue processing your data.
                  <br /><br />
                  You have the right to request from Us information about whether we process your personal information, and ask questions about how We collect, store and process that information.
                  <br /><br />
                  You have the right to access free information about the personal information We hold about you, whether this is transferred to a third country or international organisation and the associated safeguards.
                  <br /><br />
                  You have the right to receive any personal data We hold about you in a commonly used and machine-readable format.
                  <br /><br />
                  Where information We hold is not accurate or is incomplete, you have the right to request We correct such information and We will do so without undue delay.
                  <br /><br />
                  You have the right to request that We delete any data We process about you, where there the processing is no longer necessary.
                  <br /><br />
                  Where you have previously provide consent for Our processing of your data, you have the right to remove that consent and for Us to stop processing your data specific to that consent. You also have the right to object to Our processing of your data.
                  <br /><br /><br />
                  <b>External Sites</b>
                  <br /><br />
                  Our site may, from time to time, contain links to and from the websites of Our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that We do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal information to these websites.
                  <br /><br /><br />
                  <b>Retaining your Data</b>
                  <br /><br />
                  The period for which We will retain your data is dependent upon any statutory retention periods We are required to adhere to as a regulated organisation. After the expiration of that period, personal data shall be securely deleted, as long as it is no longer required for the fulfilment of any contract, initiation of a contract or in relation to other legal proceedings.
                </span>
              </div>

              <div className="modal-privacy__paragraph" ref={this.security}>
                <span className="modal-privacy__title">Security</span>

                <span className="modal-privacy__text">
                  Galleon and Caravan take security and compliance seriously. Our payment providers have invested heavily into maintaining the strictest levels of security throughout their infrastructure.
                  <br /><br /><br />

                  We chose to partner with Ebury Partners UK Limited because they are one of the best funded FinTech firms in Europe, having received over $83m in investment to accelerate growth and innovation. They offer deep levels of liquidity, seamless operational capabilities and strict security measures, ensuring a safe and reliable service.
                  <br /><br /><br />

                  Ebury Partners UK Ltd is authorised and regulated by the Financial Conduct Authority as an Electronic Money Institution (Ref. Number: 900797, <a target="_blank" href="https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000003pvOlCAAU">click here</a> for further information). As such, client funds are always held in segregated accounts, entirely separate from their own operating accounts. Your funds are completely ring-fenced, secure and can never be claimed by any creditors. This means that, in the unlikely event of Ebury’s insolvency, your funds will be fully protected and an administrator will reimburse you from the safeguarded funds.
                  <br /><br /><br />

                  The FCA requires standards to be met across three areas and Ebury exceeds all three of these standards of capital adequacy, client protection and robust internal risk management. For further information on our security credentials and processes, please don’t hesitate to contact us.
                </span>
              </div>

              <div className="modal-privacy__paragraph" ref={this.terms}>
                <span className="modal-privacy__title">Terms & Conditions</span>

                <span className="modal-privacy__text">
                  Galleon & Caravan is the trading name of Galcar Limited, a company registered in England and Wales (no. 11656491) and whose registered office is at Flat 15, 1 Bramshaw Road, London, E9 5BF. Galleon & Caravan's payment, foreign currency exchange services and e-money accounts are provided by Ebury Partners UK Limited. Ebury Partners UK Limited is authorised and regulated by the Financial Conduct Authority as an Electronic Money Institution (no. 900797).
                  <br /><br /><br />
                  <b>PART A: BACKGROUND</b>
                  <br /><br />
                  1. OUR RELATIONSHIP WITH YOU
                  <br /><br />
                  1.1 The Ebury Relationship Agreement (the “Agreement”) comprises terms and conditions governing the relationship between the person (acting in the course of business or a profession which it carries on) named in the Application Form (the “Customer”, “you”, “your”) and Ebury Partners UK Limited (“Ebury” “us”, “we”, “our”), that apply to certain of our products and services. Such products and services allow you to:
                  <br className="modal-privacy__break-big" />
                  1.1.1 load funds onto an e-money account;
                  <br className="modal-privacy__break-big" />
                  1.1.2 make payments to one or more Beneficiaries nominated by you; and
                  <br className="modal-privacy__break-big" />
                  1.1.3 enter into foreign exchange transactions (including spots and commercial forwards), collectively, the “Services”.
                  <br className="modal-privacy__break-big" />
                  1.2 The following documents are incorporated into and form part of the Agreement:
                  <br className="modal-privacy__break-big" />
                  1.2.1 the terms and conditions set out in this document (the “Terms”);
                  <br className="modal-privacy__break-big" />
                  1.2.2 if you are a Micro-Enterprise or a Small Charity, the Schedule to these Terms; and
                  <br className="modal-privacy__break-big" />
                  1.2.3 any terms and conditions set out in the Application Form.
                  <br className="modal-privacy__break-big" />
                  We will provide you with separate terms and conditions for any services that fall outside the scope of the Agreement.
                  <br /><br />
                  1.3 We recommend that you retain a copy of all of the documents that make up the Agreement. If you would like a copy, you can contact us (using the details at Clause 12.1). You can also find a copy of the latest version of these terms and conditions on our website.
                  <br className="modal-privacy__break-big" />
                  1.4 In the event of any conflict:
                  <br className="modal-privacy__break-big" />
                  1.4.1 any terms and conditions in the Application Form shall prevail over the provisions of the Schedule and the terms and conditions of this Agreement; and
                  <br className="modal-privacy__break-big" />
                  1.4.2 if you are a Micro-Enterprise or a Charity, the provisions of the Schedule shall prevail over the terms and conditions of this Agreement.
                  <br className="modal-privacy__break-big" />
                  1.5 These Terms are divided into four separate parts:
                  <br className="modal-privacy__break-big" />
                  1.5.1 Part A sets out the terms and conditions governing our relationship with you;
                  <br className="modal-privacy__break-big" />
                  1.5.2 Part B sets out the specific terms governing your E-Money Account with us (and any Orders you may place using that E-Money Account);
                  <br className="modal-privacy__break-big" />
                  1.5.3 Part C sets out the specific terms governing the FX Services which we provide, including Spots and Forwards; and
                  <br className="modal-privacy__break-big" />
                  1.5.4 Part D sets out some general information and other importance terms governing the Agreement.
                  <br /><br /><br />
                  2. DEFINITIONS AND INTERPRETATION<br /><br />
                  2.1 Where the words set out below are used with capital letters in these Terms, they mean as follows:
                  <br className="modal-privacy__break-big" />
                  2.1.1 “Affiliate” means, in relation to a Party, every company that is (a) at the relevant time Controlled by, Controls or is under common Control with such Party; and (b) listed in the Application Form.
                  <br className="modal-privacy__break-big" />
                  2.1.2 “Applicable Laws” means any applicable law, statute, regulation or legally binding requirement or order as interpreted taking appropriate account of regulatory policy, guidance or industry code, relating to either of the parties or subject matter in question, including (as amended from time to time) (i) the EMRs; (ii) the PSRs; (iii) the UK Money Laundering Regulations 2017; (iv) the Proceeds of Crime Act 2002; the UK Terrorism Act 2000 (as amended); and (v) UK and international financial sanctions regimes.
                  <br className="modal-privacy__break-big" />
                  2.1.3 “Application Form” means Part 1 of the Application Form, any supplemental terms and any other information submitted by you therein.
                  <br className="modal-privacy__break-big" />
                  2.1.4 “Authorised Party” means any natural person listed by a director, partner or other principal as an “Authorised Party” in Part 1 of the Application Form.
                  <br className="modal-privacy__break-big" />
                  2.1.5 “Beneficiary” means you or any third party payee which you include in your Order.
                  <br className="modal-privacy__break-big" />
                  2.1.6 “Beneficiary Account” means the bank account to which you are sending funds.
                  <br className="modal-privacy__break-big" />
                  2.1.7 “Business Day” means a day on which banks are open for general banking business in the City of London.
                  <br className="modal-privacy__break-big" />
                  2.1.8 “Charity” means – as defined in Regulation 2(1) PSRs – a body whose annual income is less than £1 million and is—
                  <br className="modal-privacy__break-big" />
                  (a) in England and Wales, a charity as defined by section 1(1) of the Charities Act 2011;
                  <br className="modal-privacy__break-big" />
                  (b) in Scotland, a charity as defined by section 106 of the Charities and Trustee Investment (Scotland) Act 2005; and
                  <br className="modal-privacy__break-big" />
                  (c) in Northern Ireland, a charity as defined by section 1(1) of the Charities Act (Northern Ireland) 2008.
                  <br className="modal-privacy__break-big" />
                  2.1.9 “Close Out” means reversing a Trade in the circumstances set out in Clause 22 or otherwise pursuant to this Agreement.
                  <br className="modal-privacy__break-big" />
                  2.1.10 “Control” means the possession, direct or indirect, of the power to vote fifty (50%) or more of the securities that have ordinary voting power for the election of directors of any entity or the power to direct the management and policies of a Party, directly or indirectly, whether through the ownership of securities, by contract or otherwise.
                  <br className="modal-privacy__break-big" />
                  2.1.11 “Delivery Date” means the Business Day on which we will send funds to the Beneficiary Account.
                  <br className="modal-privacy__break-big" />
                  2.1.12 “E-Money Account” means the electronic money account which we shall provide to you and which is to be operated and used in accordance with these Terms.
                  <br className="modal-privacy__break-big" />
                  2.1.13 “Ebury Representative” means any of our representatives who you may contact with respect to the Services.
                  <br className="modal-privacy__break-big" />
                  2.1.14 “Effective Date” means as set out at Clause 4.1.
                  <br className="modal-privacy__break-big" />
                  2.1.15 “EMRs” means the Electronic Money Regulations 2011.
                  <br className="modal-privacy__break-big" />
                  2.1.16 “Force Majeure Event” means an event which is beyond the reasonable control of a party which may include an act or omission of government, any regulatory body or other competent authority, terrorist activities, or any interruption, failure or defect, or non-operation of our internet and telephone connections or other communication services.
                  <br className="modal-privacy__break-big" />
                  2.1.17 “Forward Contract” means a foreign exchange contract under which we agree that on a specific date or specified range of dates in the future, to exchange money at an agreed exchange rate and at an agreed time, which shall be to facilitate payment for identifiable goods, services or direct investment.
                  <br className="modal-privacy__break-big" />
                  2.1.18 “Insolvent” means if you are a company, partnership, limited partnership or limited liability partnership, you (or any other person) takes (or threatens to take) any step in connection with:
                  <br className="modal-privacy__break-big" />
                  (a) any suspension or re-scheduling of payments by you, a moratorium of any of your indebtedness or your dissolution or reorganisation (by way of voluntary arrangement, scheme of arrangement or otherwise);
                  <br className="modal-privacy__break-big" />
                  (b) the making of any composition, compromise, assignment or arrangement with any of your creditors;
                  <br className="modal-privacy__break-big" />
                  (c) the appointment of an administrator in respect of you (including, for the avoidance of doubt, the filing of a notice of intention to appoint an administrator, or an application being made to court for the appointment of an administrator in respect of you);
                  <br className="modal-privacy__break-big" />
                  (d) the appointment of a liquidator in respect of you (including the presentation of a winding up petition, the convening of a meeting of members or creditors for this purpose, or any resolution being passed to appoint a liquidator in respect of you);
                  <br className="modal-privacy__break-big" />
                  (e) the appointment of a receiver or any similar officer in respect of you or any of your assets;
                  <br className="modal-privacy__break-big" />
                  (f) any analogous procedure in any jurisdiction;
                  <br className="modal-privacy__break-big" />
                  (g) you are unable or admit inability to pay your debts as they fall due (or you are deemed to or declared to be unable to pay your debts under applicable law) or the value of your assets is less than your liabilities (taking into account contingent and prospective liabilities); or
                  <br className="modal-privacy__break-big" />
                  (h) you cease or threaten to cease to carry on business.
                  <br className="modal-privacy__break-big" />
                  2.1.19 “Limit Order” means an order to exchange money at a specified exchange rate and within a specified time period.
                  <br className="modal-privacy__break-big" />
                  2.1.20 “Margin” means funds (in any currency which we may specify) that we may require you to provide to us as security for us entering into a Forward Contract with you.
                  <br className="modal-privacy__break-big" />
                  2.1.21 “Margin Call” means a request by us for such sum as we consider will be necessary to maintain the amount of Margin relative to the value of the Purchase Currency.
                  <br className="modal-privacy__break-big" />
                  2.1.22 “Micro-Enterprise” means – per the definition in Regulation 2(1) PSRs – an enterprise which employs fewer than 10 persons and its annual turnover and/or annual balance sheet total does not exceed 2 million euro.
                  <br className="modal-privacy__break-big" />
                  2.1.23 “Nominated Account” means the Ebury bank account which we specify in the Payment Confirmation.
                  <br className="modal-privacy__break-big" />
                  2.1.24 “Online System” means the electronic platform and interface (hosted by us) through which you can access most (but not all) of the Services.
                  <br className="modal-privacy__break-big" />
                  2.1.25 “Order” means such information as you may supply to us in respect of (a) a Transfer; or (b) a Trade.
                  <br className="modal-privacy__break-big" />
                  2.1.26 “Payment” means cleared funds received by us from you in respect of a Trade in accordance with Clause 19.
                  <br className="modal-privacy__break-big" />
                  2.1.27 “Payment Amount” means the full amount which you are required to pay us to fulfil your Trade as specified in your Payment Instruction Confirmation.
                  <br className="modal-privacy__break-big" />
                  2.1.28 “Payment Instruction Confirmation” means the email we shall send you for the purpose of confirming the Payment Amount and the Beneficiary Account.
                  <br className="modal-privacy__break-big" />
                  2.1.29 “Purchase Currency” means the currency which you shall buy from us.
                  <br className="modal-privacy__break-big" />
                  2.1.30 “PSRs” means the Payment Services Regulations 2017.
                  <br className="modal-privacy__break-big" />
                  2.1.31 “Sell Currency” means the currency which we shall sell to you.
                  <br className="modal-privacy__break-big" />
                  2.1.32 “Services” means those currency exchange and related services as set out at Clause 1.1.
                  <br className="modal-privacy__break-big" />
                  2.1.33 “Spot Contract” means a foreign exchange contract under which we agree to exchange money at an agreed rate within 48 hours of the contract being entered into.
                  <br className="modal-privacy__break-big" />
                  2.1.34 “Trade” means a Spot Contract, Forward Contract entered into in accordance with Clause 4.
                  <br className="modal-privacy__break-big" />
                  2.1.35 “Transfer” means a transfer of funds to a Beneficiary nominated by you.
                  <br className="modal-privacy__break-big" />
                  2.1.36 “Transaction Receipt” means a confirmation sent by us (by email) setting out details of a Trade.
                  <br className="modal-privacy__break-big" />
                  2.2 We have split the Terms into sections and inserted a number of headings in order to make them easier to read. The headings are not intended to affect the way that the Terms are interpreted.
                  <br className="modal-privacy__break-big" />
                  2.3 In these Terms:
                  <br className="modal-privacy__break-big" />
                  2.3.1 when we refer to a person, this could mean any individual, body corporate, association, partnership, firm, trust, organisation, joint venture, government, local or municipal authority, governmental or supra-governmental agency or department, state or agency of state or any other entity;
                  <br className="modal-privacy__break-big" />
                  2.3.2 when we refer to a statute or statutory provision, this includes any subordinate legislation made under it and any modifications, amendments, extensions, consolidations, re-enactments and/or replacements of that statute, statutory provision and/or subordinate legislation which are in force from time to time;
                  <br className="modal-privacy__break-big" />
                  2.3.3 any references that we make to the singular include the plural and vice versa;
                  <br className="modal-privacy__break-big" />
                  2.3.4 any references that we make to any gender include every gender;
                  <br className="modal-privacy__break-big" />
                  2.3.5 any references to a time of day are to UK time;
                  <br className="modal-privacy__break-big" />
                  2.3.6 any words following the words include, includes, including, in particular or any similar words or expressions are for illustration or emphasis only and are not intended to limit the meaning of the words preceding them; and
                  <br className="modal-privacy__break-big" />
                  2.3.7 any references to a “party” or to the “parties” means you and/or us as the context requires.
                  <br /><br /><br />
                  3. HOW TO ACCESS OUR SERVICES
                  <br /><br />
                  3.1 To use our Services, you must register to create an E-Money Account by either:
                  <br className="modal-privacy__break-big" />
                  3.1.1 using our Online System, clicking on “Open Account” and following the instructions; or
                  <br className="modal-privacy__break-big" />
                  3.1.2 completing a paper Application Form (which we shall provide to you) and signing and returning your Agreement to us.
                  <br className="modal-privacy__break-big" />
                  3.2 When using the Online System:
                  <br className="modal-privacy__break-big" />
                  3.2.1 you must take all reasonable steps to keep your E-Money Account log-in details safe at all times and never disclose them to anyone (Note. It is advisable to change your password regularly (at least every three (3) to six (6) months) in order to reduce the risk of a security breach in relation to your E-Money Account);
                  <br className="modal-privacy__break-big" />
                  3.2.2 if you have any indication or suspicion of your log-in details, password or other security features relating to your E-Money Account being lost, stolen, misappropriated, used without authorisation or otherwise compromised, you must contact us without undue delay on becoming aware of the loss, theft, misappropriation or unauthorised use and change the password; and
                  <br className="modal-privacy__break-big" />
                  3.2.3 if you think someone else knows your password, you must change it as soon as you can.
                  <br className="modal-privacy__break-big" />
                  3.3 We may request additional documentation from you to comply with our obligations to our regulators or otherwise under Applicable Laws.
                  <br /><br /><br />
                  4. YOUR RELATIONSHIP WITH US
                  <br /><br />
                  4.1 This Agreement shall take effect immediately upon:
                  <br className="modal-privacy__break-big" />
                  4.1.1 when you register via our website and click to accept the Terms; or
                  <br className="modal-privacy__break-big" />
                  4.1.2 if we communicate by phone or by email, receipt of a signed scanned copy of this Agreement (if we communicate by phone or by email),
                  each the “Effective Date”.
                  <br className="modal-privacy__break-big" />
                  4.2 This Agreement shall commence on the Effective Date and continue in full force and effect indefinitely unless and until terminated by you or us under Clause 10.
                  <br className="modal-privacy__break-big" />
                  4.3 You must tell us as soon as possible if any of the information you have given us changes, including:
                  <br className="modal-privacy__break-big" />
                  4.3.1 a change of name, registered address, directors, Authorised Parties, shareholders or beneficial owners;
                  <br className="modal-privacy__break-big" />
                  4.3.2 a change of your status as a Charity or a Micro-Enterprise;
                  <br className="modal-privacy__break-big" />
                  4.3.3 a material change to your business activities or operations; or
                  <br className="modal-privacy__break-big" />
                  4.3.4 a material change to your financial position.
                  <br /><br /><br />
                  5. YOUR WARRANTIES
                  <br /><br />
                  5.1 You represent and warrant to us that as at the time of entering into this Agreement (and on an ongoing basis):
                  <br className="modal-privacy__break-big" />
                  5.1.1 you will at all times comply with all Applicable Laws and you will not use the Services for the purposes of money laundering, tax evasion or terrorist financing;
                  <br className="modal-privacy__break-big" />
                  5.1.2 you (and your Authorised Parties) have and will maintain all required rights, powers, authority, permits, licences, consents, permissions and authorisations to enter into this Agreement and to perform your obligations hereunder;
                  <br className="modal-privacy__break-big" />
                  5.1.3 you will not use our Services for any speculative trading; and
                  <br className="modal-privacy__break-big" />
                  5.1.4 all of the information provided to us (including in the Application Form) from time to time, is true, accurate and complete.
                  <br className="modal-privacy__break-big" />
                  5.2 When entering into this Agreement on behalf of any Affiliate, you represent and warrant to us that you have the right, power and authority, as required under Applicable Laws, to enter into, and to perform, all the obligations under this Agreement for and on behalf of each Affiliate.
                  <br /><br /><br />
                  6. LIABILITY
                  <br /><br />
                  6.1 Without prejudice to our obligations under this Agreement, we do not warrant that the Services will meet any particular requirements or that their operation will be entirely error-free or that all defects are capable of correction or improvement. In the absence of fraud, no oral or written information or advice given by us shall create a warranty or give rise to any other liability other than as expressly set out in this Agreement.
                  <br className="modal-privacy__break-big" />
                  6.2 Neither party nor its affiliates, agents or subcontractors shall be liable to the other party or any third party for the following loss or damage, whether arising in tort (including negligence), contract, breach of statutory duty or otherwise, and even if foreseeable by the other party: any indirect, special, consequential or incidental loss of profits, business, contracts, goodwill, reputation, opportunity, revenue production, or anticipated savings howsoever caused, arising out of, or in connection with, any supply, failure to supply or delay in supplying any of the Services or otherwise in connection with this Agreement (including fundamental breach or breach of a fundamental term) or any other theory of law.
                  <br className="modal-privacy__break-big" />
                  6.3 We shall not be liable to you for any losses you incur:
                  <br className="modal-privacy__break-big" />
                  6.3.1 if we are prevented by Applicable Law from fulfilling any of our obligations under this Agreement;
                  <br className="modal-privacy__break-big" />
                  6.3.2 arising out of or in connection with a Force Majeure Event; or
                  <br className="modal-privacy__break-big" />
                  6.3.3 arising out of or in connection with any Transfer or Trade where we have acted on your direct instructions.
                  <br className="modal-privacy__break-big" />
                  6.4 Our entire liability to you:
                  <br className="modal-privacy__break-big" />
                  6.4.1 arising from any failure by us to process a Transfer or Trade in accordance with this Agreement, is limited to the cost of reprocessing such Transfer or Trade less the applicable fees payable to us; and
                  <br className="modal-privacy__break-big" />
                  6.4.2 whether for negligence, breach of contract, misrepresentation or otherwise arising out of or in connection with this Agreement, in aggregate for any consecutive 12 (twelve) month period shall be £10,000.
                  <br className="modal-privacy__break-big" />
                  6.5 Except as expressly set out in this Agreement, all conditions, warranties and representations, expressed or implied by (i) statute; (ii) common law; or (iii) otherwise, in relation to the Services, including without limitation, any warranty of fitness for a particular purpose, merchantability and non-infringement, are hereby expressly disclaimed except to the extent that they cannot be disclaimed under Applicable Laws.
                  <br className="modal-privacy__break-big" />
                  6.6 Nothing in this Agreement shall operate to exclude or restrict either party’s liability for:
                  <br className="modal-privacy__break-big" />
                  6.6.1 death or personal injury resulting from negligence;
                  <br className="modal-privacy__break-big" />
                  6.6.2 fraud, fraudulent misrepresentation or deceit; or
                  <br className="modal-privacy__break-big" />
                  6.6.3 such other matters for which (and to the extent to which) liability cannot be restricted or excluded under Applicable Laws.
                  <br className="modal-privacy__break-big" />
                  6.7 If you are a partnership, each partner shall be jointly and severally liable under this Agreement.
                  <br /><br /><br />
                  7. INDEMNITIES
                  <br /><br />
                  7.1 You shall indemnify and keep us and our Affiliates (and the directors, officers, employees, agents and subcontractors of any and/or all of them) (together the “Indemnified Parties”) fully indemnified, on demand and at all times, from and against any and all Losses for which it is permitted under Applicable Laws for the Indemnified Parties to be indemnified and which are attributable to any act, omission, default, delay, negligence or breach of statutory duty by you or on your part, and which the Indemnified Parties suffer or incur arising out of or in connection with:
                  <br className="modal-privacy__break-big" />
                  7.1.1 any material breach by you of this Agreement;
                  <br className="modal-privacy__break-big" />
                  7.1.2 any breach of, or non-compliance by you with Applicable Laws; or
                  <br className="modal-privacy__break-big" />
                  7.1.3 any claim made against any of the Indemnified Parties by a third party (including but not limited to a Beneficiary) arising out of or in connection with us acting on your direct instructions.
                  <br className="modal-privacy__break-big" />
                  7.2 The provisions of Clause 7.1 shall be for the benefit of the Indemnified Parties and, without prejudice to Clause 23.2, shall also be enforceable by us on behalf of ourselves and on behalf of the Indemnified Parties. You waive any right you may have of first requiring us (or any other Indemnified Party) to proceed against or enforce any other rights or security or claim payment from any person before claiming from you under this Clause 7. This waiver applies irrespective of any Applicable Laws or any provision of this Agreement to the contrary. Further, you expressly confirm that you intend that this indemnity shall extend from time to time to any (however fundamental) variation, increase, extension or addition to this Agreement.
                  <br className="modal-privacy__break-big" />
                  7.3 For the avoidance of doubt, if a claim is brought against the Indemnified Parties by a Beneficiary or any other third party, we shall be entitled to settle or otherwise deal with it at our sole discretion. Further, if any discharge, release or arrangement (whether in respect of your obligations or any security for those obligations or otherwise) is made by us in whole or in part on the basis of any payment, security or other disposition which is avoided or must be restored in insolvency, liquidation, administration or otherwise, without limitation, then your liability under this Clause 7 will continue or be reinstated as if the discharge, release or arrangement had not occurred.
                  <br className="modal-privacy__break-big" />
                  7.4 Unless expressly stated otherwise, no indemnity obligation under this Agreement shall be subject to the limitations of liability contained in Clause 6.4. Further, this indemnity is in addition to and is not in any way prejudiced by any other indemnity, guarantee or other security now or subsequently held by us.
                  <br /><br /><br />
                  8. SET-OFF RIGHTS
                  <br /><br />
                  8.1 We may at any time without notice, set-off any claims, costs, charges, penalties, expenses or other liabilities which you owe to us against any liability we have towards you, whether either liability is present or future, liquidated or unliquidated, and whether or not either liability arises under this Agreement. If the liabilities to be set-off are expressed in different currencies, we may convert either liability at a market rate of exchange it can reasonably obtain for the purpose of the set-off.
                  <br className="modal-privacy__break-big" />
                  8.2 We may also, at any time, without notice, set-off any liability you owe to us (whether such liability is present or future, liquidated or unliquidated, and whether or not such liability arises under this Agreement) against any amount then attributed to you and held in the E-Money Account.
                  <br className="modal-privacy__break-big" />
                  8.3 All amounts due under this Agreement shall be paid by you to us in full without any set-off, counterclaim, deduction or withholding (other than any deduction or withholding of tax as required by Applicable Laws).
                  <br className="modal-privacy__break-big" />
                  8.4 Any exercise by us of our rights under this Clause 8 shall be without prejudice to, and shall not limit or affect, any other rights or remedies available us under this Agreement or otherwise.
                  <br className="modal-privacy__break-big" />
                  8.5 In respect of overdue payments that are more than seven (7) days overdue, you shall pay interest on the overdue amount at the rate of 2% per annum above Barclays Bank PLC base rate (or any successor rate) from time to time. Such interest shall accrue on a daily basis from the due date until actual payment of the overdue amount, whether before or after judgment. You shall pay the interest together with the overdue amount. We may at any time require immediate payment of all or part of such shortfall, together with such interest as is then due.
                  <br className="modal-privacy__break-big" />
                  8.6 We reserve the right, at any time, to take debt collection measures including mandating a debt collecting agency or other third parties to assist with the recovery of any amounts due and payable by you to us under this Agreement, and to recover from you any costs and expenses reasonably incurred in connection with any debt collection or enforcement action.
                  <br /><br /><br />
                  9. CHANGES TO THIS AGREEMENT
                  <br /><br />
                  9.1 We will from time to time need to change the terms of this Agreement. We can anticipate some of the reasons why it’d be fair for us to do this, and have listed them below, but may in the future also want to make changes for other reasons.
                  <br className="modal-privacy__break-big" />
                  9.2 We can make a change to this Agreement for any reason (including the following), with any change being a reasonable and proportionate response to a change that is affecting us or that we reasonably think will affect us:
                  <br className="modal-privacy__break-big" />
                  9.2.1 because of a change in legal or regulatory requirements, for example we may have to change our requirements for keeping your E-Money Account safe to meet new, higher standards set by law;
                  <br className="modal-privacy__break-big" />
                  9.2.2 if the change benefits you, for example when introducing new products or services or improving existing ones;
                  <br className="modal-privacy__break-big" />
                  9.2.3 to reflect a change in our costs of running your E-Money Account or providing you with related services, for example by introducing a new fee;
                  <br className="modal-privacy__break-big" />
                  9.2.4 in response to possible risks to the security of your E-Money Account, for example by changing the security steps you need to follow to access your Account or submit an Order; or
                  <br className="modal-privacy__break-big" />
                  9.2.5 to respond to any other change that affects us, if it’s fair to pass on the effects of the change to you, for example to reflect developments in cross-border payments.
                  <br className="modal-privacy__break-big" />
                  9.3 We may make changes for any other reason we cannot foresee, for example to respond to changes among our competitors that affect how we wish to deliver our services to you.
                  <br className="modal-privacy__break-big" />
                  9.4 We shall notify you of any change to this Agreement in writing (either by post or email). The proposed change shall come into effect automatically on the date stated in our notice, such date to be at least two (2) weeks after the date of receipt of our notice.
                  <br className="modal-privacy__break-big" />
                  9.5 You can then tell us at help@ebury.com that you wish to end this Agreement (and close your E-Money Account) before the change takes effect; otherwise, you’ll be treated as having accepted the change.
                  <br /><br /><br />
                  10. TERMINATION
                  <br /><br />
                  10.1 Either party may terminate this Agreement at any time without reason by giving at least five (5) Business Days’’ prior notice to the other.
                  <br className="modal-privacy__break-big" />
                  10.2 We may terminate this Agreement immediately without notice (in whole or in part) if:
                  <br className="modal-privacy__break-big" />
                  10.2.1 you are using our Services fraudulently or illegally;
                  <br className="modal-privacy__break-big" />
                  10.2.2 if we are required to do so by law or a regulator;
                  <br className="modal-privacy__break-big" />
                  10.2.3 in our view (acting reasonably), we must do so to fulfil our legal or regulatory obligations; or
                  <br className="modal-privacy__break-big" />
                  10.2.4 you breach this Agreement.
                  <br className="modal-privacy__break-big" />
                  We will tell you that we’re doing this as soon as we can if the law allows us to.
                  <br className="modal-privacy__break-big" />
                  10.3 Otherwise, we may suspend or terminate this Agreement or the Services (in whole or in part) at any time with immediate effect by giving notice if:
                  <br className="modal-privacy__break-big" />
                  10.3.1 you breach any material representation or warranty or are otherwise in material breach of this Agreement;
                  <br className="modal-privacy__break-big" />
                  10.3.2 you breach or otherwise fails to comply with any Applicable Laws;
                  <br className="modal-privacy__break-big" />
                  10.3.3 we have any material concerns over the adequacy of the information you have provided to us;
                  <br className="modal-privacy__break-big" />
                  10.3.4 you are Insolvent (other than pursuant to a consolidation, amalgamation or merger, but provided that the company resulting therefrom agrees to be bound by or assume the obligations imposed on you under this Agreement);
                  <br className="modal-privacy__break-big" />
                  10.3.5 an applicable regulatory or law enforcement authority initiates a regulatory or enforcement action, or investigation against you;
                  <br className="modal-privacy__break-big" />
                  10.3.6 you cease, or threaten to cease, to carry on business;
                  <br className="modal-privacy__break-big" />
                  10.3.7 we reasonably consider your conduct to be disreputable or capable of damaging our reputation by association;
                  <br className="modal-privacy__break-big" />
                  10.3.8 there is any other change in your circumstances (including a deterioration in or change to your financial position) or in the nature of your business which we consider materially adverse to the continuance of the Services;
                  <br className="modal-privacy__break-big" />
                  10.3.9 a Force Majeure Event continues for more than three (3) successive calendar months; or
                  <br className="modal-privacy__break-big" />
                  10.3.10 in our reasonable opinion, you are no longer suitable to receive the Services.
                  <br /><br /><br />
                  11. CONSEQUENCES OF TERMINATION
                  <br /><br />
                  11.1 On the expiry or termination of this Agreement for any reason you shall:
                  <br className="modal-privacy__break-big" />
                  11.1.1 immediately make payment in full for all pending Trades (for the avoidance of doubt, we shall remain entitled to set-off or deduct sums in accordance with Clause 8); and
                  <br className="modal-privacy__break-big" />
                  11.1.2 except as otherwise expressly provided in this Agreement and subject to any rights or obligations which have accrued prior to termination, neither party shall have any further obligation to the other under this Agreement.
                  <br className="modal-privacy__break-big" />
                  11.2 Following termination of this Agreement, we will:
                  <br className="modal-privacy__break-big" />
                  11.2.1 Close Out any pending Trades; and
                  <br className="modal-privacy__break-big" />
                  11.2.2 deduct from the E-Money Account all fees and other amounts owing under this Agreement and transfer any remaining funds to your nominated bank account (without prejudice to the other provisions of this Agreement).
                  <br className="modal-privacy__break-big" />
                  11.3 The termination of this Agreement shall not affect any provisions of this Agreement that are expressly or by necessary implication intended to survive such termination.
                  <br /><br /><br />
                  12. CONTACTING US / COMPLAINTS
                  <br /><br />
                  12.1 If you wish to contact us regarding your E-Money Account or any of the Services, you can do so (unless we say otherwise) through an Ebury Representative or otherwise by contacting help@ebury.com.
                  <br className="modal-privacy__break-big" />
                  12.2 If you are unhappy with any of our Services, you can contact an Ebury Representative by using any of the following details:
                  <br className="modal-privacy__break-big" />
                  Telephone: +44 (0) 20 3872 6670
                  <br className="modal-privacy__break-big" />
                  Post: Compliance Department<br />
                  Ebury Partners UK Limited<br />
                  100 Victoria Street<br />
                  London<br />
                  SW1E 5JL<br />
                  <br className="modal-privacy__break-big" />
                  Email: eburycompliance@ebury.com<br />

                  12.3 For further information on our Complaints Policy, please see www.ebury.com/complaints-policy/.
                  <br className="modal-privacy__break-big" />
                  12.4 If your complaint remains unresolved (in particular, if you are a Charity or a Micro-Enterprise), you may be entitled to refer it to the Financial Ombudsman Service (“FOS”). Further information, contact details and the eligibility requirements can be located on www.financialombudsman.org.uk. In certain circumstances you may also be able to submit your complaint to the FCA who will use your complaint to inform their regulatory activities. For further details please contact the FCA on 0800 111 6768 (freephone).
                  <br className="modal-privacy__break-big" />
                  12.5 Our Services are not covered by the UK Financial Services Compensation Scheme.
                  <br /><br /><br />


                  <b>Part B: Your E-Money Account</b>
                  <br /><br /><br />
                  13. THE E-MONEY ACCOUNT
                  <br /><br />
                  13.1 Your E-Money Account is an electronic money account which enables you to send and receive electronic payments in accordance with the terms of this Clause 13.
                  <br className="modal-privacy__break-big" />
                  13.2 Your E-Money Account is not a personal bank or deposit account and you will not earn any interest on the funds held in the E-Money Account.
                  <br className="modal-privacy__break-big" />
                  13.3 As the provider of your E-Money Account, we are authorised by the Financial Conduct Authority under the EMRs (FRN: 900797) as an electronic money institution, which allow us to issue e-money and provide payment services.
                  <br className="modal-privacy__break-big" />
                  13.4 As an electronic money institution, we are required to ensure that customer funds are appropriately “safeguarded”. This means that funds received by us corresponding to electronic money will be held in one or more segregated bank accounts separately from our own funds, in accordance with the EMRs. In the event of our insolvency, these funds will form an asset pool which is separate from our insolvent estate and an administrator will be entitled to reimburse you from this pool (in priority to other creditors).
                  <br className="modal-privacy__break-big" />
                  13.5 Your E-Money Account(s) are denominated in the currencies as selected by you.
                  <br className="modal-privacy__break-big" />
                  13.6 You agree that:
                  <br className="modal-privacy__break-big" />
                  13.6.1 while we may do so, we are not obliged to comply with the information requirements set out in Part 5 of the PSRs in relation to your use of the Services and the E-Money Account; and
                  <br className="modal-privacy__break-big" />
                  13.6.2 regulations 66(1), 67(3), 67(4), 75, 77, 79, 80, 83, 91, 92 and 94 of the PSRs do not apply to your use of the Services or the E-Money Account.
                  <br /><br /><br />
                  14. USING THE E-MONEY ACCOUNT
                  <br /><br />
                  14.1 We will credit any funds received from you to your E-Money Account.
                  <br className="modal-privacy__break-big" />
                  14.2 Your E-Money Account can be used to:
                  <br className="modal-privacy__break-big" />
                  14.2.1 store funds in one or more currencies nominated by you;
                  <br className="modal-privacy__break-big" />
                  14.2.2 make Transfers (alone or in combination with a Trade);
                  <br className="modal-privacy__break-big" />
                  14.2.3 make Payment in connection with one or more Trades; and
                  <br className="modal-privacy__break-big" />
                  14.2.4 pay Margin
                  <br className="modal-privacy__break-big" />
                  14.3 We will not allow you to make any Transfer or Payment Out of your E-Money Account where this would put your E-Money Account into a negative balance. You should therefore ensure that you have sufficient funds, including in respect of Margin Calls which may be made from time-to-time, in your Account before placing an Order.
                  <br className="modal-privacy__break-big" />
                  14.4 We may impose fees or charges for our Services and reserve the right to impose a fee (on a per transaction basis) at our discretion. We will always inform you in advance of any fee or charge which shall be imposed.
                  <br className="modal-privacy__break-big" />
                  14.5 You can place an Order from your E-Money Account online, by telephone or by email:
                  <br className="modal-privacy__break-big" />
                  14.5.1 Online: You must log on to the Online System (using your password and log-in details) and follow the instructions to submit your Order.
                  <br className="modal-privacy__break-big" />
                  14.5.2 Telephone: You must call an Ebury Representative and specify your Order, together with such other information as we may reasonably request.
                  <br className="modal-privacy__break-big" />
                  14.5.3 Email: You must email us and specify your Order.
                  <br className="modal-privacy__break-big" />
                  14.6 Where you make a payment using your E-Money Account, the amount of the payment will be deducted by us from your E-Money Account balance. You must ensure that you have sufficient funds in your E-Money Account to cover the amount of any Trade or Transfer you want to make using the Account. If you do not have sufficient funds in your E-Money Account, we reserve the right to postpone the execution date of the Trade or Transfer and we may impose a charge to cover the costs of us doing so,
                  <br className="modal-privacy__break-big" />
                  14.7 You can check the balance held in your E-Money Account by logging into the Online System. Key information relating to payments made using the E-Money Account, including all fees and any other charges applied to the E-Money Account and transaction history will be made available at any time, and in accordance with Applicable Laws, by logging into the Online System and may also be downloaded by you as a report which can be stored and reproduced in an unchanged manner.
                  <br className="modal-privacy__break-big" />
                  14.8 Each transaction made using the E-Money Account will be given a unique transaction ID which will be set out in the transaction history. You must quote this transaction ID when communicating with an Ebury Representative about a particular transaction.
                  <br className="modal-privacy__break-big" />
                  14.9 Any redemption from the E-Money Account will be to the bank account which you notified to us when you first registered to use our Services and you can request a redemption through the Online System, unless we agree otherwise.
                  <br /><br /><br />
                  15. LIABILITY
                  <br /><br />
                  15.1 In the case of a Transfer that is improperly executed due to our mistake, we shall at your request immediately refund the Transfer amount to the E-Money Account. However, where you identify an error in a Transfer from the E-Money Account (or a payment received to the E-Money Account), you have up to seven (7) days from the date of becoming aware of the error to notify us of it, after which time we will have no obligation to investigate or act upon your notification or provide a refund.
                  <br className="modal-privacy__break-big" />
                  15.2 In the case of an unauthorised payment from the E-Money Account, we shall at your request immediately refund the payment amount to the E-Money Account. We will not however be required to refund such a payment:
                  <br className="modal-privacy__break-big" />
                  15.2.1 where the unauthorised payment arises from your failure to keep your E-Money Account log-in, password or other security details safe;
                  <br className="modal-privacy__break-big" />
                  15.2.2 if you fail to notify us without undue delay of any loss or misuse of a log-in or password or another event that could reasonably be expected to have compromised the security of your E-Money Account after you have gained knowledge of such event in which case you shall remain liable for losses incurred after gaining such knowledge; or
                  <br className="modal-privacy__break-big" />
                  15.2.3 if you fail to dispute and bring the unauthorised transaction to our attention within seven (7) days from the date of the transaction.
                  <br /><br /><br />
                  16. SUSPENSION
                  <br /><br />
                  16.1 We may suspend the E-Money Account or otherwise restrict its functionality on reasonable grounds relating to the security of the E-Money Account or any of its security features or if we reasonably suspect that an unauthorised or fraudulent use of the E-Money Account has occurred or that any of its security features have been compromised.
                  <br className="modal-privacy__break-big" />
                  16.2 We will notify you of any suspension or restriction and of the reasons for such suspension or restriction in advance or, where we are unable to do so, immediately after the suspension or restriction has been imposed, unless that would be unlawful or compromise our reasonable security interests.
                  <br className="modal-privacy__break-big" />
                  16.3 We will lift the suspension and/or the restriction as soon as practicable after the reasons for the suspension and/or restriction have ceased to exist.
                  <br /><br /><br />
                  17. CLOSING THE E-MONEY ACCOUNT
                  <br /><br />
                  17.1 Following termination of this Agreement, you or we may close your E-Money Account once we have paid any remaining balance on the E-Money Account to your nominated bank Account.
                  <br className="modal-privacy__break-big" />
                  17.2 After the E-Money Account is closed, we shall pay any other amounts which we owe to you to your nominated bank account (unless we agree otherwise).
                  <br /><br /><br />


                  <b>PART C: FX SERVICES</b>
                  <br /><br />
                  Note. The FX Services described in this Part C do not constitute the issuance of electronic money nor payment services activity and are therefore not subject to regulation by the FCA under the PSRs/EMRs.
                  <br /><br />
                  18. PLACING TRADES
                  <br /><br />
                  18.1 How to Place and Confirm a Trade
                  <br className="modal-privacy__break-big" />

                  18.1.1 You can place an Order by using one of the methods at Clause 14.5 online, by telephone or by email.
                  <br className="modal-privacy__break-big" />
                  18.1.2 Once we have received your Order, we will confirm:
                  <br className="modal-privacy__break-big" />
                  (a) the amount of the Sale Currency and the Purchase Currency;
                  <br className="modal-privacy__break-big" />
                  (b) the foreign exchange rate which we intend to apply;
                  <br className="modal-privacy__break-big" />
                  (c) any Payment to be made in accordance with Clause 19;
                  <br className="modal-privacy__break-big" />
                  (d) any Margin payable by you in accordance with Clause 20; and
                  <br className="modal-privacy__break-big" />
                  (e) any additional terms which we intend to apply to the Trade.
                  <br className="modal-privacy__break-big" />
                  18.1.3 Upon receipt of an Order, we will provide you with a Transaction Receipt and a Payment Instruction Confirmation, which we may provide in a single communication.
                  <br className="modal-privacy__break-big" />
                  18.1.4 You must carefully review the Transaction Receipt and the Payment Instruction Confirmation and tell us before Payment if you think any of the details are incorrect. If you are placing an order by telephone or by email, you must tell us within one (1) hour of receipt of your Transaction Receipt and Payment Instruction Confirmation. We’ll provide you with a revised Transaction Receipt and/or Payment Instruction Confirmation as soon as possible.
                  <br className="modal-privacy__break-big" />
                  18.1.5 Except in the case of Limit Orders (see Clause 21 below), we will execute the Trade upon receipt of Payment.
                  <br className="modal-privacy__break-big" />
                  18.1.6 You may not cancel a Trade which you have placed with us. However, if we haven’t yet processed the Trade:
                  <br className="modal-privacy__break-big" />
                  (a) you can correct any incorrect Beneficiary Account details (though we may charge a fee for this); or
                  <br className="modal-privacy__break-big" />
                  (b) we may at our discretion permit you to cancel the Trade.
                  <br className="modal-privacy__break-big" />
                  18.1.7 If we permit you to cancel an Order:
                  <br className="modal-privacy__break-big" />
                  (a) if we’ve already received the Payment Amount, we’ll return it to the account from where it came. However, if the Sale and Purchase Currencies are different, we’ll convert the Purchase Currency back to the Sale Currency using an agreed exchange rate at the time of cancellation, which means the amount we return to you may be more or less than the original Payment Amount;
                  <br className="modal-privacy__break-big" />
                  (b) we won’t refund any fees you’ve paid us; and
                  <br className="modal-privacy__break-big" />
                  (c) we may require you to pay an additional fee that we agree with you at the time of permitting cancellation.
                  <br className="modal-privacy__break-big" />
                  18.2 Trade Suspension or Cancellation
                  <br className="modal-privacy__break-big" />
                  18.2.1 We may reject, suspend, disregard or cancel a Trade, or refuse to issue a Transaction Receipt in our sole discretion for any of the following reasons:
                  <br className="modal-privacy__break-big" />
                  (a) if (in our reasonable opinion) the Order is unclear;
                  <br className="modal-privacy__break-big" />
                  (b) if (in our reasonable opinion) the Order was not authorised by an Authorised Party;
                  <br className="modal-privacy__break-big" />
                  (c) you are Insolvent;
                  <br className="modal-privacy__break-big" />
                  (d) you breach any material representation or warranty or are otherwise in breach of this Agreement;
                  <br className="modal-privacy__break-big" />
                  (e) we may otherwise breach Applicable Law or face action from a regulator or other authority;
                  <br className="modal-privacy__break-big" />
                  (f) the Trade may be linked to activity that breaches Applicable Law;
                  <br className="modal-privacy__break-big" />
                  (g) you have failed to make Payment when due or are otherwise in breach of this Agreement or any other agreement you have with us;
                  <br className="modal-privacy__break-big" />
                  (h) you fail to provide us with sufficient information to allow us to fulfil the Trade; and
                  <br className="modal-privacy__break-big" />
                  (i) the Trade is outside our financial crime risk appetite.
                  <br className="modal-privacy__break-big" />
                  18.2.2 We’ll notify you of the reason for declining, cancelling or delaying a Trade (if the law allows us to) and also, if possible, our reasons for doing so and how you can put right any factual errors that led to our action.
                  <br className="modal-privacy__break-big" />
                  18.2.3 If we cancel a Trade after receiving the Payment, we’ll return the relevant amount and any related fees we’ve received (less our reasonable costs) to the account from which it was sent.
                  <br /><br /><br />
                  19. PAYMENT
                  <br /><br />
                  19.1 You must pay the full Payment Amount to us from your E-Money Account on or before the Delivery Date. If we have not received the Payment Amount by the Delivery Date (or any agreed change to the Delivery Date agreed pursuant to Clause 20.7), we may:
                  <br className="modal-privacy__break-big" />
                  19.1.1 refuse to fulfil the Trade; and/or
                  <br className="modal-privacy__break-big" />
                  19.1.2 Close Out the Transaction in accordance with Clause 22.
                  Failure to make Payment in accordance with this Clause 19 will be a material breach of this Agreement.
                  <br className="modal-privacy__break-big" />
                  19.2 Without prejudice to any other rights and remedies available to us under Applicable Laws, we may charge interest on any sum due to us under this Agreement after they become due and payable, of 4% per annum above the base rate of the Bank of England. This interest will accrue daily from the due date until we receive payment of the overdue amount in full in cleared funds.
                  <br /><br /><br />
                  20. FORWARD CONTRACTS
                  <br /><br />
                  20.1 Where you wish to enter into a Forward Contract, we may require you to make an initial Margin payment within twenty-four (24) hours of you receiving the Transaction Receipt.
                  <br className="modal-privacy__break-big" />
                  20.2 From time to time during the term of the Forward Contract, we may require you to pay to us additional Margin (by making a Margin Call) to maintain the relative value of the Purchase Currency.
                  <br className="modal-privacy__break-big" />
                  20.3 In the event of a Margin Call, you must pay such additional Margin to our Nominated Account within twenty-four (24) hours of our demand from your E-Money Account and/or by some other means.
                  <br className="modal-privacy__break-big" />
                  20.4 If you do not satisfy the Margin Call, we may cancel the Forward Contract with immediate effect or Close Out.
                  <br className="modal-privacy__break-big" />
                  20.5 Any Margin paid by you or on your behalf will be paid to us for the purpose of securing or covering all your present or future, actual or contingent, or prospective, obligations to us under this Agreement or otherwise. We will acquire full ownership of such Margin and we will shall not hold any Margin on your behalf (whether on trust or otherwise) and we can deal with it as our own. In the event of our insolvency, you will rank as a general creditor of ours in relation to such Margin paid to us.
                  <br className="modal-privacy__break-big" />
                  20.6 We will owe you a debt equal to the amount of Margin received by us, subject to any set-off rights under, or other terms of, this Agreement, or under general law. We shall pay to you all or part of any amount of Margin owed to us by you (e.g. upon fulfilment of a Trade) under this clause to the extent that we consider, in our discretion, that the amount of Margin you have transferred to us exceeds the amount required by us to secure or cover all your present or future, actual or contingent, or prospective obligations to us under this Agreement or otherwise.
                  <br className="modal-privacy__break-big" />
                  20.7 You may ask us to bring forward (pre-deliver) the Delivery Date or to extend (roll over) the Delivery Date in relation to the whole or only part of your Forward Contract. We may agree to such a request entirely at our discretion. If we agree, you acknowledge that we may adjust the Payment Amount to reflect new Delivery Date.
                  <br /><br /><br />
                  21. LIMIT ORDERS
                  <br /><br />
                  21.1 We will execute a Limit Order when we achieve the rate nominated by you within the agreed time period.
                  <br className="modal-privacy__break-big" />
                  21.2 If the last day of the agreed time period falls on a non-Business Day, your Limit Order will expire on the following Business Day.
                  <br className="modal-privacy__break-big" />
                  21.3 You may cancel a Limit Order at any time (by telephone or by email), up until the agreed exchange rate is achieved by us.
                  <br className="modal-privacy__break-big" />
                  21.4 Upon successful execution of a Limit Order, we will provide you with a Transaction Receipt setting out the details of the Trade.
                  <br className="modal-privacy__break-big" />
                  21.5 Whilst we will try to achieve the agreed exchange rate within the agreed period, we cannot guarantee that the agreed exchange rate will be met.
                  <br /><br /><br />
                  22. CLOSE OUT
                  <br /><br />
                  22.1 We may Close Out a particular Trade or all current Trades that you have with us, without notice to you:
                  <br className="modal-privacy__break-big" />
                  22.1.1 if you fail to make any Payment when it is due, including payment of Margin;
                  <br className="modal-privacy__break-big" />
                  22.1.2 if you fail to provide any information we have requested or any warranty/representation you have given us is or becomes, in our opinion, materially inaccurate, incorrect or misleading;
                  <br className="modal-privacy__break-big" />
                  22.1.3 in the event that bankruptcy proceedings are commenced against you;
                  <br className="modal-privacy__break-big" />
                  22.1.4 if you take some action (or refrain from doing something) which places us in breach of our legal or regulatory obligations;
                  <br className="modal-privacy__break-big" />
                  22.1.5 if the performance of our obligations under this Agreement become illegal;
                  <br className="modal-privacy__break-big" />
                  22.1.6 if you breach this Agreement;
                  <br className="modal-privacy__break-big" />
                  22.1.7 if you terminate this Agreement in accordance with Clause 10; or
                  <br className="modal-privacy__break-big" />
                  22.1.8 the Trade is outside our financial crime risk appetite.
                  <br className="modal-privacy__break-big" />
                  22.2 You may ask us to Close Out a particular Trade or all current Trades by giving us notice in writing. If we permit you to Close Out:
                  <br className="modal-privacy__break-big" />
                  22.2.1 we will buy back the currency that we have bought for you when you entered into the Trades at prevailing market rates. If the value of the Purchase Currency has strengthened, this means that a loss will be incurred on the Trade and you will be liable to us for the amount of that loss (as well as any costs incurred by us);
                  <br className="modal-privacy__break-big" />
                  22.2.2 we will not pay you any profit arising from the Close Out;
                  <br className="modal-privacy__break-big" />
                  22.2.3 you acknowledge that the amount of any loss realised on the Closing Out of a Trade is a debt payable by you and agree that we may immediately deduct the total amount of any loss (together with any costs) from your E-Money Account;
                  <br className="modal-privacy__break-big" />
                  22.2.4 if the amount we are seeking to recover exceeds the amount of any Margin or funds available in your E-Money Account, you must pay the balance within seven (7) days of being notified by us of the total amount due;
                  <br className="modal-privacy__break-big" />
                  22.2.5 we may charge you interest on any sum that remains payable to us after we Close Out at a rate of 4% per annum over the Bank of England base rate. Interest will accrue and will be calculated daily and be compounded monthly from the date payment was due until the date full payment is made by you; and
                  <br className="modal-privacy__break-big" />
                  22.2.6 we will send you a written statement explaining the amount of any sums that may be payable to us and the amount of any sums being withheld by us.
                  <br /><br /><br />
                  <b>PART D: GENERAL</b>b>
                  <br /><br />

                  23. OTHER IMPORTANT TERMS
                  <br /><br />
                  23.1 Ebury Partners UK Limited is a company incorporated in England & Wales (Company No. 07088713), whose registered office is at 100 Victoria Street, London, SW1E 5JL, which is authorised as an electronic money institution by the Financial Conduct Authority under the Electronic Money Regulations 2011 (FRN: 900797).
                  <br className="modal-privacy__break-big" />
                  23.2 No express term of this Agreement (nor any term implied under it) is enforceable pursuant to the Contracts (Rights of Third Parties) Act 1999 or otherwise by any person who is not a party to it.
                  <br className="modal-privacy__break-big" />
                  23.3 We may agree to communicate with you in one or more languages depending on the location of the Ebury Representative which provides Services to you. The primary business language used by Ebury Markets is English, and so if we have not expressly agreed otherwise, communications from you to us (in particular legal notices, correspondence and documentation) should be in the English language.
                  <br className="modal-privacy__break-big" />
                  23.4 We may listen in to or record phone calls with you (or any of your Authorised Parties) to:
                  <br className="modal-privacy__break-big" />
                  23.4.1 check we are carrying out your instructions correctly and that we are meeting our regulatory obligations;
                  <br className="modal-privacy__break-big" />
                  23.4.2 help detect or prevent fraud or other crimes; and
                  <br className="modal-privacy__break-big" />
                  23.4.3 improve our Services.
                  <br className="modal-privacy__break-big" />
                  23.5 If any part of this Agreement is disallowed or found to be ineffective by a court or regulator, the rest of it shall continue to apply.
                  <br className="modal-privacy__break-big" />
                  23.6 We may choose not to enforce our rights against you and make this contractually binding against us by giving you a notice which expressly states that we have chosen to do so under this term of the Agreement. In all other cases, if we choose not to exercise rights against you, we can still do so later.
                  <br className="modal-privacy__break-big" />
                  23.7 We may:
                  <br className="modal-privacy__break-big" />
                  23.7.1 assign any or all of our rights under this Agreement to any third parties; and
                  <br className="modal-privacy__break-big" />
                  23.7.2 transfer (by novation or otherwise) all or any of our obligations under this Agreement to any person (a Transferee) provided that no transfer of our obligations will be effective until the Transferee has confirmed to you in writing that it is bound by the terms of this Agreement.
                  <br className="modal-privacy__break-big" />
                  23.8 In the event of our insolvency, a third party back-up servicer shall be appointed such and – to the extent permissible under Applicable Laws – shall be entitled to administer any pending Transfers, Trades (including by effecting Close Outs) and handle any Payments paid or payable.
                  <br className="modal-privacy__break-big" />
                  23.9 You may not transfer any of your rights or obligations under this Agreement.
                  <br className="modal-privacy__break-big" />
                  23.10 The laws of England & Wales will decide any legal questions about this Agreement, and our dealings with you leading up to when you entered into this Agreement, and the courts of England & Wales will also be able to deal with any legal questions connected with this Agreement.
                  <br /><br /><br />



                  <b>SCHEDULE – TERMS APPLICABLE TO MICRO-ENTERPRISES AND CHARITIES</b>
                  <br /><br />

                  Part A
                  <br /><br />
                  MANDATORY CHANGES TO PART A<br />
                  1.1 Definitions. In Clause 2.1,
                  <br className="modal-privacy__break-big" />
                  1.1.1 “EEA” shall mean the European Economic Area; and
                  <br className="modal-privacy__break-big" />
                  1.1.2 “Force Majeure Event” shall mean an event which is due to abnormal and unforeseeable circumstances beyond a party’s control, the consequences of which would have been unavoidable despite all efforts to the contrary, which may include an act or omission of government, any regulatory body or other competent authority, an interruption, failure or defect, or non-operation of our internet and telephone connections or other communication services.
                  <br className="modal-privacy__break-big" />
                  1.2 Changes. In place of Clause 9.4: the proposed variation shall come into effect automatically on the date stated in our notice, such date to be at least two (2) months after the date of receipt of the notice.
                  <br className="modal-privacy__break-big" />
                  1.3 Termination. In place of Clause 10.1 (Termination):
                  <br className="modal-privacy__break-big" />
                  1.3.1 You may terminate this Agreement at any time without reason by giving at least one (1) month’s prior notice to us.
                  <br className="modal-privacy__break-big" />
                  1.3.2 We may terminate this Agreement at any time without reason by giving at least two (2) months’ prior notice to you.
                  <br className="modal-privacy__break-big" />
                  1.4 In the event of a conflict between the provisions of this Part A of the Schedule and any other provisions of this Agreement, the provisions of this Part A shall prevail.
                  <br /><br />
                  Part B
                  <br /><br />
                  MANDATORY ADDITIONAL INFORMATION FOR MICRO-ENTERPRISES OR CHARITIES
                  2.1 How we are regulated. Ebury Partners UK Limited is authorised as an electronic money institution by the Financial Conduct Authority (with firm reference number 900797). To find out more about us, see the Financial Services Register: https://register.fca.org.uk/ or call the FCA on 0800 111 6768.
                  <br className="modal-privacy__break-big" />
                  2.2 While this Agreement is in force, we will provide a copy of this Agreement to you on request.
                  <br className="modal-privacy__break-big" />
                  2.3 You will make available to you through the Online System key information relating to all transactions on your E-Money Account and a transaction history at any time and such information may also be downloaded as a report which can be stored and reproduced in an unchanged manner.
                  <br className="modal-privacy__break-big" />
                  2.4 Any documentation we send you by email may be sent as an electronic attachment (for example, as a PDF). You should make sure that your electronic device(s) are set up to receive our communications (for example, they have the correct hardware, software, operating system and browser).
                  <br className="modal-privacy__break-big" />
                  2.5 If we suspect or become aware that your E-Money Account may be subject to fraud or security threats we’ll contact you using the contact details we hold for you.
                  <br className="modal-privacy__break-big" />
                  2.6 If you are unhappy with any of our Services, you can contact us in writing by using any of the following details:
                  <br className="modal-privacy__break-big" />
                  Post: Compliance Department
                  <br className="modal-privacy__break-big" />
                  Ebury Partners UK Limited<br />
                  100 Victoria Street<br />
                  London<br />
                  SW1E 5JL<br />
                  Email: eburycompliance@ebury.com<br />
                  <br /><br />
                  If you want to speak to an Ebury Representative directly, please use the contact telephone numbers at the following link: https://www.ebury.com/contact-us/
                  <br className="modal-privacy__break-big" />
                  2.7 We may apply spending limits on your E-Money Account (for example, the maximum amount of Transfers or Trades that you can make in one day or the maximum exposure you can have to a single currency), and we’ll tell you if we do so.
                  <br className="modal-privacy__break-big" />
                  2.8 We do not impose fees or charges for our Services save for same-currency Transfers or Trades, where we may impose a reasonable charge which we will negotiate with you. We will let you know of our fees in advance of accepting any Trades or Transfers.
                  <br className="modal-privacy__break-big" />
                  2.9 However, others might impose fees, charges or taxes. For example, a correspondent bank who is involved in processing your Transfer charge you a fee to transmit funds to the Beneficiary Account.
                  <br className="modal-privacy__break-big" />
                  2.10 The exchange rates we use are variable exchange rates which are changing constantly throughout the day (for example, to reflect movements in foreign exchange markets). The exchange rate applied to your payments will appear on your statement. Unless otherwise agreed with you, the exchange rate we will apply to Transfers (including any future dated payments) and Trades which are in a different currency to the denomination of your E-Money Account will be the rate applicable at the time that your payment is processed. You can contact us to find out the rate which will apply by contacting your Ebury Representative.
                  <br className="modal-privacy__break-big" />
                  2.11 If you confirm an Order (and make Payment in accordance with Clause 19) on a non-Business Day (or after our cut off times (which we shall make available on our website)), we’ll process your Transfer on the next Business Day.
                  <br className="modal-privacy__break-big" />
                  2.12 We will send the funds to the Beneficiary Account which you specify in your Application Form.
                  <br className="modal-privacy__break-big" />
                  2.13 If the Beneficiary Account is held in the EEA and is in pounds sterling (£), euro (€) or another EEA currency, the account provider (e.g. bank) will receive the money within two working days after you ask us to send it. Otherwise, the account provider will receive the money within four working days after you ask us to send it.
                  <br className="modal-privacy__break-big" />
                  2.14 If the account provider is in the EEA and the Beneficiary Account is in an EEA currency, the account provider is required by law to put the money into the Beneficiary Account as soon as it receives it. Banking practices may vary if you send money to a non-EEA currency account or to an account outside the EEA – for more information on when a payment will be credited to such an account, you can ask us the Beneficiary Account provider.
                  <br className="modal-privacy__break-big" />
                  2.15 If a Transfer you asked us to make within the EEA does not arrive when it should have, you can ask us to contact the Beneficiary Account provider and ask them to treat it as if it was made on any time.
                  <br className="modal-privacy__break-big" />
                  2.16 The Beneficiary’s account provider may apply its own charges to the Transfer.
                  <br className="modal-privacy__break-big" />
                  2.17 Unless we agree otherwise, we’ll provide you with statements every month and free of charge, provided that there have been payment transactions on the account during the month.
                  <br /><br />


                  Part C
                  <br /><br />
                  MANDATORY CHANGES IN RELATION TO PART B (E-MONEY ACCOUNT) FOR MICRO-ENTERPRISES AND CHARITIES
                  <br /><br />
                  3.1 Improper execution
                  <br className="modal-privacy__break-big" />
                  3.1.1 If there is a defective or non-executed transaction to or from the E-Money Account, we will without undue delay refund the amount of a payment and any charges you have paid as a result subject to the other provisions of this Part C.
                  <br className="modal-privacy__break-big" />
                  (a) We will not be liable if the error was caused by the sender’s payment service provider (for a payment to the E-Money Account) or the recipient’s payment service provider (for a payment from the E-Money Account), unless we are also that payment service provider.
                  <br className="modal-privacy__break-big" />
                  (b) If a payment goes to the wrong person, or is delayed, because you gave us the wrong details, we will not be liable but will use reasonable efforts to try to recover the payment. We may charge reasonable costs for doing so.
                  <br className="modal-privacy__break-big" />
                  3.2 Unauthorised payments
                  <br className="modal-privacy__break-big" />
                  3.2.1 If there is a payment from the E-Money Account that you did not authorise, we will immediately refund the payment and any charges you have paid as a result subject to the other provisions of this Part C.
                  <br className="modal-privacy__break-big" />
                  3.2.2 If we can show that you acted fraudulently, you will be liable for all payments from the E-Money Account that we could not stop.
                  <br className="modal-privacy__break-big" />
                  3.2.3 If we can show you have been grossly negligent in keeping safe your E-Money Account log-in name and password or any device used by you to access our Services, you will be liable for payments from the E-Money Account but only if the payments are not in connection with a distance contract (as defined in regulation 62 PSRs) and only until you have informed us that any device or log-in details have been lost, stolen or could be misused.
                  <br className="modal-privacy__break-big" />
                  3.2.4 You should without undue delay notify us (using the details at Clause 12.1) if it becomes aware of the loss, theft or misuse of your Profile log-in details or any device which you use to access your Profile.
                  <br className="modal-privacy__break-big" />
                  3.3 We will not provide a refund under paragraphs 0 or 3.2 if you fail to bring an unauthorised or incorrectly executed transaction to our attention without undue delay and in any case within thirteen (13) months of the date of the Transaction.
                  <br className="modal-privacy__break-big" />
                  3.4 We shall be responsible for any loss suffered by you as a result of us breaking this Agreement. There are two exceptions to this rule:
                  <br className="modal-privacy__break-big" />
                  3.4.1 we shall not be liable for losses or costs caused by a Force Majeure Event; and
                  <br className="modal-privacy__break-big" />
                  3.4.2 we shall not be liable for losses or costs where Applicable Laws mean we had to break this Agreement.
                </span>
              </div>
            </div>
          </div>
        </Portal>
      </CSSTransition>
    );
  }
}

export default ModalPrivacy;
