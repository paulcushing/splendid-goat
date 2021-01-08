import React from 'react';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { sourcebitDataClient } from 'sourcebit-target-next';

/**
 * In next.js we can't use `src/pages/[...slug].js` for root site page `/`.
 * Instead, we import and export the [...slug].js while overriding its getStaticProps.
 */

import Page from './[...slug]';


export async function getStaticProps({ params }) {
    if(process.browser) {
        Sentry.init({
            dsn: "https://9993f0d959b349339718a3e7dcb85218@o501587.ingest.sentry.io/5582906",
            autoSessionTracking: true,
            integrations: [
            new Integrations.BrowserTracing(),
            ],
        
            // We recommend adjusting this value in production, or using tracesSampler
            // for finer control
            tracesSampleRate: 1.0,
        });
    }
    console.log('Page [index] getStaticProps, params: ', params);
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('/');
    return { props };
}

export default Page;
