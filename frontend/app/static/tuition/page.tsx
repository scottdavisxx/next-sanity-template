import { ReactNode } from 'react'
import OneColInfo from "@/app/static-components/OneColInfo";
import TwoColInfo from "@/app/static-components/TwoColInfo";

export default function TuitionPage() {
  return (
    <>
      <TwoColInfo />
      <OneColInfo variant="text" />
      <OneColInfo variant="image" />
    </>
  )
}
