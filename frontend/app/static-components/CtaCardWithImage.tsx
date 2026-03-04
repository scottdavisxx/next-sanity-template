import Cta from "./ui/Cta";

export default function CtaCardWithImage() {
  return (
    <div className="bg-white text-dark-blue px-24 py-16">
      <div className="rounded-2xl border border-dar">
        <h2>Our Lutheran Identity</h2>
        <p></p>
        <Cta href="#" buttonText="Meet Our Pastors" />
      </div>
      <div className="rounded-2xl border border-dark-blue"></div>
    </div>
  )
}