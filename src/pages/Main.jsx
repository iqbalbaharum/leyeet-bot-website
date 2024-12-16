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
                className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-screen"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <strong className="font-extrabold text-rose-700">Dominate</strong> Solana Meme Trading with LeYeeT BOT
                        </h1>

                        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
                            <Button href="https://t.me/LeYeetbot" target="_blank" text={"Start Trading"} color="#ffcc00" />
                            <Button href="https://raydium.io/swap/?inputMint=FBFh7c73Z4qKhjDD4sB5mAjji3cB9H6ZsiRTL6EveDpq&outputMint=sol" target="_blank" text={"Buy $LYT"} color="#ff5733" />
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
                            With cutting-edge technology, LeYeeTBOT helps you discover and filter the most promising tokens, ensuring more opportunity and higher profits.
                        </p>
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <p>
                                    <span className="font-bold">AI-assisted Signals:</span> Proven algorithm to signal entry with an <strong>average profit potential of over 75%+</strong>
                                </p>
                                <p>
                                    <span className="font-bold">Low Latency:</span> Execute trades instantly, ensuring you never miss an opportunity
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
                        Results matter to the trader. Join thousands of traders who have revolutionized their Solana meme tokens trading strategies with LeYeeTBOT.
                    </p>
                </div>

                <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col border-2 border-current border-gray-800 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Total Daily Volume</dt>

                        <dd className="text-4xl font-extrabold text-black md:text-5xl">$24.8m</dd>
                    </div>

                    <div className="flex flex-col border-2 border-current border-gray-800 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Total Daily Trades</dt>

                        <dd className="text-4xl font-extrabold text-black md:text-5xl">6 mil</dd>
                    </div>

                    <div className="flex flex-col border-2 border-current border-gray-800 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Average Daily Signal</dt>

                        <dd className="text-4xl font-extrabold text-black md:text-5xl">10,000</dd>
                    </div>

                    <div className="flex flex-col border-2 border-current border-gray-800 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Meme tokens traded daily</dt>

                        <dd className="text-4xl font-extrabold text-black md:text-5xl">300+</dd>
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
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 md:text-7xl text-center uppercase tracking-wider text-gray-700">
                    <span>100% your trusted partner</span> &#8226; <span>proven performance</span> &#8226; <span>simplified experience</span> &#8226; <span>Open for all traders</span>
                </div>
            </section>

            <section>
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                            <div>
                                <Parallax speed={0}>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-center lg:px-8"
                                    >
                                        <img
                                            src="/mockup-main.png"
                                            className="rounded"
                                            alt=""
                                            width="60%"
                                        />
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-center lg:px-8"
                                    >
                                        <img
                                            src="/mockup-setting.png"
                                            className="rounded"
                                            alt=""
                                            width="60%"
                                        />
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-center lg:px-8"
                                    >
                                        <img
                                            src="/mockup-start.png"
                                            className="rounded"
                                            alt=""
                                            width="60%"
                                        />
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-center lg:px-8"
                                    >
                                        <img
                                            src="/mockup-referal.png"
                                            className="rounded"
                                            alt=""
                                            width="60%"
                                        />
                                    </div>
                                </Parallax>
                            </div>

                            <div>
                                <Parallax speed={-10}>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <div>
                                            <h2 className="text-4xl font-bold sm:text-3xl md:text-5xl uppercase tracking-wide text-gray-900">Send SOL to your LeYeetbot Wallet</h2>
                                            <p className="text-gray-700 text-xl mt-0.5">Fund your LeYeetBot wallet by sending SOL from Phantom or any centralized exchange.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <div>
                                            <h2 className="text-4xl font-bold sm:text-3xl md:text-5xl uppercase tracking-wide text-gray-900">Personalized trading preferences</h2>
                                            <p className="text-gray-700 text-xl mt-0.5">Customized and fine tune your bot trading executions</p>
                                        </div>
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <div>
                                            <h2 className="text-4xl font-bold sm:text-3xl md:text-5xl uppercase tracking-wide text-gray-900">Simplify experience</h2>
                                            <p className="text-gray-700 text-xl mt-0.5">Single click to "Start" the automated trade</p>
                                        </div>
                                    </div>
                                    <div
                                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                                    >
                                        <div>
                                            <h2 className="text-4xl font-bold sm:text-3xl md:text-5xl uppercase tracking-wide text-gray-900">Sharing is caring</h2>
                                            <p className="text-gray-700 text-xl mt-0.5">Share LeyeeTBot and earn 1% of every trade they made</p>
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
                        <FaqSingle topic="What are the fees for trading on LeYeeTBot?" description="We charge 1% on buy only. Creating a wallet and setting up your account is completely free." />
                        <FaqSingle topic="Can I track LeYeeTBOT’s performance?" description="Yes, LeYeeTBOT provides real-time performance dashboards and updates directly on Telegram." />
                        <FaqSingle topic="How does LeYeeTBOT filter tokens?" description="Our super-secret advanced AI scans the market like it’s on a caffeine binge. It sniffs out the hottest tokens faster than your cousin Googles “solana 1000X token”" />
                        <FaqSingle topic="What makes LeYeeTBOT better than manual trading?" description="LeYeeTBOT allow you to get into positions as soon it appear, outperforming manual strategies in every way." />
                        <FaqSingle topic="Is LeYeeTBOT beginner-friendly?" description="Absolutely! LeYeeTBOT is designed for all traders, from beginners to professionals, with no technical expertise needed." />
                        <FaqSingle topic="What is the token criteria?" description="Under $10M market cap (because who wants the boring big caps?). More signal, more $$$$" />
                        <FaqSingle topic="Is there a minimum deposit amount to use LeYeetBot?" description="Nah, just enough gas and whatever cash you’re ready to YOLO into the market. Whether it’s $1 or $10,000." />
                        <FaqSingle topic="What is so special for LeYeetBot?" description="Quality signals, duhhh.. and holding time management. Upon entry, you can set how long u want to hold the wallet 30 sec, 1 min 5 min. Or go full diamond hands." />
                        <FaqSingle topic="Why doesn’t LeYeeTBOT use a percentage stop-loss?" description="Oh, sure, let’s just use a 5% stop-loss on a low-cap token that can move in 10% swings a single transaction. 🤦
With that logic, you’d stop out of every trade before the bot could even say “profit.”" />
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
                        <Button href="https://t.me/LeYeetbot" target={"_blank"} text="Start Trading" color="#ffcc00" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage;