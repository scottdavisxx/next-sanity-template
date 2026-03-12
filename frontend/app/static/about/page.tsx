import CtaWithCard from "@/app/static-components/CtaWithCard";
import CtaWithMediaCard from "@/app/static-components/CtaWithMediaCard";
import FeaturedEvents, { FeaturedEvent } from "@/app/components/FeaturedEvents";
import FourColStatistics from "@/app/static-components/FourColStatistics";
import HeroBanner from "@/app/static-components/HeroBanner";
import Leadership from "@/app/static-components/Leadership";
import Navigation from "@/app/static-components/Navigation";
import Subnav from "@/app/static-components/Subnav";
import ThreeColCtas from "@/app/static-components/ThreeColCtas";
import { sanityFetch } from "@/sanity/lib/live";
import { featuredEventsQuery } from "@/sanity/lib/queries";

const tempNavigationContent = {
  "_key": "9cb3816cfaf4",
  "_type": "navigation",
  "color": "dark-blue"
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
  "titleOne": "Education with Purpose.",
  "titleTwo": "Faith with Action."
}

const ctaWithCardContent = {
  title: "Shaping Students Since 1961",
  blurb: `Founded in 1961 as a ministry of Our Redeemer Lutheran Church, OR Dallas began with one kindergarten class and one teacher.
  
  In the decades since, we’ve grown grade by grade, building a Christ-centered school community that has served North Dallas families for more than 65 years.
  
  Today, we are proud to be part of The Lutheran Church Missouri Synod (LCMS), which operates the largest Protestant parochial school system in America.`,
  image: "/about-card.png",
  altText: "About Card",
  icon: true,
}

const ctaWithMediaCardContent = {
  title: "OR Dallas is growing in excellence and impact.",
  blurb: `Learn how our school is expanding to serve more families and strengthen what we offer students`,
  image: "/about-video.png",
  altText: "About Card",
}

const ctaWithCardContentTwo = {
  title: "What We Believe",
  blurb: `Our school is a ministry of Our Redeemer Lutheran Church in Dallas, a proud member of the Lutheran Church Missouri Synod (LCMS). Our faith is grounded in the same Bible-based teachings that shaped the Reformation and continue to guide Lutheran believers today.

  We hold to three core truths: Grace Alone, Faith Alone, and Scripture Alone. These principles shape our classrooms, our community, and the way we nurture each child’s spiritual growth.`,
  bgImage: "/beyond-classroom/section-bg.png",
  image: "/church.png",
  altText: "Church",
  cta: {
    buttonText: "Learn About Lutheran Education",
    href: "#",
    dark: true,
  }
}

export default async function AboutPage() {
  const startOfToday = new Date();
  startOfToday.setUTCHours(0, 0, 0, 0);
  const { data: events } = await sanityFetch({
    query: featuredEventsQuery,
    params: { now: startOfToday.toISOString() },
  });

  const featuredEvents = (events ?? []) as FeaturedEvent[];

  return (
    <>
      {/* @ts-expect-error Navigation expects Sanity-shaped block props */}
      <Navigation block={tempNavigationContent} />
      {/* @ts-expect-error HeroBanner expects Sanity-shaped block props */}
      <HeroBanner block={tempHeroContent} />
      <Subnav />
      <CtaWithCard {...ctaWithCardContent} />
      <FeaturedEvents events={featuredEvents} />
      <FourColStatistics />
      <ThreeColCtas />
      <CtaWithMediaCard {...ctaWithMediaCardContent} />
      <Leadership />
      <CtaWithCard {...ctaWithCardContentTwo} />
    </>
  )
}