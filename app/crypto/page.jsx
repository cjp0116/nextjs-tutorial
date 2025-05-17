'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, ArrowUpRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import AcmeLogo from '@/app/ui/acme-logo';

export default function CryptoPage() {
    const [activeTimeFilter, setActiveTimeFilter] = useState('1D');
    const [activeToggle, setActiveToggle] = useState('Tradable');

    const timeFilters = [
        { id: 'LIVE', label: 'LIVE', hasIndicator: true },
        { id: '1D', label: '1D' },
        { id: '1W', label: '1W' },
        { id: '1M', label: '1M' },
        { id: '3M', label: '3M' },
        { id: 'YTD', label: 'YTD' },
        { id: '1Y', label: '1Y' },
        { id: 'ALL', label: 'ALL' },
    ];

    const cryptoData = [
        {
            name: 'Bitcoin',
            symbol: 'BTC',
            price: '$103,312.80',
            change: -0.68,
            marketCap: '2.06T'
        },
        {
            name: 'Ethereum',
            symbol: 'ETH',
            price: '$2,484.79',
            change: -4.37,
            marketCap: '308.35B'
        },
        {
            name: 'XRP',
            symbol: 'XRP',
            price: '$2.353',
            change: -2.74,
            marketCap: '137.84B'
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation Bar */}
            <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <div className="flex items-center">
                    <Link href="/" className="mr-6">
                        {/* <Image
                            src="/placeholder.svg?height=32&width=32"
                            alt="Robinhood Logo"
                            width={32}
                            height={32}
                            className="brightness-0 invert"
                        /> */}
                        <AcmeLogo className="h-8 w-8" />
                    </Link>
                </div>

                <div className="relative flex-1 max-w-md mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="esgu"
                            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-[#d0ff00]"
                        />
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <Link
                        href="/legend"
                        className="flex items-center bg-[#d0ff00] text-black font-medium px-4 py-2 rounded-full"
                    >
                        Robinhood Legend <ArrowUpRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                    <Link href="/rewards" className="text-white hover:text-[#d0ff00]">
                        Rewards
                    </Link>
                    <Link href="/investing" className="text-white hover:text-[#d0ff00]">
                        Investing
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-8">
                {/* Price Section */}
                <section className="mb-12">
                    <h1 className="text-3xl font-bold mb-2">Crypto</h1>
                    <div className="text-5xl font-bold mb-1">$0.00</div>
                    <div className="flex items-center text-[#d0ff00]">
                        <ArrowUpIcon className="h-4 w-4 mr-1" />
                        <span>$0.00</span>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="mb-8 relative">
                    <div className="h-0.5 bg-[#d0ff00] w-full relative">
                        <div className="absolute left-[20%] top-1/2 -translate-y-1/2">
                            <div className="h-3 w-3 rounded-full bg-[#d0ff00] relative">
                                <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-400">
                                    3:20 AM
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Time Filter Section */}
                <section className="mb-12 border-b border-gray-800 pb-4">
                    <div className="flex space-x-6">
                        {timeFilters.map((filter) => (
                            <button
                                key={filter.id}
                                className={`relative py-2 px-1 text-sm font-medium ${activeTimeFilter === filter.id ? 'text-[#d0ff00]' : 'text-white'
                                    }`}
                                onClick={() => setActiveTimeFilter(filter.id)}
                            >
                                {filter.hasIndicator && (
                                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 bg-white rounded-full"></span>
                                )}
                                {filter.label}
                                {activeTimeFilter === filter.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d0ff00]"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Cryptocurrencies Section */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Explore cryptocurrencies</h2>
                        <div className="flex bg-gray-900 rounded-full p-1">
                            <button
                                className={`px-4 py-1.5 text-sm rounded-full transition ${activeToggle === 'Tradable'
                                    ? 'bg-white text-black'
                                    : 'text-white'
                                    }`}
                                onClick={() => setActiveToggle('Tradable')}
                            >
                                Tradable
                            </button>
                            <button
                                className={`px-4 py-1.5 text-sm rounded-full transition ${activeToggle === 'Non-tradable'
                                    ? 'bg-white text-black'
                                    : 'text-white'
                                    }`}
                                onClick={() => setActiveToggle('Non-tradable')}
                            >
                                Non-tradable
                            </button>
                        </div>
                    </div>

                    {/* Crypto Table */}
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-800">
                                <th className="text-left py-3 text-sm text-gray-400 font-normal">Name</th>
                                <th className="text-left py-3 text-sm text-gray-400 font-normal">Symbol</th>
                                <th className="text-left py-3 text-sm text-gray-400 font-normal">Price</th>
                                <th className="text-left py-3 text-sm text-gray-400 font-normal">Today</th>
                                <th className="text-left py-3 text-sm text-gray-400 font-normal">Market Cap</th>
                                <th className="py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoData.map((crypto) => (
                                <tr key={crypto.symbol} className="border-b border-gray-800">
                                    <td className="py-4 font-medium">{crypto.name}</td>
                                    <td className="py-4 text-gray-400">{crypto.symbol}</td>
                                    <td className="py-4">{crypto.price}</td>
                                    <td className="py-4 flex items-center text-red-500">
                                        <ArrowDownIcon className="h-4 w-4 mr-1" />
                                        {Math.abs(crypto.change)}%
                                    </td>
                                    <td className="py-4">{crypto.marketCap}</td>
                                    <td className="py-4 text-right">
                                        <button className="p-2 hover:bg-gray-800 rounded-full">
                                            <PlusIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};
