import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  MessageCircle,
  RotateCcw,
  User,
} from "lucide-react";
import Lottie from "lottie-react";
import AiBotAnimation from "@/data/AiBot.json";
import { getAnswer, suggestedQuestions } from "@/data/knowledgeBase";

export default function AskAIPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    const query = text || input.trim();
    if (!query || isTyping) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    const delay = Math.min(800 + query.length * 15, 2000);
    setTimeout(() => {
      const answer = getAnswer(query);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([]);
    setInput("");
    setIsTyping(false);
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col mt-20">
      {/* Header */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl overflow-hidden">
              <Lottie animationData={AiBotAnimation} className="w-full h-full" loop={true} />
            </div>
              <div>
                <span className="text-sm font-bold text-white">OpenClaw AI</span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>
            </div>
          </div>

          {hasMessages && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Clear
            </button>
          )}
          {!hasMessages && <div className="w-16" />}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto flex flex-col pt-16">
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 w-full ${hasMessages ? "mt-auto" : ""}`}>
          {/* Empty state */}
          {!hasMessages && (
            <div className="flex flex-col items-center justify-center py-16 sm:py-24">
              {/* Lottie */}
              <div className="w-44 h-44 mb-6">
                <Lottie
                  animationData={AiBotAnimation}
                  className="w-full h-full"
                  loop={true}
                />
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
                Ask anything about{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  OpenClaw
                </span>
              </h1>
              <p className="text-sm text-zinc-500 mb-10 text-center max-w-md">
                I know about our projects, how to build, contribute, technical
                specs, and more. Just type a question below.
              </p>

              {/* Suggested questions */}
              <div className="grid grid-cols-2 gap-2 w-full max-w-lg">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="group text-left px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 mt-0.5 shrink-0 transition-colors" />
                      <span className="text-xs text-zinc-400 group-hover:text-white transition-colors leading-relaxed">
                        {q}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {hasMessages && (
            <div className="py-6 space-y-6">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                  style={{
                    animation: "fadeSlideUp 0.3s ease-out both",
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  {msg.role === "bot" && (
                    <div className="shrink-0 w-8 h-8 rounded-xl overflow-hidden mt-1">
                      <Lottie animationData={AiBotAnimation} className="w-full h-full" loop={true} />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] sm:max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-amber-400/10 border border-amber-400/20 text-amber-50 rounded-br-md"
                        : "bg-zinc-900 border border-zinc-800/50 text-zinc-300 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.role === "user" && (
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center mt-1 border border-zinc-700/50">
                      <User className="w-4 h-4 text-zinc-300" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="shrink-0 w-8 h-8 rounded-xl overflow-hidden mt-1">
                    <Lottie animationData={AiBotAnimation} className="w-full h-full" loop={true} />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-zinc-900 border border-zinc-800/50">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full bg-zinc-600 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-zinc-600 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-zinc-600 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input bar */}
      <div className="sticky bottom-0 bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Ask about OpenClaw..."
                className="w-full px-4 py-3 pr-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none"
                style={{
                  minHeight: "48px",
                  maxHeight: "120px",
                }}
                onInput={(e) => {
                  e.target.style.height = "48px";
                  e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
                }}
              />
            </div>
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                input.trim() && !isTyping
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-700 cursor-not-allowed"
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          <p className="text-center text-[10px] text-zinc-700 mt-2">
            Answers are based on project documentation.
          </p>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}