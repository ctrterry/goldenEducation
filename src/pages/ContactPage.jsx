import {
    AlertCircle,
    CheckCircle,
    Clock,
    Mail,
    MapPin,
    Phone,
    Send
} from 'lucide-react'
import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', '(555) 123-4568 (Fax)'],
      color: 'primary'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@massageschool.com', 'admissions@massageschool.com'],
      color: 'secondary'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Healing Way', 'Wellness City, WC 12345'],
      color: 'accent'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 3:00 PM'],
      color: 'green'
    }
  ]

  const departments = [
    {
      name: 'Admissions',
      contact: 'admissions@massageschool.com',
      phone: '(555) 123-4567 ext. 101',
      description: 'Questions about programs, applications, and enrollment'
    },
    {
      name: 'Student Services',
      contact: 'studentservices@massageschool.com',
      phone: '(555) 123-4567 ext. 102',
      description: 'Current student support and resources'
    },
    {
      name: 'Financial Aid',
      contact: 'financialaid@massageschool.com',
      phone: '(555) 123-4567 ext. 103',
      description: 'Tuition, payment plans, and financial assistance'
    },
    {
      name: 'General Information',
      contact: 'info@massageschool.com',
      phone: '(555) 123-4567 ext. 100',
      description: 'General questions and information requests'
    }
  ]

  const subjects = [
    'General Information',
    'Program Information',
    'Admissions Questions',
    'Financial Aid',
    'Student Services',
    'Campus Tour',
    'Partnership Opportunities',
    'Other'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            <span className="text-gradient">Contact</span> Us
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-8">
            Get in touch with our team. We're here to answer your questions and 
            help you start your massage therapy journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Phone className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Quick Response</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Mail className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Multiple Ways to Reach Us</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Clock className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Extended Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center">
                <div className={`w-16 h-16 bg-${info.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`w-8 h-8 text-${info.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-neutral-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>

              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-800 font-medium">
                      There was an error sending your message. Please try again.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </form>
            </div>

            {/* Department Contacts & Map */}
            <div className="space-y-8">
              {/* Department Contacts */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Contact by Department
                </h3>
                <div className="space-y-4">
                  {departments.map((dept) => (
                    <div key={dept.name} className="border border-neutral-200 rounded-lg p-4">
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        {dept.name}
                      </h4>
                      <p className="text-sm text-neutral-600 mb-3">
                        {dept.description}
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-primary-600" />
                          <a href={`mailto:${dept.contact}`} className="text-primary-600 hover:text-primary-700">
                            {dept.contact}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-primary-600" />
                          <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="text-primary-600 hover:text-primary-700">
                            {dept.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Visit Our Campus
                </h3>
                <div className="bg-neutral-200 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center text-neutral-500">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p>Interactive Map Coming Soon</p>
                    <p className="text-sm">123 Healing Way, Wellness City, WC 12345</p>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn-outline">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Find quick answers to common questions about contacting us and getting started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  How quickly will you respond to my message?
                </h4>
                <p className="text-neutral-600">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  Can I schedule a campus tour?
                </h4>
                <p className="text-neutral-600">
                  Absolutely! We offer campus tours Monday through Friday. Contact our 
                  admissions team to schedule a convenient time.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  What information should I include in my message?
                </h4>
                <p className="text-neutral-600">
                  Please include your name, contact information, and specific questions 
                  or concerns. This helps us provide the most helpful response.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  Do you offer virtual consultations?
                </h4>
                <p className="text-neutral-600">
                  Yes! We offer video consultations for those who can't visit in person. 
                  Contact us to schedule a virtual meeting.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  What are your office hours?
                </h4>
                <p className="text-neutral-600">
                  Our main office is open Monday-Friday 8:00 AM - 6:00 PM and 
                  Saturday 9:00 AM - 3:00 PM. We're closed on Sundays and major holidays.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  How can I get emergency assistance?
                </h4>
                <p className="text-neutral-600">
                  For emergency situations outside of office hours, please call our 
                  emergency line at (555) 123-4567.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Don't wait to begin your massage therapy journey. Contact us today 
            to learn more about our programs and start your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(555)123-4567" className="btn-secondary">
              Call Us Now
            </a>
            <a href="mailto:info@massageschool.com" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
