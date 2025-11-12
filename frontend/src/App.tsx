import { useState } from "react";
import { Sparkles, ArrowUp, ChevronDown } from "lucide-react";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse("🧠 Thinking...");

    try {
      const res = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });

      const data = await res.json();
      setResponse(data.answer || "No response from AI.");
    } catch (error) {
      console.error(error);
      setResponse("⚠️ Could not connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-lg font-semibold tracking-tight">DROPLY.CO</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">About</a>
              <button className="px-4 py-2 bg-white text-zinc-950 text-sm font-medium rounded hover:bg-zinc-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-light leading-tight">
            Ask <span className="font-serif italic">Droply.</span>
          </h1>
          <p className="text-3xl md:text-4xl text-zinc-400 font-light">
            for reviews that spill the truth
          </p>

          {/* Input + Button */}
          <div className="pt-8 max-w-2xl mx-auto">
            <div className="relative">
              <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-full px-6 py-4 hover:border-zinc-700 transition-colors">
                <Sparkles className="w-5 h-5 text-zinc-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask me anything here to see the magic"
                  className="flex-1 bg-transparent text-zinc-400 placeholder-zinc-600 outline-none"
                />
                <button
                  onClick={handleAsk}
                  disabled={loading}
                  className="w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* ✅ AI RESPONSE BOX HERE */}
            <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-left text-zinc-300 shadow-inner">
              {response ? (
                <pre className="whitespace-pre-wrap leading-relaxed font-sans">
                  {response}
                </pre>
              ) : (
                <p className="text-zinc-600 italic">Your AI insights will appear here...</p>
              )}
            </div>

            {/* OR text */}
            <div className="mt-8 space-y-3">
              <p className="text-sm text-zinc-500 uppercase tracking-wider">OR</p>
              <p className="text-zinc-400">
                Add <span className="text-white font-medium">droply.co/</span> in front of a product URL to get instant AI breakdown
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 flex flex-col items-center gap-2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-zinc-600" />
            <ChevronDown className="w-6 h-6 text-zinc-600 -mt-4" />
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="bg-zinc-800/50 backdrop-blur border border-zinc-700 rounded-2xl p-8 space-y-6">
              <div className="text-zinc-400 text-sm italic">Jordan 1 Low:</div>
              <div className="text-zinc-300">Here's how they're priced right now</div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-900/80 rounded-xl p-4 space-y-3 border border-zinc-700">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <div className="text-xs font-bold">NIKE</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Price</div>
                    <div className="text-lg font-semibold">₹10,795</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Rating</div>
                    <div className="text-sm">4.5★</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Delivery by</div>
                    <div className="text-sm">12 Jul</div>
                  </div>
                </div>

                <div className="bg-zinc-950 rounded-xl p-4 space-y-3 border-2 border-white shadow-lg shadow-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-lg"></div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Price</div>
                    <div className="text-lg font-semibold">₹8,995</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Rating</div>
                    <div className="text-sm">4.8★</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Delivery by</div>
                    <div className="text-sm">9 Jul</div>
                  </div>
                </div>

                <div className="bg-zinc-900/80 rounded-xl p-4 space-y-3 border border-zinc-700">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg"></div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Price</div>
                    <div className="text-lg font-semibold">₹8,995</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Rating</div>
                    <div className="text-sm">4.3★</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Delivery by</div>
                    <div className="text-sm">10 Jul</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              Every spend counts, we make it <span className="font-serif italic">count harder</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Save where it matters. Splurge where it counts. We help you do both.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-light">
            Stop overpaying. Start <span className="font-serif italic">living smarter</span>.
          </h3>
          <button className="px-8 py-4 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors">
            Try Droply Now
          </button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>DROPLY.CO</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
