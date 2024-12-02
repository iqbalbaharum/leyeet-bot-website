const Button = ({ href, target, text, color }) => {
    return (
        <>
            <a
                className="group relative inline-block focus:outline-none focus:ring"
                href={href} target={target}
            >
                <span
                    style={{ backgroundColor: color }}
                    className="absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                ></span>

                <span
                    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                >
                    {text}
                </span>
            </a>
        </>
    );
};

export default Button