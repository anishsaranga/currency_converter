import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  // custom hook
  const currencyInfo = useCurrencyInfo(from)
  // currency options
  const options = Object.keys(currencyInfo)

  // swap fields
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // convert functionality
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div style={{
      backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
  }}>
    <nav className='text-center text-stone-100 font-semibold font-mono text-4xl md:text-6xl bg-transparent backdrop-blur-sm p-4'>Currency Converter</nav>
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => {
                              setFrom(currency)
                            }}
                            selectedCurrency={from}
                            onAmountChange={(amount) =>
                            setAmount(amount)}
                        />
                    </div>
                  
                    <div className="w-full mt-2 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) =>
                            setTo(currency)}
                            selectedCurrency={to}
                        />
                    </div>
                    <div className='flex flex-col flex-2 space-y-2 md:space-x-2 md:space-y-0 md:flex-row'>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                    <button
                            type="button"
                            className="bg-blue-600 text-white px-4 py-3 rounded-lg"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
);
}

export default App
