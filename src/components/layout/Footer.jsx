import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Programs',
      links: [
        { name: 'Massage Therapy', href: '/programs#massage-therapy' },
        { name: 'Continuing Education', href: '/programs#continuing-education' },
        { name: 'Specialized Training', href: '/programs#specialized' },
        { name: 'Certification', href: '/programs#certification' },
      ]
    },
    {
      title: 'Student Resources',
      links: [
        { name: 'Student Handbook', href: '/student-resources#handbook' },
        { name: 'Forms & Policies', href: '/student-resources#forms' },
        { name: 'Academic Calendar', href: '/student-resources#calendar' },
        { name: 'Career Services', href: '/student-resources#career' },
      ]
    },
    {
      title: 'Admissions',
      links: [
        { name: 'How to Apply', href: '/admissions#how-to-apply' },
        { name: 'Requirements', href: '/admissions#requirements' },
        { name: 'Tuition & Fees', href: '/admissions#tuition' },
        { name: 'Financial Aid', href: '/admissions#financial-aid' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about#story' },
        { name: 'Faculty & Staff', href: '/about#faculty' },
        { name: 'Accreditation', href: '/about#accreditation' },
        { name: 'Success Stories', href: '/about#success' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Massage School</h3>
                <p className="text-neutral-400">Professional Education</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Empowering students with comprehensive massage therapy education, 
              hands-on training, and the skills needed for a successful career 
              in the healing arts.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-neutral-300">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>123 Healing Way, Wellness City, WC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>info@massageschool.com</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Clock className="w-5 h-5 text-primary-400" />
                <span>Mon-Fri: 8AM-6PM, Sat: 9AM-3PM</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-neutral-400">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:bg-neutral-700 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-neutral-400 text-sm">
                © {currentYear} Massage School. All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2 text-sm">
                <Link to="/goldenEducation/privacy" className="text-neutral-400 hover:text-primary-400">
                  Privacy Policy
                </Link>
                <Link to="/goldenEducation/terms" className="text-neutral-400 hover:text-primary-400">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-950 py-4">
        <div className="container-custom">
          <div className="text-center text-neutral-500 text-sm">
            <p>
              Accredited by the Commission on Massage Therapy Accreditation (COMTA) | 
              Licensed by the State Board of Massage Therapy | 
              Member of the American Massage Therapy Association (AMTA)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
