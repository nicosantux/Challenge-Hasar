import React from 'react'

import { ZodiacImage } from '../elements/zodiacImage'
import capricornio from '../img/capricornio.png'
import acuario from '../img/acuario.png'
import piscis from '../img/piscis.png'
import aries from '../img/aries.png'
import tauro from '../img/tauro.png'
import geminis from '../img/geminis.png'
import cancer from '../img/cancer.png'
import leo from '../img/leo.png'
import virgo from '../img/virgo.png'
import libra from '../img/libra.png'
import escorpion from '../img/escorpion.png'
import sagitario from '../img/sagitario.png'

export const getZodiacSignImage = (zodiacSign) => {
  switch (zodiacSign) {
    case 'capricornio':
      return <ZodiacImage alt="capricornio" src={capricornio} />
    case 'acuario':
      return <ZodiacImage alt="acuario" src={acuario} />
    case 'piscis':
      return <ZodiacImage alt="piscis" src={piscis} />
    case 'aries':
      return <ZodiacImage alt="aries" src={aries} />
    case 'tauro':
      return <ZodiacImage alt="tauro" src={tauro} />
    case 'geminis':
      return <ZodiacImage alt="geminis" src={geminis} />
    case 'cancer':
      return <ZodiacImage alt="cancer" src={cancer} />
    case 'leo':
      return <ZodiacImage alt="leo" src={leo} />
    case 'virgo':
      return <ZodiacImage alt="virgo" src={virgo} />
    case 'libra':
      return <ZodiacImage alt="libra" src={libra} />
    case 'escorpion':
      return <ZodiacImage alt="escorpion" src={escorpion} />
    case 'sagitario':
      return <ZodiacImage alt="sagitario" src={sagitario} />
  }
}
