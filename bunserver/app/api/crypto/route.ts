import { NextResponse } from "next/server"

// This function handles GET requests to /api/crypto
export async function GET() {
  // Create an array of cryptocurrency data
  const cryptoData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 47000,
      marketCap: "900B",
      img: "https://cdn-icons-png.flaticon.com/512/6557/6557081.png",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 3100,
      marketCap: "370B",
      img: "https://static-00.iconduck.com/assets.00/ethereum-cryptocurrency-icon-2048x2029-a37wbe09.png",
    },
    {
      name: "SandBox",
      symbol: "SAND",
      price: 400,
      marketCap: "65B",
      img: "https://static.vecteezy.com/system/resources/previews/024/093/424/non_2x/the-sandbox-sand-glass-crypto-coin-3d-illustration-free-png.png",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: 1.2,
      marketCap: "40B",
      img: "https://static.vecteezy.com/system/resources/previews/024/092/734/non_2x/cardano-ada-glass-crypto-coin-3d-illustration-free-png.png",
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: 150,
      marketCap: "50B",
      img: "https://static.vecteezy.com/system/resources/previews/024/093/325/non_2x/solana-sol-glass-crypto-coin-3d-illustration-free-png.png",
    },
  ]

  // Return the data as JSON
  return NextResponse.json(cryptoData)
}

