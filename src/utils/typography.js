import Typography from "typography";
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import verticalRhythm from 'compass-vertical-rhythm';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

// Brands
import faBitcoin from '@fortawesome/fontawesome-free-brands/faBitcoin'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faGithubAlt from '@fortawesome/fontawesome-free-brands/faGithubAlt'
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faTwitterSquare from '@fortawesome/fontawesome-free-brands/faTwitterSquare'

// Solids
import faBeer from '@fortawesome/fontawesome-pro-solid/faBeer'
import faCalendar from '@fortawesome/fontawesome-pro-solid/faCalendar'
import faGamepad from '@fortawesome/fontawesome-pro-solid/faGamepad'
import faGem from '@fortawesome/fontawesome-pro-solid/faGem'
import faGlassMartini from '@fortawesome/fontawesome-pro-solid/faGlassMartini'
import faGlobe from '@fortawesome/fontawesome-pro-solid/faGlobe'
import faHandPointer from '@fortawesome/fontawesome-pro-solid/faHandPointer'
import faHandPointRight from '@fortawesome/fontawesome-pro-solid/faHandPointRight'
import faHeart from '@fortawesome/fontawesome-pro-solid/faHeart'
import faLink from '@fortawesome/fontawesome-pro-solid/faLink'
import faMoneyBillAlt from '@fortawesome/fontawesome-pro-solid/faMoneyBillAlt'
import faPaperPlane from '@fortawesome/fontawesome-pro-solid/faPaperPlane'
import faPlane from '@fortawesome/fontawesome-pro-solid/faPlane'
import faSpinner from '@fortawesome/fontawesome-pro-solid/faSpinner'
import faQuoteLeft from '@fortawesome/fontawesome-pro-solid/faQuoteLeft'
import faQuoteRight from '@fortawesome/fontawesome-pro-solid/faQuoteRight'

// Lights
import faCreditCard from '@fortawesome/fontawesome-pro-light/faCreditCard'
import faCut from '@fortawesome/fontawesome-pro-light/faCut'
import faHandSpock from '@fortawesome/fontawesome-pro-light/faHandSpock'
import faSave from '@fortawesome/fontawesome-pro-light/faSave'

fontawesome.library.add(
  faBitcoin,
  faFacebookF,
  faGithubAlt,
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faBeer,
  faCalendar,
  faGamepad,
  faGem,
  faGlassMartini,
  faGlobe,
  faHandPointer,
  faHandPointRight,
  faHeart,
  faLink,
  faMoneyBillAlt,
  faPaperPlane,
  faPlane,
  faSpinner,
  faQuoteLeft,
  faQuoteRight,
  faCreditCard,
  faCut,
  faHandSpock,
  faSave
)

const typography = new Typography({
  googleFonts: [
    {
      name: 'Merriweather',
      styles: [
        '300',
        '400',
      ],
    },
    {
      name: 'Lato',
      styles: [
        '300',
      ],
    },
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  headerFontFamily: ['Dense', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
  headerWeight: 300,
  bodyFontFamily: ['Merriweather', 'serif'],
  bodyColor: "inherit",
  bodyWeight: 300,
  boldWeight: 400,
  overrideStyles:  ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      'font-size': rhythm(2),
      'line-height': rhythm(1.75),
      'text-transform': 'uppercase'
    },
    h2: {
      'font-size': rhythm(1.2),
      'line-height': rhythm(1.5 / 1.2),
      'text-transform': 'uppercase'
    },
    h3: {
      'font-size': rhythm(1.2),
      'line-height': rhythm(1.5 / 1.2),
      'margin-top': rhythm(1)
    },
    h4: {
      'font-size': rhythm(1.2),
      'line-height': rhythm(1.5 / 1.2)
    }
  }),
});

export default typography;
