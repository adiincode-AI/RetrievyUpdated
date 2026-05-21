import { ShieldCheck, Search, Users } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-3xl">

          <span className="inline-block bg-blue-100 text-[#2563EB] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            About Retrievy
          </span>

          <h1 className="text-6xl font-black text-[#0F172A] leading-tight mb-8">
            Modern Lost & Found
            <br />
            Built for Real People.
          </h1>

          <p className="text-xl text-[#475569] leading-relaxed">
            Retrievy helps people report, discover, and reconnect
            with lost belongings through a clean, modern, and
            reliable platform experience.
          </p>

        </div>

      </section>

      {/* MISSION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="card p-10">

          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
            Our Mission
          </h2>

          <p className="text-[#475569] text-lg leading-relaxed max-w-4xl">
            Losing important belongings creates stress, confusion,
            and wasted time. Traditional lost & found systems are often
            unorganized and difficult to access.

            Retrievy was created to simplify this process using a modern
            digital platform where users can quickly report lost items,
            browse found items, and improve the chances of successful recovery.
          </p>

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="card card-hover p-8">

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
              <Search className="text-[#2563EB]" size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Smart Search
            </h3>

            <p className="text-[#475569] leading-relaxed">
              Easily browse and filter lost or found items
              using a clean and searchable interface.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="card card-hover p-8">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <ShieldCheck className="text-green-600" size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Reliable Platform
            </h3>

            <p className="text-[#475569] leading-relaxed">
              Designed with simplicity, trust, and accessibility
              in mind for everyday users.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="card card-hover p-8">

            <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
              <Users className="text-[#14B8A6]" size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Community Driven
            </h3>

            <p className="text-[#475569] leading-relaxed">
              Helping people reconnect with their belongings
              through collective support and visibility.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-[#2563EB] rounded-[32px] p-12 text-center">

          <h2 className="text-4xl font-black text-white mb-6">
            Start Using Retrievy Today
          </h2>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Report lost items, discover found belongings,
            and make recovery simpler with a modern platform.
          </p>

          <div className="flex justify-center gap-4">

            <a
              href="/report"
              className="bg-white text-[#2563EB] px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 transition"
            >
              Report Item
            </a>

            <a
              href="/browse"
              className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#2563EB] transition"
            >
              Browse Items
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;