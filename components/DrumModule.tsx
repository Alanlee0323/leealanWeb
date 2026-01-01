import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, Activity, Users, Play, Calendar, Mic2 } from 'lucide-react';
import { drumVideos, gigLog, teachingServices } from '../data/drumming';

type Tab = 'signal' | 'logs' | 'protocol';

export const DrumModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('signal');

  return (
    <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto bg-bg-secondary/20 border-y border-border-subtle relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="w-2 h-8 bg-accent-secondary" />
            AUDIO-VISUAL SUBSYSTEM
          </h2>
          <p className="text-text-muted font-mono text-sm">
            // Identity Mode: Drummer / Percussionist
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mt-6 md:mt-0 p-1 bg-bg-primary border border-border-subtle rounded-lg">
          <button 
            onClick={() => setActiveTab('signal')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded transition-all ${activeTab === 'signal' ? 'bg-accent-secondary text-white shadow-[0_0_15px_rgba(121,40,202,0.4)]' : 'text-text-muted hover:text-white'}`}
          >
            <Play size={14} /> SIGNAL
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded transition-all ${activeTab === 'logs' ? 'bg-accent-secondary text-white shadow-[0_0_15px_rgba(121,40,202,0.4)]' : 'text-text-muted hover:text-white'}`}
          >
            <Calendar size={14} /> LOGS
          </button>
          <button 
            onClick={() => setActiveTab('protocol')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded transition-all ${activeTab === 'protocol' ? 'bg-accent-secondary text-white shadow-[0_0_15px_rgba(121,40,202,0.4)]' : 'text-text-muted hover:text-white'}`}
          >
            <Mic2 size={14} /> TEACHING
          </button>
        </div>
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode='wait'>
          
          {/* VIDEO TAB */}
          {activeTab === 'signal' && (
            <motion.div
              key="signal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {drumVideos.map((video) => (
                <div key={video.id} className="group border border-border-subtle bg-bg-primary rounded-lg overflow-hidden hover:border-accent-secondary/50 transition-colors">
                  <div className="relative aspect-video bg-black">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${video.videoId}`} 
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-accent-secondary uppercase border border-accent-secondary/30 px-2 py-0.5 rounded">
                        {video.category}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted flex items-center gap-1">
                        <Activity size={10} /> {video.views}
                      </span>
                    </div>
                    <h3 className="text-white font-medium line-clamp-1">{video.title}</h3>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* GIG LOGS TAB */}
          {activeTab === 'logs' && (
            <motion.div
              key="logs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border border-border-subtle rounded-lg overflow-hidden bg-bg-primary"
            >
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-border-subtle bg-bg-secondary/50 text-xs font-mono text-text-muted uppercase tracking-wider">
                <div className="col-span-3 md:col-span-2">Date</div>
                <div className="col-span-4 md:col-span-3">Artist</div>
                <div className="col-span-5 md:col-span-4">Venue</div>
                <div className="hidden md:block md:col-span-3">Role</div>
              </div>
              <div className="divide-y divide-border-subtle">
                {gigLog.map((gig) => (
                  <div key={gig.id} className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors items-center">
                    <div className="col-span-3 md:col-span-2 font-mono text-accent-secondary">{gig.date}</div>
                    <div className="col-span-4 md:col-span-3 font-bold text-white">{gig.artist}</div>
                    <div className="col-span-5 md:col-span-4 text-text-secondary">
                      {gig.venue} <span className="text-text-muted text-xs block md:inline md:ml-2">({gig.location})</span>
                    </div>
                    <div className="hidden md:block md:col-span-3 text-xs font-mono text-text-code">
                      [{gig.role}]
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TEACHING TAB */}
          {activeTab === 'protocol' && (
            <motion.div
              key="protocol"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {teachingServices.map((service) => (
                <div key={service.id} className="p-6 border border-border-subtle rounded-xl bg-gradient-to-br from-bg-primary to-bg-secondary hover:border-accent-secondary/50 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-accent-secondary/10 rounded-lg text-accent-secondary group-hover:bg-accent-secondary group-hover:text-white transition-colors">
                      <Headphones size={24} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-bg-secondary border border-border-subtle text-text-muted">
                      {service.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-text-muted text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full py-3 border border-border-subtle text-xs font-mono uppercase tracking-widest hover:bg-accent-secondary hover:text-white hover:border-accent-secondary transition-all">
                    Initiate Transfer
                  </button>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};