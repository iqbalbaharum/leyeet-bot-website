import Feature from "@components/Feature";

const BuyPage = () => (
    <div className="mx-auto flex space-x-4 py-8">
        <div className="text-center">
            <a class="bg-gray-300 no-underline hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer" href="https://pump.fun/FBFh7c73Z4qKhjDD4sB5mAjji3cB9H6ZsiRTL6EveDpq" target="_blank">
                <img src="https://pump.fun/_next/image?url=%2Flogo.png&w=64&q=75" width="20px" className="mr-2"/>
                <span>PumpFun</span>
            </a>
        </div>

        <div className="text-center">
            <a class="bg-gray-300 no-underline hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <img src="https://jup.ag/svg/jupiter-logo.svg" width="20px" className="mr-2"/>
                <span>Jupiter</span>
            </a>
            <div className="text-red-600 font-bold">Coming Soon</div>
        </div>

        <div className="text-center">
            <a class="bg-gray-300 no-underline hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <img src="https://thegivingblock.com/wp-content/uploads/2022/04/Raydium-RAY-coin.png" width="20px" className="mr-2"/>
                <span>Raydium</span>
            </a>
            <div className="text-red-600 font-bold">Coming Soon</div>
        </div>
    </div>
);

export default BuyPage;