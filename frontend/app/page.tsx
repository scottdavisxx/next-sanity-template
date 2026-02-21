import HeroBanner from './components/HeroBanner'
import Navigation from './components/Navigation'
import Subnav from './components/Subnav'

const tempNavigationContent = {
  "_key": "9cb3816cfaf4",
  "_type": "navigation",
  "color": "white"
}

const tempHeroContent = {
  "_key": "48df50bb7cf9",
  "_type": "heroBanner",
  "cta": {
    "buttonText": "Schedule A Visit",
    "href": "#",
    "newTab": true
  },
  "imageAndAltText": {
    "altText": "Kids at School",
    "image": {
      "_type": "image",
      "asset": {
        "_ref": "image-47cc3c814eba1e8eac1b6d50dc63b52ec521a575-871x581-png",
        "_type": "reference"
      }
    }
  },
  "titleOne": "Test Title One .",
  "titleTwo": "Test Title Two"
}


export default async function Page() {

  return (
    <>
      <Navigation block={tempNavigationContent} />
      <HeroBanner block={tempHeroContent} />
      <Subnav />
    </>
  )
}