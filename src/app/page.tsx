"use client";

import { useState } from "react";

// Fun character emojis for the app
const characters = ["🦸", "🦹", "🧙", "🧚", "🦊", "🐼", "🦁", "🐯"];

function StarBurst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <polygon
        points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
        fill="currentColor"
      />
    </svg>
  );
}

function WavyDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      className={`w-full h-16 md:h-24 ${flip ? "rotate-180" : ""}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FeatureCard({
  emoji,
  title,
  description,
  color,
  delay,
}: {
  emoji: string;
  title: string;
  description: string;
  color: string;
  delay: string;
}) {
  return (
    <div
      className={`opacity-0 animate-slide-up ${delay} bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 ${color}`}
    >
      <div className="text-5xl md:text-6xl mb-4 animate-bounce-slow">{emoji}</div>
      <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="bg-white/90 backdrop-blur rounded-3xl p-6 shadow-lg border-2 border-grape-fizz/20">
      <div className="text-4xl mb-4">{avatar}</div>
      <p className="text-gray-700 italic mb-4">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-bold text-grape-fizz">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Floating elements around phone */}
      <div className="absolute -top-8 -left-8 text-5xl animate-float stagger-1">⭐</div>
      <div className="absolute -top-4 -right-12 text-4xl animate-float stagger-2">🏆</div>
      <div className="absolute top-1/2 -left-16 text-4xl animate-float stagger-3">💪</div>
      <div className="absolute bottom-8 -right-10 text-5xl animate-float stagger-4">🎮</div>
      <div className="absolute -bottom-4 -left-8 text-4xl animate-float stagger-5">🎯</div>

      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl animate-wiggle">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10"></div>
        <div 
          className="rounded-[2.5rem] overflow-hidden w-64 h-[500px] md:w-72 md:h-[560px]"
          style={{ background: 'linear-gradient(to bottom right, #A855F7, #EC4899, #FF6B6B)' }}
        >
          {/* App Screen Content */}
          <div className="p-6 h-full flex flex-col">
            <div className="text-center pt-8">
              <p className="text-white/80 text-sm">Today&apos;s Adventure</p>
              <h3 className="text-white font-display text-2xl font-bold">Fit Friends!</h3>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="text-8xl animate-bounce-slow">🦁</div>
            </div>

            <div className="space-y-3">
              <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
                <div className="flex justify-between items-center text-white">
                  <span>⚡ Energy Points</span>
                  <span className="font-bold">2,450</span>
                </div>
                <div className="mt-2 bg-white/30 rounded-full h-3">
                  <div className="bg-sunshine h-3 rounded-full w-3/4"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                  <div className="text-2xl">🏃</div>
                  <p className="text-white text-xs mt-1">1.2km</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                  <div className="text-2xl">⏱️</div>
                  <p className="text-white text-xs mt-1">15 min</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                  <div className="text-2xl">🔥</div>
                  <p className="text-white text-xs mt-1">120 cal</p>
                </div>
              </div>

              <button className="w-full bg-sunshine text-gray-900 font-bold py-4 rounded-2xl text-lg shadow-lg hover:scale-105 transition-transform">
                Start Adventure! 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b-4 border-sunshine">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">💪</span>
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-coral-pop via-bubblegum to-grape-fizz bg-clip-text text-transparent">
              Fit Friends
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-semibold hover:text-coral-pop transition-colors">Features</a>
            <a href="#how-it-works" className="font-semibold hover:text-coral-pop transition-colors">How It Works</a>
            <a href="#testimonials" className="font-semibold hover:text-coral-pop transition-colors">Reviews</a>
          </div>
          <button 
            className="text-white font-bold px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all"
            style={{ background: 'linear-gradient(to right, #FF6B6B, #EC4899)' }}
          >
            Download Free! 🎉
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pattern-confetti opacity-30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-sunshine/40 blob animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-coral-pop/40 blob animate-float stagger-2"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-ocean-blue/40 blob animate-float stagger-3"></div>
        <StarBurst className="absolute top-32 right-1/4 w-12 h-12 text-sunshine animate-spin-slow" />
        <StarBurst className="absolute bottom-48 left-16 w-8 h-8 text-bubblegum animate-spin-slow" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-lime-burst/20 text-lime-burst font-bold px-4 py-2 rounded-full text-sm mb-6 animate-slide-up">
                🎯 #1 Kids Fitness App of 2024
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-slide-up stagger-1">
                Get Your Kids{" "}
                <span className="animate-rainbow">Moving</span>
                {" "}&amp; Grooving!
          </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 animate-slide-up stagger-2">
                Turn screen time into <strong>active time</strong>! Fit Friends transforms exercise into epic adventures with games, challenges, and rewards that kids actually love. 🎮✨
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-slide-up stagger-3">
                <button 
                  className="text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(to right, #FF6B6B, #FB923C)' }}
                >
                  <span>Download Free</span>
                  <span className="text-2xl">🚀</span>
                </button>
                <button className="bg-white border-4 border-grape-fizz text-grape-fizz font-bold text-lg px-8 py-4 rounded-full hover:bg-grape-fizz hover:text-white transition-all flex items-center justify-center gap-2">
                  <span>Watch Demo</span>
                  <span className="text-2xl">▶️</span>
                </button>
              </div>

              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start opacity-0 animate-slide-up stagger-4">
                <div className="flex -space-x-3">
                  {["🧒", "👧", "👦", "👧"].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-sunshine text-xl">★★★★★</div>
                  <p className="text-sm text-gray-600">
                    <strong>50,000+</strong> happy families!
                  </p>
                </div>
              </div>
            </div>

            {/* Right content - Phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>

        <WavyDivider />
      </section>

      {/* Features Section */}
      <section id="features" className="bg-ocean-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Why Kids Love Fit Friends! 💖
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We&apos;ve cracked the code on making fitness fun. Here&apos;s how we do it!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              emoji="🎮"
              title="Adventure Games"
              description="Run from dragons, dance with robots, and explore magical worlds - all while exercising!"
              color="border-coral-pop"
              delay="stagger-1"
            />
            <FeatureCard
              emoji="🏆"
              title="Epic Rewards"
              description="Earn coins, unlock characters, and collect badges. Every workout is a win!"
              color="border-sunshine"
              delay="stagger-2"
            />
            <FeatureCard
              emoji="👨‍👩‍👧‍👦"
              title="Family Fun"
              description="Multiplayer challenges let the whole family join in. Get fit together!"
              color="border-lime-burst"
              delay="stagger-3"
            />
            <FeatureCard
              emoji="📊"
              title="Parent Dashboard"
              description="Track progress, set goals, and celebrate achievements with your kids."
              color="border-grape-fizz"
              delay="stagger-4"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              So Easy, Kids Set It Up! 🧸
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your child&apos;s activity levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                emoji: "📱",
                title: "Download & Create",
                description: "Grab the free app and let your kid create their awesome avatar character!",
                color: "bg-coral-pop",
              },
              {
                step: "2",
                emoji: "🎯",
                title: "Pick Adventures",
                description: "Choose from 100+ exciting activities - from ninja training to space missions!",
                color: "bg-grape-fizz",
              },
              {
                step: "3",
                emoji: "🌟",
                title: "Play & Grow",
                description: "Watch them get active, earn rewards, and build healthy habits that last!",
                color: "bg-ocean-blue",
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className={`${item.color} w-20 h-20 rounded-full mx-auto flex items-center justify-center text-white font-display text-3xl font-bold shadow-xl mb-6`}>
                  {item.step}
                </div>
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-display text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>

                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-4 border-dashed border-sunshine"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-16 text-white"
        style={{ background: 'linear-gradient(to right, #EC4899, #A855F7, #38BDF8)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Families", emoji: "👨‍👩‍👧‍👦" },
              { number: "1M+", label: "Adventures Completed", emoji: "🎮" },
              { number: "4.9★", label: "App Store Rating", emoji: "⭐" },
              { number: "30min", label: "Avg Daily Activity", emoji: "⏱️" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="font-display text-4xl md:text-5xl font-bold drop-shadow-lg">{stat.number}</div>
                <div className="text-white/90 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#FFF0F5] relative overflow-hidden">
        <div className="absolute inset-0 pattern-confetti opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Parents &amp; Kids Love Us! 💕
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our Fit Friends families!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              avatar="👩"
              quote="My kids used to fight over screen time. Now they fight over who gets to do the next Fit Friends challenge! Best purchase ever."
              name="Sarah M."
              role="Mom of 3"
            />
            <TestimonialCard
              avatar="👨"
              quote="As a pediatrician, I recommend Fit Friends to all my patients. It's the perfect blend of fun and healthy activity."
              name="Dr. James Chen"
              role="Pediatrician"
            />
            <TestimonialCard
              avatar="👧"
              quote="I love being a ninja princess and doing all the cool moves! I've earned 47 badges already!!"
              name="Emma, Age 8"
              role="Fit Friends Champion 🏆"
            />
          </div>
        </div>
      </section>

      {/* Character Parade */}
      <section className="py-16 bg-sunshine overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-display text-3xl font-bold mb-8">
            Collect All The Characters! 🎭
          </h3>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {characters.map((char, index) => (
              <div
                key={index}
                className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center text-4xl md:text-5xl hover:scale-110 transition-transform cursor-pointer animate-float"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {char}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom right, #A855F7, #EC4899, #FF6B6B)' }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 blob animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 blob animate-float stagger-2"></div>
          <StarBurst className="absolute top-20 right-1/4 w-16 h-16 text-white/20 animate-spin-slow" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Ready to Get Your Kids Moving? 🎉
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join 50,000+ families who&apos;ve made fitness fun! Start your free adventure today.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 font-semibold focus:outline-none focus:ring-4 focus:ring-sunshine"
                  required
                />
                <button
                  type="submit"
                  className="bg-sunshine text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-white transition-colors whitespace-nowrap"
                >
                  Get Started Free! 🚀
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Free forever for families. No credit card required.
              </p>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur rounded-3xl p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">🎊</div>
              <h3 className="font-display text-2xl font-bold mb-2">Woohoo! You&apos;re In!</h3>
              <p>Check your email for download instructions. Adventure awaits!</p>
            </div>
          )}

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
              <span className="text-2xl">🍎</span>
              <span className="font-semibold">Download on iOS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
              <span className="text-2xl">🤖</span>
              <span className="font-semibold">Get it on Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">💪</span>
                <span className="font-display text-2xl font-bold">Fit Friends</span>
              </div>
              <p className="text-gray-400">
                Making kids fitness fun since 2024. Get moving, stay healthy, have fun!
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Fit Friends. All rights reserved. Made with 💖 for active kids everywhere.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">COPPA Compliant</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
