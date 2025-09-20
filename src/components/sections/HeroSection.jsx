import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const highlights = [
    'State Accredited Programs',
    'Hands-on Training',
    'Flexible Scheduling',
    'Career Support'
  ]

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-bounce-gentle"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-20 animate-bounce-gentle animation-delay-200"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent-200 rounded-full opacity-20 animate-bounce-gentle animation-delay-400"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Accredited by COMTA
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
              Transform Lives Through
              <span className="text-gradient block">Massage Therapy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join our comprehensive massage therapy program and learn from experienced 
              professionals. Start your journey to a rewarding career in healing and wellness.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
              {highlights.map((highlight, index) => (
                <div key={highlight} className="flex items-center space-x-2 text-sm text-neutral-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/admissions" className="btn-primary text-lg px-8 py-4 group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/programs" className="btn-outline text-lg px-8 py-4 group">
                View Programs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-neutral-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>500+ Graduates</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>95% Pass Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>15+ Years</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video/Image Placeholder */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-500 to-secondary-600 rounded-3xl p-8 shadow-2xl">
              {/* Video Thumbnail */}
              <div className="relative bg-neutral-900 rounded-2xl overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Take a Virtual Tour</h3>
                    <p className="text-neutral-300">See our facilities and meet our instructors</p>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-primary-600 ml-1" />
                  </div>
                </button>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-neutral-600">Hours</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">95%</div>
                  <div className="text-sm text-neutral-600">Pass Rate</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
