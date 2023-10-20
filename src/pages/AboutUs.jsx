import React from 'react'
import styled from 'styled-components'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Footer from '../components/Footer'
import Companies from '../components/Companies'

const AboutUs = () => {
  return (
    <div>
        <TopNav />
        <BottomNav />
        <MainText>Főoldal / <span>Rólunk</span></MainText>
        <ContentWrapper>
            <h1>Rólunk</h1>
            <h2>Már 22 éve az ön megbizható partere.</h2>
            <p>A DentalMedical 2001-es alapítását követően az elmúlt években a régió egyik vezető cégévé fejlődött a fogászati- és fogtechnikai anyagok terjesztésében. Több mint 45 illetékes, felelősségtudó és célorientált személyt foglalkoztatunk.</p>
            <h2>Garantált minőség, ellenőrzött anyagforrás</h2>
            <p>Megbízott képviselői vagyunk a világ 45 legnagyobb fogászati eszközgyártóinak, kizárólag Nyugat-Európa, Amerika és Japán területéről. Partnereink azok a gyártók, akik termékeik minőségével a legjobb szolgáltatást szavatolhatják vásárlóinknak. Szigorúan betartjuk az Egészségügyi Minisztérium törvényeit, valamint a gyógyszerek és gyógyászati eszközök forgalmazásának irányelveit, hogy a lehető legmagasabb szintű minőséget biztosítsuk ügyfeleink, és közvetve a betegek számára. Ezt az általunk eladott áru eredetének és minőségének maximális nyomonkövethetősége biztosítja.</p>
            <h2>Minden, amire szüksége van, könnyen, gyorsan és egy kézből.</h2>
            <p>A DentalMedical kínálata közel 15.000 terméket tartalmaz fogorvosok és fogtechnikusok részére, amelyek megtalálhatók a honlapunkon.</p>
            <h2>A szó igazi értelmében kedvező árak</h2>
            <p>Ha összeveti az árakat, akkor látni fogja, hogy a DM árai legalább 10%-al alacsonyabbak más fogászati központok árainál. Ha ehez hozzáadja a kedvezményeket és jutalékokat, akár 20%-ot is meg tud takarítani!</p>
            <h2>Ma megrendeli, holnap megkapja. Senki sem tudja jobban!</h2>
            <p>A készletről történő gyors és pontos kiszolgálást vásárlóink nagyra értékelik. A szállítást illetően jelmondatunk a következő: Ha megrendeli 14h, az árut megkapja legkésőbb két napon belül. Próbálja ki Ön is!</p>
            <h2>Vásárlóink elégedettsége nálunk valóban az első helyen van.</h2>
            <p>Évente több mint 5000 fogászati rendelő és laboratórium rendel árut a DentalMedical-tól. Együttműködünk mindenkivel, magánrendelőkkel, laboratóriumokkal, egészségházakkal, klinikákkal.</p>
            <p>Kétségtelen, hogy az elmúlt években sikerünk alapja ügyfeleink igényeinek a megértése, mert az ügyfeleink üzleti sikere egyidejűleg cégünk sikere is.</p>
            <h4>Az Ön igényeit és szükségleteit felismerve – mi mindig újabb lehetőségeket kínálunk.
Győződjön meg versenyképességünkről és profitáljon a velünk való együttműködésnek köszönhetően.</h4>

        </ContentWrapper>
        <Companies />
        <Footer />
    </div>
  )
}

 const ContentWrapper = styled.div`
    margin-top: 3rem;
    padding: 0 2rem;
    h1{
        text-align:center;
        color: #0F1822;
        margin-bottom: 1rem;
    }
    h2{
        color: #0F1822;
        padding-bottom: 0.5rem;
    }
    p{
        color: #0F1822;
        padding-bottom: 2rem;
    }
    @media (max-width: 400px){
        padding: 0 0.5rem;
    }
 `
 const MainText = styled.div`
  padding-top: 10rem;
  padding-left: 4rem;
  font-size: 1.2rem;
  font-weight:bold;
  color:#0F1822;
  span{
    color:grey;
  }
  @media (max-width: 1200px){
    padding-top: 5rem;
  }
`

export default AboutUs