import {
    ArrowRight,
    Award,
    BookOpen,
    Calendar,
    CheckCircle,
    Clock,
    DollarSign,
    GraduationCap,
    Users
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProgramsPage = () => {
  const programs = [
    {
      id: 'massage-therapy',
      title: 'Massage Therapy Program',
      subtitle: 'Comprehensive Professional Training',
      duration: '6-12 months',
      hours: '500+ hours',
      format: 'Full-time, Part-time, Weekend',
      price: '$8,500',
      description: 'Our flagship program provides comprehensive training in massage therapy techniques, anatomy, physiology, and business practices. This program meets all state licensing requirements.',
      features: [
        'Swedish massage techniques',
        'Deep tissue massage',
        'Anatomy & physiology',
        'Business & ethics',
        'Hands-on practice',
        'State exam preparation'
      ],
      schedule: [
        { day: 'Monday-Friday', time: '9:00 AM - 2:00 PM' },
        { day: 'Evening', time: '6:00 PM - 9:00 PM' },
        { day: 'Weekend', time: '9:00 AM - 5:00 PM' }
      ],
      requirements: [
        'High school diploma or GED',
        '18 years or older',
        'Background check',
        'Physical examination',
        'Interview with admissions'
      ]
    },
    {
      id: 'continuing-education',
      title: 'Continuing Education',
      subtitle: 'Advanced Skills & CEU Credits',
      duration: '1 day - 2 weeks',
      hours: '2-40 hours',
      format: 'Workshops & Seminars',
      price: 'Varies by course',
      description: 'Advanced courses and workshops to enhance your skills and meet continuing education requirements. Earn CEU credits while learning new techniques.',
      features: [
        'Advanced massage techniques',
        'Specialized modalities',
        'CEU credits',
        'Industry updates',
        'Networking opportunities',
        'Flexible scheduling'
      ],
      schedule: [
        { day: 'Weekend Workshops', time: '9:00 AM - 5:00 PM' },
        { day: 'Evening Classes', time: '6:00 PM - 9:00 PM' },
        { day: 'Intensive Courses', time: 'Full week programs' }
      ],
      requirements: [
        'Current massage therapy license',
        'Basic massage therapy knowledge',
        'Registration for specific courses'
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Training',
      subtitle: 'Master Specific Modalities',
      duration: '2-8 weeks',
      hours: '20-100 hours',
      format: 'Intensive Training',
      price: '$500 - $2,500',
      description: 'Master specific massage modalities and techniques for specialized client needs and advanced practice. Perfect for expanding your service offerings.',
      features: [
        'Deep tissue massage',
        'Sports massage',
        'Prenatal massage',
        'Hot stone therapy',
        'Aromatherapy',
        'Reflexology basics'
      ],
      schedule: [
        { day: 'Intensive Week', time: 'Monday-Friday 9:00 AM - 5:00 PM' },
        { day: 'Weekend Series', time: 'Saturdays 9:00 AM - 5:00 PM' },
        { day: 'Evening Series', time: 'Tues/Thurs 6:00 PM - 9:00 PM' }
      ],
      requirements: [
        'Basic massage therapy knowledge',
        'Interest in specialized techniques',
        'Commitment to intensive learning'
      ]
    }
  ]

  const certifications = [
    {
      name: 'State Massage Therapy License',
      description: 'Required to practice massage therapy in our state',
      requirements: '500+ hours of training, state exam, background check'
    },
    {
      name: 'National Certification',
      description: 'Optional national certification for enhanced credibility',
      requirements: 'Additional exam, continuing education requirements'
    },
    {
      name: 'Specialized Certifications',
      description: 'Certifications in specific massage modalities',
      requirements: 'Completion of specialized training programs'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Our <span className="text-gradient">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-8">
            Choose from our comprehensive range of massage therapy programs designed 
            to meet your career goals and fit your lifestyle.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Clock className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Flexible Scheduling</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Award className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">State Accredited</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Users className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Expert Instructors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} id={program.id} className="card group">
                <div className="p-8">
                  {/* Program Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-neutral-900">
                      {program.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">{program.subtitle}</p>
                  </div>

                  {/* Program Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Duration:</span>
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Hours:</span>
                      <span className="font-semibold">{program.hours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Format:</span>
                      <span className="font-semibold">{program.format}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Tuition:</span>
                      <span className="font-semibold text-primary-600">{program.price}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                      Schedule Options
                    </h4>
                    <div className="space-y-2">
                      {program.schedule.map((schedule, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-neutral-600">{schedule.day}:</span>
                          <span className="font-medium">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((requirement) => (
                        <li key={requirement} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-neutral-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-neutral-200">
                    <Link 
                      to="/goldenEducation/admissions" 
                      className="btn-primary w-full justify-center group-hover:bg-primary-700"
                    >
                      Apply for This Program
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Certifications & Licensing
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our programs prepare you for the certifications and licenses needed 
              to practice massage therapy professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="card p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-900">
                  {cert.name}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {cert.description}
                </p>
                <div className="text-sm text-neutral-500">
                  <strong>Requirements:</strong> {cert.requirements}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid & Payment Plans */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Financial Aid & Payment Options
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We offer various payment options and financial aid to make your 
              education accessible and affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                Payment Plans
              </h3>
              <p className="text-neutral-600">
                Monthly payment plans with no interest charges
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                Scholarships
              </h3>
              <p className="text-neutral-600">
                Merit-based and need-based scholarships available
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                Military Benefits
              </h3>
              <p className="text-neutral-600">
                GI Bill and military education benefits accepted
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                Employer Reimbursement
              </h3>
              <p className="text-neutral-600">
                Many employers offer tuition reimbursement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Massage Therapy Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Contact our admissions team to learn more about our programs, 
            schedule a campus tour, or begin your application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/goldenEducation/admissions" className="btn-secondary">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/goldenEducation/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage
