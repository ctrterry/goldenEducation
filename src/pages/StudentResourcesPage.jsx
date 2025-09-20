import {
    Award,
    BookOpen,
    Briefcase,
    Calendar,
    CheckCircle,
    Clock,
    Download,
    ExternalLink,
    FileText,
    GraduationCap,
    Heart,
    Mail,
    Phone,
    Users
} from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const StudentResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('handbook')

  const tabs = [
    { id: 'handbook', label: 'Student Handbook', icon: BookOpen },
    { id: 'forms', label: 'Forms & Policies', icon: FileText },
    { id: 'calendar', label: 'Academic Calendar', icon: Calendar },
    { id: 'career', label: 'Career Services', icon: Briefcase },
    { id: 'support', label: 'Student Support', icon: Heart }
  ]

  const handbookSections = [
    {
      title: 'Academic Policies',
      description: 'Grading, attendance, and academic standards',
      topics: [
        'Grading System',
        'Attendance Requirements',
        'Academic Probation',
        'Graduation Requirements',
        'Transfer Credits'
      ]
    },
    {
      title: 'Student Conduct',
      description: 'Behavioral expectations and disciplinary procedures',
      topics: [
        'Code of Conduct',
        'Dress Code',
        'Professional Behavior',
        'Disciplinary Procedures',
        'Grievance Process'
      ]
    },
    {
      title: 'Facilities & Equipment',
      description: 'Using school facilities and equipment properly',
      topics: [
        'Classroom Rules',
        'Equipment Usage',
        'Safety Guidelines',
        'Facility Hours',
        'Maintenance Requests'
      ]
    },
    {
      title: 'Health & Safety',
      description: 'Health requirements and safety protocols',
      topics: [
        'Health Requirements',
        'Safety Protocols',
        'Emergency Procedures',
        'First Aid',
        'COVID-19 Guidelines'
      ]
    }
  ]

  const forms = [
    {
      name: 'Student Information Update',
      description: 'Update personal information, contact details, or emergency contacts',
      category: 'Administrative',
      required: false,
      frequency: 'As needed'
    },
    {
      name: 'Leave of Absence Request',
      description: 'Request temporary leave from the program for personal or medical reasons',
      category: 'Academic',
      required: true,
      frequency: 'Before leave'
    },
    {
      name: 'Course Withdrawal',
      description: 'Withdraw from a course or the entire program',
      category: 'Academic',
      required: true,
      frequency: 'Before deadline'
    },
    {
      name: 'Grade Appeal',
      description: 'Appeal a grade or academic decision',
      category: 'Academic',
      required: true,
      frequency: 'Within 30 days'
    },
    {
      name: 'Financial Aid Application',
      description: 'Apply for scholarships, grants, or payment plans',
      category: 'Financial',
      required: false,
      frequency: 'Annually'
    },
    {
      name: 'Complaint/Grievance',
      description: 'Submit formal complaints or grievances',
      category: 'Administrative',
      required: true,
      frequency: 'As needed'
    },
    {
      name: 'Transcript Request',
      description: 'Request official transcripts for transfer or employment',
      category: 'Administrative',
      required: false,
      frequency: 'As needed'
    },
    {
      name: 'Certification Verification',
      description: 'Request verification of enrollment or completion',
      category: 'Administrative',
      required: false,
      frequency: 'As needed'
    }
  ]

  const calendarEvents = [
    {
      month: 'September 2024',
      events: [
        { date: '3', title: 'Fall Term Begins', type: 'academic' },
        { date: '5', title: 'New Student Orientation', type: 'orientation' },
        { date: '7', title: 'Labor Day - No Classes', type: 'holiday' },
        { date: '15', title: 'Add/Drop Deadline', type: 'academic' },
        { date: '28', title: 'Student Success Workshop', type: 'workshop' }
      ]
    },
    {
      month: 'October 2024',
      events: [
        { date: '12', title: 'Columbus Day - No Classes', type: 'holiday' },
        { date: '20', title: 'Midterm Exams Begin', type: 'academic' },
        { date: '25', title: 'Career Fair', type: 'career' },
        { date: '31', title: 'Halloween Celebration', type: 'social' }
      ]
    },
    {
      month: 'November 2024',
      events: [
        { date: '11', title: 'Veterans Day - No Classes', type: 'holiday' },
        { date: '18', title: 'Thanksgiving Break Begins', type: 'holiday' },
        { date: '25', title: 'Classes Resume', type: 'academic' },
        { date: '29', title: 'Student Appreciation Day', type: 'social' }
      ]
    }
  ]

  const careerServices = [
    {
      title: 'Resume & Cover Letter',
      description: 'Professional resume writing and cover letter assistance',
      icon: FileText,
      features: [
        'Resume templates for massage therapists',
        'Cover letter writing guidance',
        'Professional review and feedback',
        'Industry-specific tips'
      ]
    },
    {
      title: 'Job Search Support',
      description: 'Help finding employment opportunities in massage therapy',
      icon: Briefcase,
      features: [
        'Job board access',
        'Industry networking events',
        'Employer connections',
        'Interview preparation'
      ]
    },
    {
      title: 'Business Development',
      description: 'Support for starting your own massage therapy practice',
      icon: Award,
      features: [
        'Business plan assistance',
        'Marketing strategies',
        'Legal requirements',
        'Financial planning'
      ]
    },
    {
      title: 'Continuing Education',
      description: 'Guidance on advanced training and certifications',
      icon: GraduationCap,
      features: [
        'CEU course recommendations',
        'Specialization guidance',
        'Certification pathways',
        'Professional development'
      ]
    }
  ]

  const studentSupport = [
    {
      title: 'Academic Advising',
      description: 'One-on-one guidance for academic success',
      contact: 'advising@massageschool.com',
      hours: 'Mon-Fri 9AM-5PM'
    },
    {
      title: 'Financial Aid Office',
      description: 'Assistance with tuition, payment plans, and financial aid',
      contact: 'financialaid@massageschool.com',
      hours: 'Mon-Fri 9AM-5PM'
    },
    {
      title: 'Student Services',
      description: 'General student support and resources',
      contact: 'studentservices@massageschool.com',
      hours: 'Mon-Fri 8AM-6PM'
    },
    {
      title: 'Technical Support',
      description: 'Help with online platforms and technology issues',
      contact: 'techsupport@massageschool.com',
      hours: 'Mon-Fri 8AM-8PM'
    }
  ]

  const getEventTypeColor = (type) => {
    const colors = {
      academic: 'bg-blue-100 text-blue-800',
      orientation: 'bg-green-100 text-green-800',
      holiday: 'bg-red-100 text-red-800',
      workshop: 'bg-purple-100 text-purple-800',
      career: 'bg-orange-100 text-orange-800',
      social: 'bg-pink-100 text-pink-800'
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Student <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-8">
            Everything you need to succeed in your massage therapy education. 
            Access forms, policies, calendars, and support services all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <BookOpen className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Student Handbook</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <FileText className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Forms & Policies</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Calendar className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Academic Calendar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Student Handbook Tab */}
            {activeTab === 'handbook' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Student Handbook
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Your comprehensive guide to policies, procedures, and expectations 
                    as a student in our massage therapy program.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {handbookSections.map((section) => (
                    <div key={section.title} className="card p-6">
                      <h4 className="text-xl font-semibold mb-3 text-neutral-900">
                        {section.title}
                      </h4>
                      <p className="text-neutral-600 mb-4">
                        {section.description}
                      </p>
                      <ul className="space-y-2">
                        {section.topics.map((topic) => (
                          <li key={topic} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-600">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-primary-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    Download Complete Handbook
                  </h4>
                  <p className="text-neutral-600 mb-4">
                    Get the full student handbook in PDF format for offline reference.
                  </p>
                  <button className="btn-primary">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>
            )}

            {/* Forms & Policies Tab */}
            {activeTab === 'forms' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Forms & Policies
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Access all the forms you need and understand our policies 
                    to ensure a smooth academic experience.
                  </p>
                </div>

                <div className="space-y-4">
                  {forms.map((form, index) => (
                    <div key={index} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg font-semibold text-neutral-900">
                              {form.name}
                            </h4>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              form.required 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {form.required ? 'Required' : 'Optional'}
                            </span>
                          </div>
                          <p className="text-neutral-600 mb-2">{form.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-neutral-500">
                            <span><strong>Category:</strong> {form.category}</span>
                            <span><strong>Frequency:</strong> {form.frequency}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200">
                            <Download className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200">
                            <ExternalLink className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">
                    Form Submission Guidelines
                  </h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Submit forms well before deadlines</li>
                    <li>• Ensure all required fields are completed</li>
                    <li>• Attach supporting documents when required</li>
                    <li>• Keep copies of all submitted forms</li>
                    <li>• Contact the appropriate office with questions</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Academic Calendar Tab */}
            {activeTab === 'calendar' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Academic Calendar
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Stay on top of important dates, deadlines, and events 
                    throughout the academic year.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {calendarEvents.map((month) => (
                    <div key={month.month} className="card p-6">
                      <h4 className="text-xl font-semibold mb-4 text-neutral-900 text-center">
                        {month.month}
                      </h4>
                      <div className="space-y-3">
                        {month.events.map((event, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-sm font-semibold text-primary-600 flex-shrink-0">
                              {event.date}
                            </div>
                            <div className="flex-1">
                              <div className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-1 ${getEventTypeColor(event.type)}`}>
                                {event.type}
                              </div>
                              <div className="text-sm text-neutral-900 font-medium">
                                {event.title}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">
                    Calendar Legend
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-100 rounded-full"></div>
                      <span className="text-green-700">Academic</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-100 rounded-full"></div>
                      <span className="text-green-700">Orientation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-100 rounded-full"></div>
                      <span className="text-green-700">Holiday</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-100 rounded-full"></div>
                      <span className="text-green-700">Workshop</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-100 rounded-full"></div>
                      <span className="text-green-700">Career</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-pink-100 rounded-full"></div>
                      <span className="text-green-700">Social</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Career Services Tab */}
            {activeTab === 'career' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Career Services
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Comprehensive support to help you launch and advance your 
                    career in massage therapy.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {careerServices.map((service) => (
                    <div key={service.title} className="card p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-neutral-900">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-neutral-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">
                    Schedule a Career Counseling Session
                  </h4>
                  <p className="text-orange-700 mb-4">
                    Meet one-on-one with our career counselor to discuss your goals, 
                    create a career plan, and get personalized guidance.
                  </p>
                  <button className="btn-primary">
                    Schedule Session
                  </button>
                </div>
              </div>
            )}

            {/* Student Support Tab */}
            {activeTab === 'support' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Student Support Services
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    We're here to support your success. Contact any of these offices 
                    for assistance with your academic journey.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {studentSupport.map((service) => (
                    <div key={service.title} className="card p-6">
                      <h4 className="text-xl font-semibold mb-3 text-neutral-900">
                        {service.title}
                      </h4>
                      <p className="text-neutral-600 mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-primary-600" />
                          <span className="text-sm text-neutral-600">{service.contact}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary-600" />
                          <span className="text-sm text-neutral-600">{service.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    Emergency Contact
                  </h4>
                  <p className="text-neutral-600 mb-4">
                    For urgent matters outside of regular office hours, 
                    contact our emergency line.
                  </p>
                  <div className="flex items-center space-x-2 text-lg font-semibold text-primary-600">
                    <Phone className="w-5 h-5" />
                    <span>(555) 123-4567 (Emergency Line)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-neutral-600">
              Frequently accessed resources and important links
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/student-portal" className="card p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-neutral-900">Student Portal</h3>
            </Link>

            <Link to="/library" className="card p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="font-semibold text-neutral-900">Library</h3>
            </Link>

            <Link to="/tutoring" className="card p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="font-semibold text-neutral-900">Tutoring</h3>
            </Link>

            <Link to="/events" className="card p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-neutral-900">Events</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Additional Help?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Can't find what you're looking for? Our student services team is here to help. 
            Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/goldenEducation/contact" className="btn-secondary">
              Contact Student Services
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/goldenEducation/faq" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentResourcesPage
