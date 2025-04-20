import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

function Background({ children }) {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          points: 20.00,            
          maxDistance: 15.00,       
          spacing: 15.00,           
          showDots: true,           
          speed: 0.5                
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <Box position="relative" minH="100vh">
      <Box
        ref={vantaRef}
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
        opacity="0.8"              
      />
      <Box
        position="relative"
        zIndex="1"
        overflow="auto"
        minH="100vh"
        bg="rgba(0, 0, 0, 0.85)"   
      >
        {children}
      </Box>
    </Box>
  )
}

Background.propTypes = {
  children: PropTypes.node
}

export default Background