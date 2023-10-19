import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import { CustomizationProvider } from './contexts/Customization'
import Configurator from './components/Configurator'

function App() {

  return (
    <div className='App'>
      <CustomizationProvider>
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </CustomizationProvider>
    </div>
  )
}

export default App
