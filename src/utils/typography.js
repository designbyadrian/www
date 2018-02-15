import Typography from "typography";
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import verticalRhythm from 'compass-vertical-rhythm';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

// Brands
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faTwitterSquare from '@fortawesome/fontawesome-free-brands/faTwitterSquare'

// Solids
import faPaperPlane from '@fortawesome/fontawesome-pro-solid/faPaperPlane'
import faGem from '@fortawesome/fontawesome-pro-solid/faGem'
import faGlassMartini from '@fortawesome/fontawesome-pro-solid/faGlassMartini'
import faGlobe from '@fortawesome/fontawesome-pro-solid/faGlobe'
import faHandPointRight from '@fortawesome/fontawesome-pro-solid/faHandPointRight'
import faHeart from '@fortawesome/fontawesome-pro-solid/faHeart'
import faLink from '@fortawesome/fontawesome-pro-solid/faLink'
import faSpinner from '@fortawesome/fontawesome-pro-solid/faSpinner'
import faQuoteLeft from '@fortawesome/fontawesome-pro-solid/faQuoteLeft'
import faQuoteRight from '@fortawesome/fontawesome-pro-solid/faQuoteRight'

// Lights
import faCut from '@fortawesome/fontawesome-pro-light/faCut'
import faGamepad from '@fortawesome/fontawesome-pro-light/faGamepad'
import faHandSpock from '@fortawesome/fontawesome-pro-light/faHandSpock'
import faSave from '@fortawesome/fontawesome-pro-light/faSave'

fontawesome.library.add(
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faPaperPlane,
  faGem,
  faGlassMartini,
  faGlobe,
  faHandPointRight,
  faHeart,
  faLink,
  faSpinner,
  faQuoteLeft,
  faQuoteRight,
  faCut,
  faGamepad,
  faHandSpock,
  faSave
)

console.log(fontawesome);

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
  baseLineHeight: 1.5,
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
