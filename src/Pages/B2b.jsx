import React from 'react'
import HeroB2b from '../Components/B2b/HeroB2b'
import B2b1 from '../Components/B2b/B2b1'
import Text from '../Components/B2b/Text'
import Why from '../Components/B2b/Why'

export default function B2b() {
    return(
        <div className="overflow-x-hidden">
       <HeroB2b/>
       <B2b1/>
       <Text/>
       <Why/>
       <br className="border-t-2 border-textcolor mt-10 mb-10" />
        </div>
    )
}