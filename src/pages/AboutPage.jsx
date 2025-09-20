import {
    Award,
    BookOpen,
    CheckCircle,
    Heart,
    Star,
    Target,
    Users
} from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story')

  const tabs = [
    { id: 'story', label: 'Our Story', icon: BookOpen },
    { id: 'mission', label: 'Mission & Values', icon: Target },
    { id: 'faculty', label: 'Faculty & Staff', icon: Users },
    { id: 'accreditation', label: 'Accreditation', icon: Award },
    { id: 'success', label: 'Success Stories', icon: Star }
  ]

  const faculty = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Program Director',
      credentials: 'LMT, PhD in Health Sciences',
      experience: '15+ years in massage therapy education',
      specialties: ['Swedish Massage', 'Deep Tissue', 'Anatomy'],
      image: '/faculty/sarah-johnson.jpg',
      bio: 'Dr. Johnson brings over 15 years of experience in massage therapy education and clinical practice. She is passionate about creating comprehensive learning experiences that prepare students for successful careers.'
    },
    {
      name: 'Michael Chen',
      title: 'Lead Instructor',
      credentials: 'LMT, Certified Massage Therapist',
      experience: '12+ years clinical practice',
      specialties: ['Sports Massage', 'Trigger Point Therapy', 'Business Development'],
      image: '/faculty/michael-chen.jpg',
      bio: 'Michael specializes in sports massage and has worked with professional athletes. He brings real-world experience and practical business knowledge to the classroom.'
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Clinical Coordinator',
      credentials: 'LMT, Certified in Prenatal Massage',
      experience: '10+ years specialized practice',
      specialties: ['Prenatal Massage', 'Therapeutic Massage', 'Client Assessment'],
      image: '/faculty/lisa-rodriguez.jpg',
      bio: 'Lisa coordinates our clinical practice program and specializes in prenatal and therapeutic massage. She ensures students receive hands-on experience with diverse client populations.'
    },
    {
      name: 'David Thompson',
      title: 'Anatomy & Physiology Instructor',
      credentials: 'MS in Exercise Science, LMT',
      experience: '8+ years teaching experience',
      specialties: ['Human Anatomy', 'Physiology', 'Kinesiology'],
      image: '/faculty/david-thompson.jpg',
      bio: 'David makes complex anatomical concepts accessible and engaging. His background in exercise science provides students with a solid foundation in human movement and function.'
    }
  ]

  const accreditations = [
    {
      organization: 'Commission on Massage Therapy Accreditation (COMTA)',
      status: 'Fully Accredited',
      validUntil: '2027',
      description: 'COMTA is recognized by the U.S. Department of Education as a specialized accrediting agency for massage therapy programs.',
      logo: '/accreditation/comta-logo.png'
    },
    {
      organization: 'State Board of Massage Therapy',
      status: 'Licensed',
      validUntil: '2025',
      description: 'Our school is licensed by the state to provide massage therapy education and training.',
      logo: '/accreditation/state-board-logo.png'
    },
    {
      organization: 'American Massage Therapy Association (AMTA)',
      status: 'Member School',
      validUntil: 'Ongoing',
      description: 'We are proud members of AMTA, supporting the advancement of massage therapy as a healthcare profession.',
      logo: '/accreditation/amta-logo.png'
    }
  ]

  const successStories = [
    {
      name: 'Sarah Mitchell',
      graduationYear: '2022',
      currentPosition: 'Owner, Healing Hands Massage',
      story: 'After graduating from the program, I felt confident and prepared to start my own practice. The business courses were invaluable, and I now have a thriving massage therapy business.',
      achievements: ['Started own practice', 'Employed 3 therapists', 'Served 500+ clients'],
      image: '/success/sarah-mitchell.jpg'
    },
    {
      name: 'Michael Johnson',
      graduationYear: '2023',
      currentPosition: 'Sports Massage Therapist, Elite Athletics',
      story: 'The specialized training in sports massage opened doors I never expected. I now work with professional athletes and have a waiting list of clients.',
      achievements: ['Specialized in sports massage', 'Worked with pro athletes', 'Earned advanced certifications'],
      image: '/success/michael-johnson.jpg'
    },
    {
      name: 'Lisa Davis',
      graduationYear: '2021',
      currentPosition: 'Lead Therapist, Wellness Spa',
      story: 'The comprehensive education I received prepared me for leadership roles. I now manage a team of therapists and help train new staff.',
      achievements: ['Promoted to lead therapist', 'Manages team of 5', 'Trains new staff'],
      image: '/success/lisa-davis.jpg'
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
      <section className="section gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            About <span className="text-gradient">Our School</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-8">
            Discover our story, meet our dedicated faculty, and learn about our commitment 
            to excellence in massage therapy education.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Award className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Accredited</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Users className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Expert Faculty</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Star className="w-4 h-4 text-primary-600" />
              <span className="text-neutral-700">Proven Success</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
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

      {/* Tabbed Content */}
      <section className="section gradient-bg">
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
                    : 'bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Our Story Tab */}
            {activeTab === 'story' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Our Story
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    From humble beginnings to becoming a leading massage therapy school, 
                    our journey has been driven by a passion for excellence and student success.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h4 className="text-2xl font-semibold mb-4 text-neutral-900">
                      Founded in 2009
                    </h4>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      Our school was founded by a group of experienced massage therapists 
                      who recognized the need for comprehensive, hands-on education in the field. 
                      What started as a small training center has grown into a respected 
                      institution known for producing highly skilled professionals.
                    </p>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      Over the years, we've continuously evolved our curriculum to meet 
                      industry standards and incorporate the latest techniques and research. 
                      Our commitment to excellence has remained constant, even as we've grown 
                      and expanded our programs.
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                      Today, we're proud to have graduated hundreds of successful massage 
                      therapists who are making a positive impact in their communities 
                      and advancing the profession.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-8 text-white text-center">
                      <div className="text-6xl font-bold mb-4">15+</div>
                      <div className="text-xl mb-2">Years of Excellence</div>
                      <div className="text-primary-100">
                        Dedicated to massage therapy education
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-200 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-200 rounded-full opacity-60"></div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    Our Growth Journey
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">2009</div>
                      <div className="text-sm text-neutral-600">School founded with 12 students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">2015</div>
                      <div className="text-sm text-neutral-600">Achieved COMTA accreditation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">2024</div>
                      <div className="text-sm text-neutral-600">500+ graduates, expanded programs</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mission & Values Tab */}
            {activeTab === 'mission' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Mission & Values
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Our mission drives everything we do, and our values shape how we 
                    educate and support our students.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-2xl font-semibold mb-4 text-neutral-900">
                      Our Mission
                    </h4>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      To provide exceptional massage therapy education that empowers 
                      students with the knowledge, skills, and professional values needed 
                      to succeed in the healing arts profession.
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                      We are committed to fostering a supportive learning environment 
                      that promotes personal growth, professional development, and 
                      a commitment to serving others through therapeutic touch.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-4 text-neutral-900">
                      Our Vision
                    </h4>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      To be the leading massage therapy school recognized for excellence 
                      in education, innovation in curriculum, and commitment to student success.
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                      We envision a future where our graduates are leaders in the field, 
                      advancing the profession and improving the health and wellness of communities.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h5 className="text-lg font-semibold mb-2 text-neutral-900">
                      Compassion
                    </h5>
                    <p className="text-sm text-neutral-600">
                      We approach education with care and understanding for each student's journey.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-secondary-600" />
                    </div>
                    <h5 className="text-lg font-semibold mb-2 text-neutral-900">
                      Excellence
                    </h5>
                    <p className="text-sm text-neutral-600">
                      We maintain the highest standards in education and student support.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-accent-600" />
                    </div>
                    <h5 className="text-lg font-semibold mb-2 text-neutral-900">
                      Community
                    </h5>
                    <p className="text-sm text-neutral-600">
                      We foster a supportive environment where students and staff thrive together.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h5 className="text-lg font-semibold mb-2 text-neutral-900">
                      Integrity
                    </h5>
                    <p className="text-sm text-neutral-600">
                      We operate with honesty, transparency, and ethical practices.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Faculty & Staff Tab */}
            {activeTab === 'faculty' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Meet Our Faculty & Staff
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Our experienced and dedicated team brings real-world expertise 
                    and a passion for teaching to every class.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {faculty.map((member) => (
                    <div key={member.name} className="card p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-10 h-10 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-1 text-neutral-900">
                            {member.name}
                          </h4>
                          <div className="text-primary-600 font-medium mb-2">
                            {member.title}
                          </div>
                          <div className="text-sm text-neutral-600 mb-3">
                            <strong>Credentials:</strong> {member.credentials}
                          </div>
                          <div className="text-sm text-neutral-600 mb-3">
                            <strong>Experience:</strong> {member.experience}
                          </div>
                          <div className="text-sm text-neutral-600 mb-3">
                            <strong>Specialties:</strong> {member.specialties.join(', ')}
                          </div>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    Join Our Team
                  </h4>
                  <p className="text-neutral-600 mb-4">
                    We're always looking for passionate educators and professionals 
                    to join our faculty and staff.
                  </p>
                  <Link to="/careers" className="btn-secondary">
                    View Open Positions
                  </Link>
                </div>
              </div>
            )}

            {/* Accreditation Tab */}
            {activeTab === 'accreditation' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Accreditations & Recognition
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Our commitment to quality education is recognized through 
                    various accreditations and professional memberships.
                  </p>
                </div>

                <div className="space-y-6">
                  {accreditations.map((accreditation) => (
                    <div key={accreditation.organization} className="card p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-8 h-8 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 text-neutral-900">
                            {accreditation.organization}
                          </h4>
                          <div className="flex items-center space-x-4 mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              accreditation.status === 'Fully Accredited' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {accreditation.status}
                            </span>
                            <span className="text-sm text-neutral-500">
                              Valid until: {accreditation.validUntil}
                            </span>
                          </div>
                          <p className="text-neutral-600">
                            {accreditation.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">
                    What Accreditation Means for You
                  </h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Quality education that meets industry standards</li>
                    <li>• Eligibility for federal financial aid (if applicable)</li>
                    <li>• Recognition by employers and professional organizations</li>
                    <li>• Transfer credits to other accredited institutions</li>
                    <li>• Assurance of ongoing quality improvement</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Success Stories Tab */}
            {activeTab === 'success' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Success Stories
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Hear from our graduates about how our program prepared them 
                    for successful careers in massage therapy.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {successStories.map((story) => (
                    <div key={story.name} className="card p-6">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Star className="w-8 h-8 text-primary-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-neutral-900">
                          {story.name}
                        </h4>
                        <div className="text-primary-600 font-medium">
                          Class of {story.graduationYear}
                        </div>
                        <div className="text-sm text-neutral-600">
                          {story.currentPosition}
                        </div>
                      </div>
                      <p className="text-neutral-600 mb-4 italic">
                        "{story.story}"
                      </p>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-neutral-900">
                          Key Achievements:
                        </div>
                        <ul className="space-y-1">
                          {story.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm text-neutral-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    Share Your Success Story
                  </h4>
                  <p className="text-neutral-600 mb-4">
                    Are you a graduate with a success story to share? 
                    We'd love to hear about your journey and achievements.
                  </p>
                  <Link to="/goldenEducation/contact" className="btn-primary">
                    Share Your Story
                  </Link>
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
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Become part of our story and start your journey toward a rewarding 
            career in massage therapy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/goldenEducation/admissions" className="btn-secondary">
              Apply Now
            </Link>
            <Link to="/goldenEducation/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
