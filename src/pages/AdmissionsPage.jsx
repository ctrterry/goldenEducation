import {
    ArrowRight,
    Calendar,
    CheckCircle,
    Clock,
    DollarSign,
    Download,
    FileText,
    Mail,
    MapPin,
    Phone,
    Upload,
    Users
} from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const applicationSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Schedule a meeting with our admissions team to discuss your goals and program options.',
      duration: '30 minutes',
      icon: Users
    },
    {
      step: 2,
      title: 'Application Submission',
      description: 'Complete and submit your application with required documents and fees.',
      duration: '1-2 weeks',
      icon: FileText
    },
    {
      step: 3,
      title: 'Interview & Assessment',
      description: 'Meet with faculty for a personal interview and skills assessment.',
      duration: '1 hour',
      icon: Users
    },
    {
      step: 4,
      title: 'Acceptance & Enrollment',
      description: 'Receive acceptance letter and complete enrollment paperwork.',
      duration: '1-2 weeks',
      icon: CheckCircle
    },
    {
      step: 5,
      title: 'Orientation & Start',
      description: 'Attend orientation and begin your massage therapy education journey.',
      duration: '1 day',
      icon: Calendar
    }
  ]

  const requirements = [
    {
      category: 'Academic Requirements',
      items: [
        'High school diploma or GED equivalent',
        'Minimum GPA of 2.0 (if applicable)',
        'English language proficiency'
      ]
    },
    {
      category: 'Personal Requirements',
      items: [
        'Minimum age of 18 years',
        'Physical ability to perform massage therapy',
        'Professional attitude and commitment',
        'Background check clearance'
      ]
    },
    {
      category: 'Health Requirements',
      items: [
        'Physical examination by licensed physician',
        'Current immunizations (including COVID-19)',
        'TB test results',
        'Health insurance coverage'
      ]
    },
    {
      category: 'Financial Requirements',
      items: [
        'Application fee payment',
        'Tuition deposit or payment plan setup',
        'Financial aid application (if applicable)',
        'Textbook and supply costs covered'
      ]
    }
  ]

  const documents = [
    {
      name: 'Application Form',
      description: 'Complete application with personal and educational information',
      required: true,
      format: 'PDF, Online Form'
    },
    {
      name: 'High School Transcript',
      description: 'Official transcript or GED certificate',
      required: true,
      format: 'Official Copy'
    },
    {
      name: 'Government ID',
      description: 'Valid driver\'s license, passport, or state ID',
      required: true,
      format: 'Copy'
    },
    {
      name: 'Background Check',
      description: 'Criminal background check results',
      required: true,
      format: 'Official Report'
    },
    {
      name: 'Physical Examination',
      description: 'Medical clearance from licensed physician',
      required: true,
      format: 'Medical Form'
    },
    {
      name: 'Letters of Recommendation',
      description: 'Two professional or academic references',
      required: false,
      format: 'Letter'
    },
    {
      name: 'Personal Statement',
      description: 'Essay explaining your interest in massage therapy',
      required: false,
      format: '500-750 words'
    }
  ]

  const deadlines = [
    {
      term: 'Fall 2024',
      applicationDeadline: 'July 15, 2024',
      startDate: 'September 3, 2024',
      orientation: 'August 28, 2024'
    },
    {
      term: 'Spring 2025',
      applicationDeadline: 'November 15, 2024',
      startDate: 'January 13, 2025',
      orientation: 'January 8, 2025'
    },
    {
      term: 'Summer 2025',
      applicationDeadline: 'March 15, 2025',
      startDate: 'May 19, 2025',
      orientation: 'May 14, 2025'
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'documents', label: 'Documents' },
    { id: 'deadlines', label: 'Deadlines' },
    { id: 'apply', label: 'Apply Now' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            <span className="text-gradient">Admissions</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-8">
            Start your journey to becoming a licensed massage therapist. 
            Our admissions process is designed to be straightforward and supportive.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-neutral-700">Simple Application</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-neutral-700">Rolling Admissions</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-neutral-700">Personal Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our streamlined application process takes you from initial interest 
              to enrollment in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {applicationSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connection Line */}
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 z-0" 
                       style={{ width: 'calc(100% - 2rem)' }}></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    {step.description}
                  </p>
                  <div className="text-xs text-primary-600 font-medium">
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="section gradient-bg">
        <div className="container-custom">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Welcome to Our Admissions Process
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    We're excited that you're considering joining our massage therapy program. 
                    Our admissions team is here to guide you through every step of the process.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-neutral-900">
                      Rolling Admissions
                    </h4>
                    <p className="text-neutral-600">
                      Apply anytime throughout the year. We review applications 
                      as they come in and provide quick responses.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-neutral-900">
                      Personal Support
                    </h4>
                    <p className="text-neutral-600">
                      Our admissions team provides personalized guidance and 
                      answers all your questions throughout the process.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-neutral-900">
                      Quick Processing
                    </h4>
                    <p className="text-neutral-600">
                      Most applications are processed within 2-3 weeks, 
                      allowing you to start your education quickly.
                    </p>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    Need Help Getting Started?
                  </h4>
                  <p className="text-neutral-600 mb-4">
                    Our admissions team is available to help you with any questions 
                    about the application process, requirements, or program details.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary-600" />
                      <span className="text-neutral-700">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary-600" />
                      <span className="text-neutral-700">admissions@massageschool.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary-600" />
                      <span className="text-neutral-700">Schedule a campus tour</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Requirements Tab */}
            {activeTab === 'requirements' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Admission Requirements
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    To ensure your success in our program, we have specific requirements 
                    that all applicants must meet. Review them carefully before applying.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {requirements.map((category) => (
                    <div key={category.category} className="card p-6">
                      <h4 className="text-xl font-semibold mb-4 text-neutral-900">
                        {category.category}
                      </h4>
                      <ul className="space-y-3">
                        {category.items.map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                    Important Note
                  </h4>
                  <p className="text-yellow-700">
                    Meeting the minimum requirements does not guarantee admission. 
                    We evaluate each application holistically, considering academic 
                    background, personal motivation, and potential for success in the program.
                  </p>
                </div>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Required Documents
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Gather all necessary documents before starting your application. 
                    This will help ensure a smooth and timely review process.
                  </p>
                </div>

                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg font-semibold text-neutral-900">
                              {doc.name}
                            </h4>
                            {doc.required && (
                              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-neutral-600 mb-2">{doc.description}</p>
                          <p className="text-sm text-neutral-500">
                            <strong>Format:</strong> {doc.format}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200">
                            <Download className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200">
                            <Upload className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">
                    Document Submission Tips
                  </h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Submit all documents in PDF format when possible</li>
                    <li>• Ensure documents are clear and legible</li>
                    <li>• Keep copies of all submitted materials</li>
                    <li>• Submit documents well before the deadline</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Deadlines Tab */}
            {activeTab === 'deadlines' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Application Deadlines & Important Dates
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Plan ahead and submit your application early to ensure you have 
                    time to complete all requirements and secure your spot.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {deadlines.map((term) => (
                    <div key={term.term} className="card p-6 text-center">
                      <h4 className="text-xl font-semibold mb-4 text-neutral-900">
                        {term.term}
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-neutral-500 mb-1">Application Deadline</div>
                          <div className="font-semibold text-neutral-900">{term.applicationDeadline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500 mb-1">Program Start</div>
                          <div className="font-semibold text-neutral-900">{term.startDate}</div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500 mb-1">Orientation</div>
                          <div className="font-semibold text-neutral-900">{term.orientation}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">
                    Early Application Benefits
                  </h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• More time to complete requirements</li>
                    <li>• Better chance of securing your preferred schedule</li>
                    <li>• Early access to financial aid resources</li>
                    <li>• Reduced stress during the enrollment process</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Apply Now Tab */}
            {activeTab === 'apply' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Ready to Apply?
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Congratulations on taking the first step toward your massage therapy career! 
                    Choose your preferred application method below.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Online Application */}
                  <div className="card p-8 text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-4 text-neutral-900">
                      Online Application
                    </h4>
                    <p className="text-neutral-600 mb-6">
                      Complete your application online for the fastest processing. 
                      Save your progress and return later if needed.
                    </p>
                    <Link to="/apply-online" className="btn-primary w-full">
                      Start Online Application
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>

                  {/* Paper Application */}
                  <div className="card p-8 text-center">
                    <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Download className="w-8 h-8 text-secondary-600" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-4 text-neutral-900">
                      Paper Application
                    </h4>
                    <p className="text-neutral-600 mb-6">
                      Prefer to fill out a paper application? Download the PDF 
                      and mail it to our admissions office.
                    </p>
                    <button className="btn-secondary w-full">
                      Download Application
                      <Download className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    Application Fee
                  </h4>
                  <p className="text-neutral-600 mb-4">
                    A non-refundable application fee of $50 is required with all applications. 
                    This fee covers the cost of processing your application and conducting 
                    the required background check.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-neutral-500">
                    <DollarSign className="w-4 h-4" />
                    <span>Payment methods: Credit card, check, or money order</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Admissions?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Our admissions team is here to help you every step of the way. 
            Contact us today to get started on your massage therapy journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Contact Admissions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/programs" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdmissionsPage
