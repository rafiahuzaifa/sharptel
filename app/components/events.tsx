"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Users, MapPin, ArrowRight, Clock, Trophy } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Digital Transformation Summit 2024",
    date: "15 March, 2024",
    time: "10:00 AM - 5:00 PM",
    venue: "Karachi Expo Center",
    attendees: "500+",
    category: "Technology Summit",
    image: "/background/events/digital-summit.webp",
    description: "Annual technology summit bringing together industry leaders, innovators, and decision-makers to discuss the future of digital transformation in Pakistan.",
    highlights: ["Keynote Speakers", "Panel Discussions", "Networking Session", "Product Demos"],
    status: "upcoming",
    registerLink: "/events/digital-summit"
  },
  {
    id: 2,
    title: "Cybersecurity Workshop Series",
    date: "20-22 February, 2024",
    time: "9:00 AM - 4:00 PM",
    venue: "Sharptel Innovation Center",
    attendees: "150",
    category: "Training Workshop",
    image: "/background/events/cybersecurity-workshop.webp",
    description: "Intensive 3-day workshop focusing on advanced cybersecurity practices, threat detection, and defense strategies for enterprise security teams.",
    highlights: ["Hands-on Labs", "Certification", "Expert Trainers", "Case Studies"],
    status: "ongoing",
    registerLink: "/events/cybersecurity-workshop"
  },
  {
    id: 3,
    title: "Tech Excellence Awards 2023",
    date: "10 December, 2023",
    time: "7:00 PM - 11:00 PM",
    venue: "Marriott Hotel, Karachi",
    attendees: "300+",
    category: "Award Ceremony",
    image: "/background/events/tech-awards.webp",
    description: "Recognizing outstanding achievements and innovations in Pakistan's technology sector. Celebrating excellence and groundbreaking contributions.",
    highlights: ["Award Ceremony", "Gala Dinner", "Networking", "Media Coverage"],
    status: "completed",
    registerLink: "/events/tech-awards",
    winners: ["Best IT Service Provider", "Innovation Excellence", "Customer Service Award"]
  },
  {
    id: 4,
    title: "Network Infrastructure Conference",
    date: "25 January, 2024",
    time: "9:30 AM - 6:00 PM",
    venue: "Lahore Convention Center",
    attendees: "350+",
    category: "Industry Conference",
    image: "/background/events/network-conference.webp",
    description: "Focused on next-generation network infrastructure, 5G implementation, and enterprise connectivity solutions for Pakistani businesses.",
    highlights: ["Expert Talks", "Vendor Exhibition", "Live Demos", "Q&A Sessions"],
    status: "completed",
    registerLink: "/events/network-conference"
  }
];

const engagements = [
  {
    id: 1,
    type: "Community Outreach",
    title: "Digital Literacy Program",
    location: "Karachi & Lahore",
    participants: "1000+ Students",
    duration: "Ongoing",
    icon: "👨‍🏫",
    description: "Providing digital skills training to underprivileged students across Pakistan.",
    impact: "Trained 1000+ students in basic computer skills",
    color: "bg-gradient-to-r from-red-50 to-white"
  },
  {
    id: 2,
    type: "Industry Partnership",
    title: "University Collaborations",
    location: "NED, FAST, LUMS",
    participants: "500+ Students",
    duration: "Annual",
    icon: "🎓",
    description: "Collaborating with top universities for internships and research projects.",
    impact: "50+ student placements in tech roles",
    color: "bg-gradient-to-r from-white to-red-50"
  },
  {
    id: 3,
    type: "Corporate Training",
    title: "Enterprise Workshops",
    location: "Nationwide",
    participants: "200+ Companies",
    duration: "Monthly",
    icon: "💼",
    description: "Customized training programs for corporate clients on emerging technologies.",
    impact: "Trained 2000+ professionals across industries",
    color: "bg-gradient-to-r from-red-50 to-white"
  },
  {
    id: 4,
    type: "Tech Talks",
    title: "Innovation Series",
    location: "Online & On-site",
    participants: "10,000+ Viewers",
    duration: "Quarterly",
    icon: "🎤",
    description: "Live tech talks and webinars featuring industry experts and thought leaders.",
    impact: "10,000+ professionals reached through sessions",
    color: "bg-gradient-to-r from-white to-red-50"
  }
];

export default function EventsEngagements() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-red-50/20 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-100/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-200/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-full px-6 py-3 mb-6 border border-red-500/20">
            <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-red-700">Events & Engagements</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Shaping Pakistan's</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">Digital Future</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Driving innovation through industry events, community engagements, and strategic partnerships across Pakistan.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { number: "50+", label: "Events Organized" },
              { number: "10,000+", label: "Participants" },
              { number: "100+", label: "Partners" },
              { number: "25+", label: "Cities Covered" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">
              <span className="text-red-600">Featured</span> Events
            </h3>
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              View All Events
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.slice(0, 2).map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                      event.status === 'upcoming' 
                        ? 'bg-red-100 text-red-700 border border-red-200' 
                        : event.status === 'ongoing'
                        ? 'bg-amber-100 text-amber-700 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                    }`}>
                      {event.status === 'upcoming' ? 'Upcoming' : event.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                    </span>
                  </div>

                  {/* Event Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-4 left-6 z-20">
                      <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-red-700">
                        <Calendar className="h-4 w-4" />
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6 md:p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                      {event.title}
                    </h4>

                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Date</div>
                          <div className="font-semibold text-gray-900">{event.date}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Venue</div>
                          <div className="font-semibold text-gray-900">{event.venue}</div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-gray-400" />
                          <span className="text-sm font-medium text-gray-600">{event.attendees} Attendees</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-gray-400" />
                          <span className="text-sm font-medium text-gray-600">{event.time}</span>
                        </div>
                      </div>

                      <Link
                        href={event.registerLink}
                        className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-200"
                      >
                        {event.status === 'completed' ? 'View Details' : 'Register Now'}
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Engagements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Community <span className="text-red-600">Engagements</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building strong connections with communities, universities, and industry partners across Pakistan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((engagement) => (
              <motion.div
                key={engagement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${engagement.color} rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{engagement.icon}</div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                    {engagement.type}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4">{engagement.title}</h4>
                <p className="text-gray-600 mb-6">{engagement.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700 font-medium">{engagement.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700 font-medium">{engagement.participants}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Impact</div>
                  <div className="text-red-700 font-semibold">{engagement.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Next Event
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Be part of Pakistan's largest technology community. Network, learn, and grow with industry leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/events"
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Browse All Events
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Host an Event
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}