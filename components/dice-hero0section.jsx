"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import { Calendar, MapPin, Users } from 'lucide-react';

export const DicedHeroSection = ({
  topText,
  mainText,
  subMainText,
  buttonText,
  slides,
  onMainButtonClick,
  onGridImageHover,
  onGridImageClick,
  topTextStyle,
  mainTextStyle,
  subMainTextStyle,
  buttonStyle = {},
  componentBorderRadius = '0px',
  backgroundColor,
  separatorColor = '#005baa',
  maxContentWidth = '1536px',
  mobileBreakpoint = 1000,
  fontFamily = 'inherit',
  isRTL = false,
  conferenceDate,
  conferenceVenue,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const isRTLCheck = (text) =>
    /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);

  useEffect(() => {
    const checkMobile = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < mobileBreakpoint);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const getGradientStyle = (gradient) => {
    if (gradient) {
      return {
        backgroundImage: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    }
    return {};
  };

  return (
    <main
      ref={containerRef}
      className={`
        p-8 overflow-hidden w-full mx-auto relative
        flex ${isMobile ? 'flex-col' : isRTL ? 'flex-row-reverse' : 'flex-row'}
        justify-center items-stretch
      `}
      style={{ borderRadius: componentBorderRadius, backgroundColor, maxWidth: maxContentWidth, fontFamily }}
    >
      {/* ── Left column ── */}
      <div
        className={`
          flex-1 flex flex-col justify-center z-10
          ${isMobile ? 'text-center items-center pb-8' : isRTL ? 'text-right items-end' : 'text-left items-start'}
          ${isMobile ? 'max-w-full' : 'max-w-[50%]'}
          ${isMobile ? '' : isRTL ? 'ml-8' : 'mr-8'}
        `}
      >
        {/* Top text */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            ...topTextStyle,
            ...getGradientStyle(topTextStyle?.gradient),
            direction: isRTLCheck(topText) ? 'rtl' : 'ltr',
            textAlign: isRTLCheck(topText) ? 'right' : 'left',
          }}
        >
          {topText}
        </motion.span>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            ...mainTextStyle,
            direction: isRTLCheck(mainText) ? 'rtl' : 'ltr',
            textAlign: isMobile ? 'center' : isRTLCheck(mainText) ? 'right' : 'left',
            fontSize: mainTextStyle?.fontSize,
          }}
        >
          <motion.span style={{ ...getGradientStyle(mainTextStyle?.gradient), display: 'inline-block' }}>
            {mainText}
          </motion.span>
        </motion.h1>

        {/* Separator */}
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: '6.25rem' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`h-1 border-none ${isMobile ? 'mx-auto my-5' : isRTLCheck(mainText) ? 'mr-0 ml-auto my-5' : 'ml-0 mr-auto my-5'}`}
          style={{ background: separatorColor }}
        />

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            ...subMainTextStyle,
            ...getGradientStyle(subMainTextStyle?.gradient),
            direction: isRTLCheck(subMainText) ? 'rtl' : 'ltr',
            textAlign: isRTLCheck(subMainText) ? 'right' : 'left',
          }}
        >
          {subMainText}
        </motion.p>

        {/* Logos */}
        <div className="grid md:grid-cols-3 grid-cols-1 items-start sm:items-center justify-center gap-3 px-4 backdrop-blur-sm bg-gray-50/70 py-4 rounded-3xl">
          <img src="/assets/scopus.png" alt="" className="h-12 drop-shadow-lg" />
          <img src="/assets/clarivate.png" alt="" className="h-12 drop-shadow-lg" />
          <img src="assets/zepresearch.png" alt="" className="h-12 drop-shadow-lg" />
        </div>

        {/* ── Conference Date & Venue Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 w-full rounded-xl overflow-hidden border border-[#185FA5]"
        >
          {/* Header bar */}
          <div className="bg-[#185FA5] px-5 py-2.5 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#B5D4F4]" />
            <span className="text-[#E6F1FB] text-xs font-medium tracking-widest uppercase">
              Event Details
            </span>
          </div>

          {/* Content grid */}
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-[1fr_1px_1fr]'} px-5 py-6 bg-white`}>
            {/* Date */}
            <div className={`flex flex-col items-center text-center ${isMobile ? 'pb-6' : 'pr-6'}`}>
              <div className="w-11 h-11 rounded-full bg-[#E6F1FB] flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 text-[#185FA5]" />
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-1">
                Conference Date
              </p>
              <p className="text-lg font-semibold text-gray-900 leading-snug">
                {conferenceDate || '4th – 5th November, 2026'}
              </p>
            </div>

            {/* Divider */}
            {!isMobile && <div className="bg-gray-200" />}

            {/* Venue */}
            <div className={`flex flex-col items-center text-center ${isMobile ? '' : 'pl-6'}`}>
              <div className="w-11 h-11 rounded-full bg-[#E6F1FB] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[#185FA5]" />
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-1">
                Conference Venue
              </p>
              <p className="text-lg font-semibold text-gray-900 leading-snug">
                {conferenceVenue || 'Tokyo, Japan'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`mt-4 flex ${isMobile ? 'justify-center' : isRTL ? 'justify-end' : 'justify-start'}`}
        >
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/registration">
              <Button size="lg" className="inline-flex gap-2 hover:text-primary hover:bg-white/90">
                <Users className="h-4 w-4" />
                Register Now
              </Button>
            </Link>
            <Link href="/submission">
              <Button
                variant="outline"
                size="lg"
                className="inline-flex gap-2 text-blue-600 border-blue-400 bg-white/20 hover:bg-white/40 bg-transparent"
              >
                Submit Your Paper
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* ── Early Bird Banner ── */}
        <motion.div
          className="mt-4 relative max-w-xl overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 p-1 shadow-lg"
          variants={itemVariants}
          animate={{
            boxShadow: [
              "0 0 20px rgba(251, 191, 36, 0.5)",
              "0 0 30px rgba(251, 191, 36, 0.8)",
              "0 0 20px rgba(251, 191, 36, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="bg-white rounded-xl p-4 relative">
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
              LIMITED
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🔥</span>
                  <h3 className="text-lg font-bold text-gray-900">Early Bird Discount Active!</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Save up to <span className="font-bold text-orange-600">20%</span> on registration
                </p>
              </div>
              <Link href="/registration">
                <Button className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                  Claim Now →
                </Button>
              </Link>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Offer expires soon • Limited spots available</span>
            </div>
          </div>
        </motion.div>

        {/* ── CPD Accredited Card ── */}
     
      </div>

      {/* ── Right column — image grid ── */}
      <div
        className={`
          flex-1 flex flex-col relative
          ${isMobile ? 'w-full' : 'w-[50%]'}
          ${isMobile ? '' : isRTL ? 'items-start pr-8' : 'items-end pl-8'}
        `}
      >
        <div className="grid grid-cols-2 gap-5 w-full aspect-square">
          {[slides[3], slides[2], slides[1], slides[0]].map((slide, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-[20px]"
              style={{ paddingBottom: '100%' }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`warped-image absolute inset-0 w-full h-full object-cover cursor-pointer ${['bottom-right', 'bottom-left', 'top-right', 'top-left'][index]}`}
                onClick={() => onGridImageClick && onGridImageClick(index)}
                onMouseEnter={() => onGridImageHover && onGridImageHover(index)}
              />
            </div>
          ))}
        </div>

   <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 w-full  bg-white rounded-xl border-2 border-[#005baa] p-6"
        >
          <div className="flex flex-row items-center justify-center">
            <img src="/assets/cpd.png" alt="CPD Logo" className="w-32 mb-2" />
            <h3 className="text-[#005baa] text-xl font-bold m-0">
              CPD ACCREDITED EVENT
            </h3>
          </div>
          <ul className="list-none p-0 my-4 text-[0.95rem] text-gray-900 leading-relaxed" />
          <Link href="https://www.cpdstandards.com/become-accredited/events-conferences/" className="w-full">
            <Button size="sm" className="w-full mt-4 bg-[#005baa] text-white hover:bg-[#004a8c]">
              Learn More
            </Button>
          </Link>
        </motion.div>


      </div>

      <style jsx>{`
        .warped-image {
          --r: 20px; --s: 40px; --x: 25px; --y: 5px;
        }
        .top-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at calc(100% - var(--r)) var(--r),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 0 var(--_m), 100% calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 100% 0,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .top-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at var(--r) var(--r),#000 75%,#0000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 0 var(--_m), 0 calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 0 0,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 180deg at var(--r) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 100% var(--_m), 0 calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 0 100%,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 100% var(--_m), 100% calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
      `}</style>
    </main>
  );
};