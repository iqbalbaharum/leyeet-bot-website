import logo from '@images/logo.jpg';
import img1 from '@images/IMG_2841.png'
import img2 from '@images/IMG_2843.jpg'
import img3 from '@images/IMG_2844.jpg'
import { Parallax } from 'react-scroll-parallax';
import TestimonialBox from '@components/TestimonialBox'
import FaqSingle from '@components/FaqSingle'
import Button from '@components/Button'
import AliceCarousel from 'react-alice-carousel';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="/performance-1.png" onDragStart={handleDragStart} role="presentation" />,
    <img src="/performance-2.png" onDragStart={handleDragStart} role="presentation" />,
    <img src="/performance-3.png" onDragStart={handleDragStart} role="presentation" />
];

const MainPage = () => {
    return (
        <div>
            <section
                className="relative bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <strong className="font-extrabold text-rose-700">Dominate</strong> Solana Meme Trading with LeYeeT BOT
                        </h1>

                        <div className="mt-8 flex flex-wrap gap-4 text-center items-center justify-center">
                            <Button text={"Start Trading"} color="#ffcc00" />
                            <Button text={"Buy $LYT"} color="#ff5733" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-cover">
                <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl text-center">Wait. What is LYTBOT?</h2>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 text-xl">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                        <p>
                            Experience seamless trading with LeYeetBOT—your AI-powered trading companion designed exclusively for the Solana coin and its ecosystem.
                            With cutting-edge technology, LeYeeTBOT helps you discover and filter the most promising tokens, ensuring faster trades and higher profits.
                        </p>
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <p>
                                    <span className="font-bold">Low Latency:</span> Execute trades instantly, ensuring you never miss an opportunity
                                </p>
                                <p>
                                    <span className="font-bold">Daily Win Rate:</span> Proven performance with an <strong>average daily win rate of over 45%+</strong>
                                </p>
                                <p>
                                    <span className="font-bold">24/7 Trading:</span> LeYeeTBOT operates around the clock so you don’t have to.
                                </p>
                                <p>
                                    <span className="font-bold">Within Telegram:</span> LeYeeTBOT will buy, sell, and manage your portfolio with blazing-fast speed and superior execution, all within Telegram
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Real Performance, Real Results</h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        Results matter to the trader. Join thousands of traders who have revolutionized their Solana trading strategies with LeYeeTBOT.
                    </p>
                </div>

                <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col border-2 border-current border-gray-800 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Total Daily Volume</dt>

                        <dd className="text-4xl font-extrabold text-black md:text-5xl">$4.8m</dd>
                    </div>

                    <div className="flex flex-col border-2 border-current border-gray-800 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Total Daily Trades</dt>

                        <dd className="text-4xl font-extrabold text-black md:text-5xl">6 mil</dd>
                    </div>

                    <div className="flex flex-col border-2 border-current border-gray-800 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Average Winrate</dt>

                        <dd className="text-4xl font-extrabold text-black md:text-5xl">45%</dd>
                    </div>

                    <div className="flex flex-col border-2 border-current border-gray-800 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Average weekly return</dt>

                        <dd className="text-4xl font-extrabold text-black md:text-5xl">30%</dd>
                    </div>
                </dl>

            </div>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 text-xl">
                    <div className="mx-auto max-w-3xl text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Results speak louder than FUD</h2>
                    </div>
                    <AliceCarousel mouseTracking items={items} />
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 text-xl">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <p>Results matter to the trader. Join thousands of traders who have revolutionized their Solana trading strategies with <strong>LeYeeTBOT</strong>.</p>

                                <ul className="mt-4 text-gray-700">
                                    <li>Over 10,000 trades executed daily by LYTBOT.</li>
                                    <li>Trusted by traders in the US, Europe, and Dubai.</li>
                                    <li>Empowering both beginner and professional traders.</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                            <div>
                                <Parallax speed={0}>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            className="rounded"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            className="rounded"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            className="rounded"
                                            alt=""
                                        />
                                    </div>
                                </Parallax>
                            </div>

                            <div>
                                <Parallax speed={10}>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <div>
                                            <h2 className="text-4xl font-bold sm:text-3xl md:text-5xl uppercase">Send SOL to your LeYeetbot Wallet</h2>
                                            <p>Fund your LeYeetBot wallet by sending SOL from Phantom or any centralized exchange.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <div>
                                            <h2 className="text-4xl font-bold sm:text-3xl md:text-5xl uppercase">Set Your trading preferences</h2>
                                            <p>Customized and fine tune your bot executions</p>
                                        </div>
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <div>
                                            <h2 className="text-4xl font-bold sm:text-3xl md:text-5xl uppercase">Start</h2>
                                            <p>Start your journey with a single click</p>
                                        </div>
                                    </div>
                                </Parallax>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        What Traders Are Saying
                    </h2>

                    <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                        <TestimonialBox star={5} name="Jonathan, Crypto Enthusiast" location="London" description="From the moment I started using LeYeeTBOT, I knew it was a game changer. Fast, efficient, and reliable." />
                        <TestimonialBox star={5} name="Lucas, Professional Trader" location="Dubai" description="LeYeeTBOT completely transformed the way I trade. Its win rate is impressive, and managing my portfolio on Telegram is so convenient!" />
                        <TestimonialBox star={4} name="Sarah, Senior Trader" location="Texas" description="As an experienced trader in the US, LeYeeTBOT has given me an edge I never thought possible. The Telegram integration is a game changer." />
                    </div>
                </div>
            </section>

            <section className="">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Frequently Ask Questions
                </h2>
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="-my-8 divide-y divide-gray-100">
                        <FaqSingle open topic="What is required to use LeYeeTBOT?" description="All you need is a Solana wallet, a supported exchange account, and Telegram to get started. LeYeeTBOT handles the rest." />
                        <FaqSingle topic="Can I track LeYeeTBOT’s performance?" description="Yes, LeYeeTBOT provides real-time performance dashboards and updates directly on Telegram." />
                        <FaqSingle topic="How does LeYeeTBOT filter tokens?" description="LeYeeTBOT uses advanced AI algorithms to analyze market trends, trading volumes, and price movements to identify the high volume and potential tokens in the Solana ecosystem." />
                        <FaqSingle topic="What makes LeYeeTBOT better than manual trading?" description="LeYeeTBOT offers speed, accuracy, and 24/7 trading, outperforming manual strategies in every way." />
                        <FaqSingle topic="Is LeYeeTBOT beginner-friendly?" description="Absolutely! LeYeeTBOT is designed for all traders, from beginners to professionals, with no technical expertise needed." />
                    </div>
                </div>
            </section>


            <section className="bg-gray-50">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Get Started with LeYeeTBOT Today
                        </h2>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Unleash the full potential of Solana trading with LeYeeTBOT. Trade smarter, faster, and with complete control—all within Telegram. Sign up now to experience the power of AI-driven trading and take your crypto game to the next level.
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl text-center">
                        <Button text="Start Trading" color="#ffcc00" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage;