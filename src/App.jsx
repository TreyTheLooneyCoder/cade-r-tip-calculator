import './App.css'
import TipCalculator from './components/TipCalculator'
import mainLogo from './assets/logo.svg'

function App() {
  return (
    <>
      <div className='bg-lightGrayishCyan flex flex-col justify-center items-center min-w-max min-h-max '>
        <div className='my-14 lg:mt-20 lg:mb-20'>
          <img src={mainLogo} alt="Company Logo" />
        </div>
        <div className='bg-white rounded-2xl p-8 mb-20'>
          <TipCalculator />
        </div>
      </div>
    </>
  )
}

export default App
