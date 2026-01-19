import { defineType } from "sanity";
import { titleOne, titleTwo, cta, imageAndAltText } from "../sharedFields";


export const heroBanner = defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'object',
  // icon: chooseAnIcon
  // groups: [
  //   {},
  //   {}
  // ],
  fields: [
    titleOne,
    titleTwo,
    cta,
    imageAndAltText
  ]
})