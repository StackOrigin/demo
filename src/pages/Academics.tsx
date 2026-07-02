import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, FlaskConical, Music, Dumbbell } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollAnimation';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import AcademicJourney from '../components/academics/AcademicJourney';

export default function Academics() {
  useScrollToTop();

  return (
    <main>
      <PageHero
        title="Academic Programs"
        subtitle="A comprehensive curriculum designed to nurture curious minds, develop critical thinkers, and prepare students for the challenges of tomorrow."
        breadcrumb="Academics"
      />

      <AcademicJourney />

      {/* Facilities */}
      <section className="py-20 md:py-28 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Facilities"
            title="State-of-the-Art Learning Spaces"
            subtitle="Our campus is equipped with modern facilities designed to enhance learning and personal growth."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Monitor className="w-6 h-6" />, title: "Smart Classrooms", desc: "Projectors, digital boards, and interactive learning tools in every classroom." },
              { icon: <FlaskConical className="w-6 h-6" />, title: "Science Labs", desc: "Fully equipped physics, chemistry, and biology laboratories." },
              { icon: <Music className="w-6 h-6" />, title: "Arts & Music Room", desc: "Dedicated spaces for creative expression, music, and visual arts." },
              { icon: <Dumbbell className="w-6 h-6" />, title: "Sports Grounds", desc: "Football field, basketball court, and indoor game facilities." },
            ].map((item, i) => (
              <Reveal key={i} variant="scale" delay={i * 80}>
                <div className="tactile bg-white rounded-2xl p-6 shadow-sm border border-navy-100/50 hover:shadow-lg transition-all duration-300 text-center h-full group">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal variant="scale">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Find the Right Program <span className="text-gold-400">for Your Child</span>
            </h2>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-10">
              Not sure which program suits your child best? Schedule a visit and let our counselors guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admission">
                <Button variant="secondary" size="lg">Apply Now <ArrowRight className="w-4 h-4" /></Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                  Schedule a Visit <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
