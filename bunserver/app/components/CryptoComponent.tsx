"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type Cryptocurrency = {
  name: string
  symbol: string
  price: number
  marketCap: string
  img: string
}

export default function CryptoComponent() {
  const [cryptos, setCryptos] = useState<Cryptocurrency[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true)

        // Add a 5-second delay before fetching
        await new Promise((resolve) => setTimeout(resolve, 5000))

        const response = await fetch("/api/crypto")

        if (!response.ok) {
          throw new Error("Failed to fetch cryptocurrency data")
        }

        const data = await response.json()
        setCryptos(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        console.error("Error fetching crypto data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptoData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
            <div className="absolute inset-2 rounded-full bg-green-500/40 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-green-500/60"></div>
          </div>
          <p className="text-green-400 font-mono text-sm">Loading crypto data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4 max-w-md text-center">
          <p className="text-red-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-md text-sm transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
            Cryptocurrency Market
          </h2>
          <p className="text-green-400/70 max-w-2xl mx-auto">
            Live data for top cryptocurrencies in the market with current prices and market capitalization.
          </p>
        </div>

        <div className="relative">
          {/* Background bubbles */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-green-500/5 animate-float"
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptos.map((crypto) => (
              <div
                key={crypto.symbol}
                className="group relative bg-slate-900/80 backdrop-blur-sm border border-green-900/50 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,127,0.2)] transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="p-6 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center p-2 border border-slate-700 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={crypto.img || "/placeholder.svg"}
                      alt={crypto.name}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white text-lg">{crypto.name}</h3>
                      <span className="text-xs font-mono px-2 py-1 rounded-full bg-slate-800 text-green-400 border border-green-900/50">
                        {crypto.symbol}
                      </span>
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Current Price</p>
                        <p className="text-2xl font-bold text-green-400">
                          $
                          {crypto.price.toLocaleString(undefined, {
                            minimumFractionDigits: crypto.price < 10 ? 2 : 0,
                            maximumFractionDigits: crypto.price < 10 ? 2 : 0,
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-400 mb-1">Market Cap</p>
                        <p className="text-sm font-medium text-blue-400">{crypto.marketCap}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom highlight */}
                <div className="h-1 w-full bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

