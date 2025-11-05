import * as React from "react";
import { useState } from "react";
import { Eye, EyeOff, TrendingUp, Shield, Users, Award, Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-trading.jpg";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");




  const handleSuccess = (credentialResponse: any) => {
    const userInfo = jwtDecode(credentialResponse.credential);
    console.log("Google user info:", userInfo);
  };


    const handleGoogleError = () => {
    console.error("Google Login Failed");
    };




  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!isLogin && password !== confirmPassword) {
  setError("Passwords do not match!");
  setIsLoading(false);
  return;
}

    setTimeout(() => {
      setIsLoading(false);
      alert(isLogin ? 'Login successful!' : 'Registration successful!');
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login integration would go here`);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Password reset link sent to your email!');
      setShowForgotPassword(false);
    }, 1500);
  };

  if (showForgotPassword) {

    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydi0yaC0ydjJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTRoMnYtMmgtMnYyem0wIDhoMnYtMmgtMnYyem0yLTJoMnYtMmgtMnYyem0wIDRoMnYtMmgtMnYyem0tMiAydi0yaC0ydjJoMnptLTItMmgtMnYyaDJ2LTJ6bTItNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wIDB2LTJoLTJ2Mmgyem0tNCAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="relative w-full max-w-md">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl mb-4">
                <Mail className="w-8 h-8 text-slate-900" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
              <p className="text-slate-400">Enter your email to receive a reset link</p>
            </div>

            <form onSubmit={handleForgotPassword} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Reset Link
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="w-full text-slate-400 hover:text-white transition-colors text-sm"
              >
                Back to Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydi0yaC0ydjJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTRoMnYtMmgtMnYyem0wIDhoMnYtMmgtMnYyem0yLTJoMnYtMmgtMnYyem0wIDRoMnYtMmgtMnYyem0tMiAydi0yaC0ydjJoMnptLTItMmgtMnYyaDJ2LTJ6bTItNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wIDB2LTJoLTJ2Mmgyem0tNCAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      <Navbar />
      {/* Left Side - Branding & Features */}
            <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional stock trading setup" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>
      </div>
        <div className="mt-16 lg:flex lg:w-1/2 relative p-12 flex-col justify-between">
        <div className="relative z-10">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Start Your Trading
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">
                  Journey Today
                </span>
              </h2>
              <p className="text-slate-400 text-lg">
                Join 1000+ successful traders who have transformed their financial future with our expert training.
              </p>
            </div>


            <div className="space-y-4">
              {[
                { icon: Users, text: '1000+ Students Trained', color: 'from-teal-500 to-blue-600' },
                { icon: Award, text: 'Industry-Certified Programs', color: 'from-amber-500 to-orange-600' },
                { icon: Shield, text: 'Secure & Trusted Platform', color: 'from-purple-500 to-pink-600' },
                { icon: TrendingUp, text: '95% Success Rate', color: 'from-green-500 to-emerald-600' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-all animate-in fade-in slide-in-from-left duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative">
        <div className="w-full max-w-md">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 lg:p-10 animate-in fade-in slide-in-from-right duration-500">
            {/* Tab Switcher */}
            <div className="flex gap-2 mb-8 p-1 bg-slate-900/50 rounded-lg">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 px-4 rounded-md font-semibold transition-all ${
                  isLogin
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 px-4 rounded-md font-semibold transition-all ${
                  !isLogin
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Register
              </button>
            </div>

            <div className="text-center mb-8 lg:hidden">
              <h2 className="text-2xl font-bold text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-slate-400">
                {isLogin ? 'Login to continue your journey' : 'Start your trading journey today'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
  <label className="block text-sm font-medium text-slate-300 mb-2">
    Password
  </label>
  <div className="relative">
    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
    <input
      type={showPassword ? "text" : "password"}
      required
      placeholder="••••••••"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full pl-11 pr-12 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
    >
      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
    </button>
  </div>
</div>

{!isLogin && (
  <div>
    <label className="block text-sm font-medium text-slate-300 mb-2">
      Confirm Password
    </label>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input
        type={showPassword ? "text" : "password"}
        required
        placeholder="••••••••"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
      />
    </div>

    {/* Error message when passwords don’t match */}
    {password && confirmPassword && password !== confirmPassword && (
      <p className="text-red-400 text-sm mt-2">Passwords do not match</p>
    )}
  </div>
)}


              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-600 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-900" />
                    <span className="text-sm text-slate-400">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}
<button
  type="submit"
  disabled={
    isLoading ||
    (!isLogin && (password === "" || confirmPassword === "" || password !== confirmPassword))
  }
  className={`w-full font-semibold py-3 px-4 rounded-lg transition-all transform flex items-center justify-center gap-2
    ${
      isLoading
        ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white opacity-70 cursor-wait"
        : !isLogin && password !== confirmPassword
        ? "bg-gray-500/40 text-gray-300 cursor-not-allowed"
        : "bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg hover:shadow-teal-500/50 active:scale-[0.98] hover:scale-[1.02]"
    }`}
>
  {isLoading ? (
    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
  ) : (
    <>
      {isLogin ? "Sign In" : "Create Account"}
      <ArrowRight className="w-5 h-5" />
    </>
  )}
</button>

            </form>

    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-slate-800/50 text-slate-400">
            Or continue with
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
<GoogleLogin onSuccess={handleSuccess} onError={handleGoogleError} />
      </div>
    </div>


            {!isLogin && (
              <p className="mt-6 text-center text-sm text-slate-400">
                By registering, you agree to our{' '}
                <a href="#" className="text-teal-400 hover:text-teal-300">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-teal-400 hover:text-teal-300">Privacy Policy</a>
              </p>
            )}
          </div>


        </div>
      </div>
    </div>
  );
};

export default AuthPage;