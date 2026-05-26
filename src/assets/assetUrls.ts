const modules = import.meta.glob('./website/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

export const asset = (file: string) => modules[`./website/${file}`] ?? ''

export const img = {
  logo: asset('aadhwan-logo.svg'),
  footerLogo: asset('aadhwan-logo.svg'),
  announcement: asset('annou.svg'),
  innerBanner: asset('banner.png'),
  heroGlobe: asset('slider-image.png'),
  aboutBg: asset('about-bg-image.png'),
  aboutCenter: asset('about-center-image.png'),
  servicesBg: asset('services-bg-image.png'),
  servicesHero: asset('services-sec-image.png'),
  ctaBg: asset('banner-bg-image.png'),
  security: asset('security-image.png'),
  contact: asset('contact-image.png'),
  call: asset('call.png'),
  location: asset('location.png'),
  mail: asset('sms.png'),
}

export const aboutIcons = [
  asset('about-icon4.png'),
  asset('about-icon5.png'),
  asset('about-icon6.png'),
  asset('about-icon1.png'),
  asset('about-icon2.png'),
  asset('about-icon3.png'),
]

export const industryIcons = [
  asset('industries-icon6.png'),
  asset('industries-icon5.png'),
  asset('industries-icon4.png'),
  asset('industries-icon3.png'),
  asset('industries-icon2.png'),
  asset('industries-icon1.png'),
]

export const serviceImages = [
  asset('upload-img1.png'),
  asset('upload-img2.png'),
  asset('upload-img3.png'),
  asset('upload-img4.png'),
  asset('upload-img5.png'),
  asset('upload-img6.png'),
]

export const caseImages = [
  asset('upload-img1-2.png'),
  asset('upload-img2-2.png'),
  asset('upload-img3-2.png'),
  asset('upload-img4-2.png'),
  asset('upload-img5-2.png'),
  asset('upload-img6-2.png'),
]

export const blogImages = [
  asset('upload-img1.png'),
  asset('upload-corporate-businessman-giving-presentation-large-audience_53876-101865.jpg'),
  asset('upload-close-up-recording-video-with-smartphone-during-concert_1153-7310.jpg'),
  asset('upload-Top-10-Cybersecurity-Best-for-Businesses-2.png'),
  asset('upload-Phishing-Attacks-New-Tactics-and-How-to-Stay-Safe-1.png'),
  asset('upload-Phishing-Attacks-New-Tactics-and-How-to-Stay-Safe.png'),
  asset('upload-Cloud-Security-Challenges-and-Solutions-1.png'),
  asset('upload-Top-10-Cybersecurity-Best-for-Businesses-1.png'),
  asset('upload-Top-10-Cybersecurity-Best-for-Businesses.png'),
  asset('upload-Cloud-Security-Challenges-and-Solutions.png'),
]

export const processImages = [
  asset('how-we-work-image1.png'),
  asset('how-we-work-image2.png'),
  asset('how-we-work-image3.png'),
  asset('how-we-work-image4.png'),
]

export const trainingImages = [
  asset('upload-img8.png'),
  asset('upload-img7-1.png'),
  asset('upload-img6-3.png'),
]

export const teamImages = [
  asset('upload-image1.png'),
  asset('upload-image2.png'),
  asset('upload-image3.png'),
  asset('upload-image4.png'),
  asset('upload-image5.png'),
]
