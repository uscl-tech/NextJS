"use client"

import Link from "next/link"
import { Terminal, Cpu, ArrowRight, Database, BarChart3, Activity, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-black bg-gradient-to-b from-slate-950 to-black flex flex-col items-center justify-center p-4 md:p-8 text-green-400">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-center opacity-5"></div>

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[2px] bg-green-500/10 animate-[scanline_8s_linear_infinite] absolute"></div>
      </div>

      <div
        className={`relative z-10 max-w-4xl w-full transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="flex items-center gap-3 mb-6">
          <Terminal className="w-6 h-6 text-green-500" />
          <div className="text-xs text-green-500 font-mono">
            system.status: <span className="text-green-400">online</span>
          </div>
          <div className="ml-auto text-xs text-green-500/70 font-mono">
            <span className="animate-pulse">█</span> {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className="backdrop-blur-sm bg-slate-900/60 border border-green-900/50 rounded-xl shadow-[0_0_15px_rgba(0,255,127,0.15)] overflow-hidden">
          <div className="border-b border-green-900/30 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-green-500" />
              <h2 className="font-mono text-green-300 text-sm">NEXUS_CORE</h2>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
          </div>

          <div className="p-6 space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                NEXT<span className="text-green-500">_</span>CORE
              </h1>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-green-300/80 font-mono text-sm">System operational // All services online</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="font-mono uppercase text-xs tracking-wider text-green-500 flex items-center gap-2 after:h-px after:flex-grow after:bg-green-900/50">
                <span>Available Services</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* API Endpoint Card */}
                <div className="bg-slate-950/80 border border-green-900/30 rounded-lg overflow-hidden group hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,127,0.2)]">
                  <div className="p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div className="space-y-2 flex-grow">
                        <h3 className="font-medium text-green-300">Cryptocurrency API</h3>
                        <div className="font-mono text-xs bg-black/50 px-2 py-1.5 rounded text-green-400 border border-green-900/30">
                          GET /api/crypto
                        </div>
                        <p className="text-sm text-green-400/70">Raw JSON data for cryptocurrency assets</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-green-900/30 p-4 bg-black/20">
                    <Link
                      href="/api/crypto"
                      className="w-full flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 font-medium py-2.5 px-4 rounded-md transition-all duration-200 group"
                    >
                      <span>VIEW RAW DATA</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Crypto Dashboard Card */}
                <div className="bg-slate-950/80 border border-green-900/30 rounded-lg overflow-hidden group hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,127,0.2)]">
                  <div className="p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div className="space-y-2 flex-grow">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-green-300">Crypto Dashboard</h3>
                          <span className="px-1.5 py-0.5 text-[10px] bg-green-500/20 text-green-400 rounded font-mono uppercase">
                            New
                          </span>
                        </div>
                        <div className="font-mono text-xs bg-black/50 px-2 py-1.5 rounded text-green-400 border border-green-900/30">
                          /crypto
                        </div>
                        <p className="text-sm text-green-400/70">Visual dashboard for cryptocurrency market data</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-green-900/30 p-4 bg-black/20">
                    <Link
                      href="/crypto"
                      className="w-full flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 font-medium py-2.5 px-4 rounded-md transition-all duration-200 group relative overflow-hidden"
                    >
                      <span className="relative z-10">LAUNCH DASHBOARD</span>
                      <Zap size={16} className="relative z-10 group-hover:scale-125 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="font-mono text-xs border border-yellow-900/50 bg-yellow-950/20 rounded-md p-4 text-yellow-500/90">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></div>
                <span className="font-bold">SYSTEM NOTICE</span>
              </div>
              <p>
                The Crypto Dashboard provides an enhanced visualization interface for the cryptocurrency data. For raw
                JSON data, use the API endpoint directly.
              </p>
            </div>

            {/* System metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <div className="bg-black/30 border border-green-900/30 rounded-md p-3">
                <div className="text-[10px] text-green-500/70 font-mono uppercase mb-1">Memory</div>
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-green-400" />
                  <div className="text-xs text-green-400/90 font-mono">512MB / 1GB</div>
                </div>
              </div>
              <div className="bg-black/30 border border-green-900/30 rounded-md p-3">
                <div className="text-[10px] text-green-500/70 font-mono uppercase mb-1">CPU</div>
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-green-400" />
                  <div className="text-xs text-green-400/90 font-mono">12% LOAD</div>
                </div>
              </div>
              <div className="bg-black/30 border border-green-900/30 rounded-md p-3">
                <div className="text-[10px] text-green-500/70 font-mono uppercase mb-1">Uptime</div>
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-green-400" />
                  <div className="text-xs text-green-400/90 font-mono">24D:12H:33M</div>
                </div>
              </div>
              <div className="bg-black/30 border border-green-900/30 rounded-md p-3">
                <div className="text-[10px] text-green-500/70 font-mono uppercase mb-1">Requests</div>
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-green-400" />
                  <div className="text-xs text-green-400/90 font-mono">1,342 / DAY</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-green-500/50 text-xs font-mono">
          <p>NEXT_CORE v15.0.1 // RUNTIME: STABLE // LAST UPDATED: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </main>
  )
}

