import React from 'react';
import Header from '@/components/Header';
import ImpactBanner from '@/components/Impact/ImpactBanner';
import CounterImpact from '@/components/Impact/CounterImpact';
import Communities from '@/components/Impact/Communities';
import Footer from '@/components/Footer';

function impact() {
  return (
    <div>
      <Header/>
      <ImpactBanner/>
      <CounterImpact/>
      <Communities/>
      <Footer/>
    </div>
  )
}

export default impact
