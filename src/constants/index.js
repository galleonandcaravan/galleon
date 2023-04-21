import aboutImageTop from '../images/about/bg-2.png';
import aboutImageBottom from '../images/about/bg-1.png';
import missionImageTop from '../images/mission/bg-2.png';
import missionImageBottom from '../images/mission/bg-1.png';
import storyImageTop from '../images/story/bg-2.png';
import storyImageBottom from '../images/story/bg-1.png';
import expertiseImageTop from '../images/expertise/bg-2.png';
import expertiseImageBottom from '../images/expertise/bg-1.png';
import contactImageTop from '../images/contact/bg-2.png';
import contactImageBottom from '../images/contact/bg-1.png';

export const PAGES = {
  ABOUT: 'about',
  STORY: 'story',
  MISSION: 'mission',
  EXPERTISE: 'expertise',
  CONTACT: 'contact',
};

export const PAGES_IMAGES = {
  ABOUT: {
    TOP: aboutImageTop,
    BOTTOM: aboutImageBottom,
  },
  MISSION: {
    TOP: missionImageTop,
    BOTTOM: missionImageBottom,
  },
  STORY: {
    TOP: storyImageTop,
    BOTTOM: storyImageBottom,
  },
  EXPERTISE: {
    TOP: expertiseImageTop,
    BOTTOM: expertiseImageBottom,
  },
  CONTACT: {
    TOP: contactImageTop,
    BOTTOM: contactImageBottom,
  },
}

export const HEADER_AUTH_LINKS = {
  REGISTER: 'https://onboarding.paydirect.io/galleon&caravan/forms/individual',
  REGISTER_BUSINESS: 'https://onboarding.paydirect.io/galleon_and_caravan/forms/corporate',
  REGISTER_PERSONAL: 'https://onboarding.paydirect.io/galleon_and_caravan/forms/individual',
  LOGIN: 'http://galcarlite.paydirect.io/',
}
