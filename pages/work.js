import React from 'react';
import Header from '@/components/Header';
import Workbanner from '@/components/work/Workbanner';
import CreateImpact from '@/components/work/CreateImpact';
import Footer from '@/components/Footer';

function work() {
  return (
    <div>
        <Header/>
        <Workbanner/>
        <CreateImpact/>
        <Footer/>
    </div>
  )
}

export default work
