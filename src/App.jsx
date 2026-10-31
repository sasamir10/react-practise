export default function App() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-4">
            <div className="text-center p-8 rounded-2xl bg-slate-800 shadow-2xl border border-slate-700 max-w-md transform transition hover:scale-105 duration-300">
                {/* Indicator Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Environment Ready
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                    Tailwind CSS Test
                </h1>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    If you see a dark background, centered elements, a glowing
                    gradient heading, and this text is properly styled,{" "}
                    <span className="text-cyan-400 font-semibold">
                        Tailwind is working perfectly!
                    </span>
                </p>

                <button className="w-full sm:w-auto px-6 py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800">
                    Tailwind is Active 🚀
                </button>
            </div>
        </div>
    );
}
