import React from 'react'
import { Header, Layout } from '../components';

export const aboutUsPage = () => {
  return (<Layout><div style={{ color: `teal` }}>
    <Header headingText={'About Us Page'} />
    <Header headingText={"It's pretty cool"} />
    <p>Such wow. Very React.</p>
  </div></Layout>
  )
}

export default aboutUsPage