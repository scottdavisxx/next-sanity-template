import { ReactNode } from 'react'
import OneColInfo from "@/app/components/OneColInfo";
import TwoColInfo from "@/app/components/TwoColInfo";

export default function TuitionPage() {
  return (
    <>
      <TwoColInfo />
      <OneColInfo variant="text" />
      <OneColInfo variant="image" />
    </>
  )
}
