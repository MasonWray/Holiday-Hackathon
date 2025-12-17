"use client";

import { useState, useEffect, useRef } from "react";

function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      videoRef.current?.play();
    } else {
      document.body.style.overflow = 'unset';
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in" />
      
      {/* Modal content */}
      <div 
        className="relative w-full max-w-4xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <span>Close</span>
          <span className="text-xl">✕</span>
        </button>

        {/* Video container with glow effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-hot-pink to-electric-blue blur-2xl opacity-40 scale-105" />
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <video
              ref={videoRef}
              src="/demo-video.mp4"
              controls
              autoPlay
              className="w-full aspect-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow effect behind phone */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-hot-pink to-electric-blue blur-3xl opacity-30 scale-110"></div>
      
      {/* Phone frame */}
      <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl border border-gray-800">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10"></div>
        <div 
          className="rounded-[2.5rem] overflow-hidden w-64 h-[500px] md:w-72 md:h-[540px]"
          style={{ background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)' }}
        >
          {/* App Screen Content */}
          <div className="p-5 h-full flex flex-col">
            <div className="text-center pt-6">
              <p className="text-gray-400 text-xs uppercase tracking-wider">Today&apos;s Challenge</p>
              <h3 className="text-white font-display text-xl font-bold mt-1">HIIT Power Session</h3>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-neon-purple flex items-center justify-center animate-pulse-glow">
                  <span className="text-5xl">⚡</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-cyber-mint text-black text-xs font-bold px-2 py-1 rounded-full">
                  +250 XP
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="glass-card rounded-xl p-4">
                <div className="flex justify-between items-center text-white">
                  <span className="text-sm text-gray-400">Weekly Streak</span>
                  <span className="font-bold text-cyber-mint">🔥 12 Days</span>
                </div>
                <div className="mt-2 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-electric-blue to-neon-purple h-2 rounded-full w-4/5"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="glass-card rounded-lg p-3 text-center">
                  <p className="text-cyber-mint font-bold">2.4k</p>
                  <p className="text-gray-400 text-xs">Calories</p>
                </div>
                <div className="glass-card rounded-lg p-3 text-center">
                  <p className="text-electric-blue font-bold">47</p>
                  <p className="text-gray-400 text-xs">Workouts</p>
                </div>
                <div className="glass-card rounded-lg p-3 text-center">
                  <p className="text-hot-pink font-bold">#12</p>
                  <p className="text-gray-400 text-xs">Rank</p>
                </div>
              </div>

              <button 
                className="w-full font-bold py-3.5 rounded-xl text-base transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
              >
                Start Workout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  gradient,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  delay: string;
}) {
  return (
    <div
      className={`opacity-0 animate-slide-up ${delay} glass-card rounded-2xl p-6 hover:border-neon-purple/50 transition-all duration-300 hover:-translate-y-1 group`}
    >
      <div 
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${gradient}`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-neon-purple transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  handle,
  avatar,
}: {
  quote: string;
  name: string;
  handle: string;
  avatar: string;
}) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-hot-pink flex items-center justify-center text-lg">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-gray-500">{handle}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-dark-slate">
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-slate/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Fit Friends" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">
              Fit Friends
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">Reviews</a>
          </div>
          <button 
            className="text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
          >
            Get the App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-neon-purple/20 text-neon-purple font-semibold px-4 py-2 rounded-full text-sm mb-6 opacity-0 animate-slide-up border border-neon-purple/30">
                🏆 #1 Fitness App for Teens
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-slide-up stagger-1">
                Level Up Your{" "}
                <span className="gradient-text">Fitness Game</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 animate-slide-up stagger-2">
                Forget boring workouts. Fit Friends turns fitness into a game with challenges, leaderboards, and rewards that actually make you want to train.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-slide-up stagger-3">
                <button 
                  className="text-white font-semibold text-base px-8 py-4 rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
                >
                  <span>Download Free</span>
                  <span>→</span>
                </button>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-gray-800 border border-gray-700 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Watch Video</span>
                  <span>▶</span>
                </button>
              </div>

              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start opacity-0 animate-slide-up stagger-4">
                <div className="flex -space-x-2">
                  {["😎", "💪", "🔥", "⚡"].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gray-800 rounded-full border-2 border-dark-slate flex items-center justify-center text-lg"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">50K+</strong> active users
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
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-dark-slate relative">
        <div className="absolute inset-0 mesh-gradient opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Fit Friends Hits Different
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Built by athletes, for athletes. Everything you need to crush your fitness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="⚔️"
              title="Daily Challenges"
              description="New workouts drop every day. Complete them to earn XP and climb the ranks."
              gradient="bg-gradient-to-br from-electric-blue to-neon-purple"
              delay="stagger-1"
            />
            <FeatureCard
              icon="🏆"
              title="Leaderboards"
              description="Compete with friends or go global. See where you stack up against the best."
              gradient="bg-gradient-to-br from-neon-purple to-hot-pink"
              delay="stagger-2"
            />
            <FeatureCard
              icon="👥"
              title="Squad Goals"
              description="Create or join squads. Train together, compete together, win together."
              gradient="bg-gradient-to-br from-hot-pink to-sunset-orange"
              delay="stagger-3"
            />
            <FeatureCard
              icon="📊"
              title="Progress Tracking"
              description="Real stats, real progress. Track everything from PRs to recovery time."
              gradient="bg-gradient-to-br from-cyber-mint to-electric-blue"
              delay="stagger-4"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-card relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Start in 3 Minutes
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              No complicated setup. Just download, create your profile, and start training.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Download & Sign Up",
                description: "Get the app and create your profile in under a minute. No credit card needed.",
                color: "text-electric-blue",
              },
              {
                step: "02",
                title: "Set Your Goals",
                description: "Tell us what you want to achieve. We'll build your personalized training plan.",
                color: "text-neon-purple",
              },
              {
                step: "03",
                title: "Start Crushing It",
                description: "Complete challenges, earn rewards, and watch yourself level up every week.",
                color: "text-hot-pink",
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className={`font-display text-6xl font-bold mb-4 ${item.color} opacity-20`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F97316 100%)' }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Users" },
              { number: "1.2M", label: "Workouts Completed" },
              { number: "4.9", label: "App Store Rating" },
              { number: "89%", label: "Hit Their Goals" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="font-display text-4xl md:text-5xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-dark-slate relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              What Users Are Saying
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Real reviews from real athletes crushing it with Fit Friends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              avatar="J"
              quote="Finally an app that doesn't feel like it was made for my mom. The challenges actually push me and the leaderboard keeps me coming back."
              name="Jake M."
              handle="@jakefitness"
            />
            <TestimonialCard
              avatar="S"
              quote="My squad and I have been using this for 3 months. We've all hit PRs we never thought possible. The competition is 🔥"
              name="Sarah K."
              handle="@sarahstrong"
            />
            <TestimonialCard
              avatar="M"
              quote="I used to skip workouts all the time. Now I'm on a 47-day streak because I don't want to lose my rank. Genius app design."
              name="Marcus T."
              handle="@marcusgains"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
      >
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Level Up?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 50,000+ users who stopped making excuses and started making gains. Download free today.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="font-semibold px-8 py-4 rounded-xl text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
                >
                  Get Started →
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Free forever. No credit card required.
              </p>
            </form>
          ) : (
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2 text-white">You&apos;re In!</h3>
              <p className="text-gray-400">Check your email for download links. Let&apos;s go!</p>
            </div>
          )}

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur px-5 py-3 rounded-xl border border-gray-700">
              <span className="text-xl">🍎</span>
              <span className="text-sm text-gray-300">Download on iOS</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur px-5 py-3 rounded-xl border border-gray-700">
              <span className="text-xl">▶️</span>
              <span className="text-sm text-gray-300">Get it on Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="Fit Friends" className="h-8 w-auto" />
                <span className="text-lg font-bold text-white">Fit Friends</span>
              </div>
              <p className="text-gray-500 text-sm">
                The fitness app for teens who want real results, not boring routines.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Fit Friends. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
