import {
    ArrowRight,
    Award,
    CheckCircle,
    Clock,
    GraduationCap,
    Star,
    Users
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'

const HomePage = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Comprehensive Programs',
      description: 'From basic certification to advanced specialized training, we offer programs designed to meet your career goals.',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from licensed massage therapists with years of clinical experience and teaching expertise.',
      color: 'secondary'
    },
    {
      icon: Award,
      title: 'State Accredited',
      description: 'Our programs meet all state licensing requirements and are accredited by recognized organizations.',
      color: 'accent'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Choose from full-time, part-time, or weekend programs to fit your lifestyle and commitments.',
      color: 'primary'
    }
  ]

  const stats = [
    { number: '500+', label: 'Graduates', description: 'Successful massage therapists' },
    { number: '95%', label: 'Pass Rate', description: 'State licensing exam' },
    { number: '15+', label: 'Years', description: 'Of educational excellence' },
    { number: '100%', label: 'Job Ready', description: 'Career preparation' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-4">
              Why Choose Our Massage School?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide comprehensive education, hands-on training, and the support 
              you need to launch a successful career in massage therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${feature.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-neutral-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-neutral-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose the program that best fits your career goals and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Massage Therapy Program */}
            <div className="card group">
              <div className="p-8">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
                  Massage Therapy
                </h3>
                <p className="text-neutral-600 mb-6">
                  Our flagship program provides comprehensive training in massage therapy 
                  techniques, anatomy, and business practices.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-600">500+ hours of training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-600">State exam preparation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-600">Hands-on practice</span>
                  </li>
                </ul>
                <Link to="/programs#massage-therapy" className="btn-outline w-full justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Continuing Education */}
            <div className="card group">
              <div className="p-8">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
                  Continuing Education
                </h3>
                <p className="text-neutral-600 mb-6">
                  Advanced courses and workshops to enhance your skills and meet 
                  continuing education requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-600">Specialized techniques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-600">CEU credits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-600">Flexible scheduling</span>
                  </li>
                </ul>
                <Link to="/programs#continuing-education" className="btn-outline w-full justify-center group-hover:bg-secondary-600 group-hover:text-white transition-colors duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Specialized Training */}
            <div className="card group">
              <div className="p-8">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
                  Specialized Training
                </h3>
                <p className="text-neutral-600 mb-6">
                  Master specific massage modalities and techniques for specialized 
                  client needs and advanced practice.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-600">Deep tissue</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-600">Sports massage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-600">Prenatal massage</span>
                  </li>
                </ul>
                <Link to="/programs#specialized" className="btn-outline w-full justify-center group-hover:bg-accent-600 group-hover:text-white transition-colors duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-4">
              What Our Graduates Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear from our successful graduates about their experience and career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-neutral-600 mb-6 italic">
                "The comprehensive training I received here gave me the confidence 
                and skills to start my own massage therapy practice. The instructors 
                are amazing!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Sarah Mitchell</div>
                  <div className="text-sm text-neutral-600">Class of 2022</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-neutral-600 mb-6 italic">
                "The hands-on practice and real-world scenarios prepared me perfectly 
                for my career. I was hired immediately after graduation!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary-600 font-semibold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Michael Johnson</div>
                  <div className="text-sm text-neutral-600">Class of 2023</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-neutral-600 mb-6 italic">
                "The continuing education courses keep my skills sharp and my 
                practice growing. The instructors are always up-to-date with 
                the latest techniques."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-600 font-semibold">LD</span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Lisa Davis</div>
                  <div className="text-sm text-neutral-600">Class of 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Join hundreds of successful graduates who have transformed their lives 
            and careers through our comprehensive massage therapy education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn-secondary">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
