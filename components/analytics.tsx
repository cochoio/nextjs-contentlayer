"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyD6fbX3TXCtAdZv9MwoH1ff-s4UOQZvwBM",
  authDomain: "tech-blog-97307.firebaseapp.com",
  projectId: "tech-blog-97307",
  storageBucket: "tech-blog-97307.appspot.com",
  messagingSenderId: "1053248746274",
  appId: "1:1053248746274:web:b8fd04faabca385a6eab7b",
  measurementId: "G-41FLK6D226",
};

let analytics: Analytics | null = null;

// Initialize Firebase
if (typeof window !== "undefined") {
  initializeApp(firebaseConfig);
  analytics = getAnalytics();
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!analytics) {
      return;
    }
    logEvent(analytics, "page_view", {
      page_location: window.location.href,
    });
  }, [pathname, searchParams.toString()]);
  return <VercelAnalytics />;
}
