'use client'

import {useReportWebVitals} from "next/web-vitals";

export const Webvitals = () => {
    useReportWebVitals((metric) => {
        console.log("metric", metric);
    });
}