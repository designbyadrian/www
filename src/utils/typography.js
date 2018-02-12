import Typography from "typography";
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import verticalRhythm from 'compass-vertical-rhythm';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faGlassMartini,
  faQuoteLeft,
  faQuoteRight
} from '@fortawesome/fontawesome-pro-solid'

import {
  faCut,
  faHandSpock,
  faSave
} from '@fortawesome/fontawesome-pro-light'

fontawesome.library.add(
  faCut,
  faHandSpock,
  faGlassMartini,
  faSave,
  faQuoteLeft,
  faQuoteRight
)

console.log(fontawesome.library);

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
    },
    a: {
      'color': '#322342'
    }
  }),
});

export default typography;
