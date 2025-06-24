import React from 'react'
import PageLayout from './PageLayout'
import Logo from '../base/Logo'

const Header = () => {
  return (
    //换成header标签的主要是为了SEO优化
    <header className='bg-white py-5'>
      <PageLayout>
        <Logo/>
      </PageLayout>
    </header>
  )
}

export default Header