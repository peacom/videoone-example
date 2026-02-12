// Copyright (c) 2025 BytePlus Pte. Ltd.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.less';
import flexible from '@/utils/flexible.ts';
import VePlayer from '@byteplus/veplayer';

flexible(window, document);

window.sessionStorage.setItem('user_id', String(Math.floor(10000 + Math.random() * 90000)));

VePlayer.setLicenseConfig({
  license: {
    sign: 'E3BZrR75jnGHYasC5XjaSKbrz6sGBpeRLWBppK7LOpWRv3buqU6YqpXOLIn4teyO84tLXQGLNebHiN7UuARgkIjSKywFozFOrHCgip7IVYhfEy2oUYZf03sokfQs2T9+u4mHoj2r8x1fyiibBGxDohNwF2TOxMufaJ5/mMyeLEKXG82QI9FFg8l9IeSkvOYYRRL3jwfu3iAQ6BzTkANboCCG0GgBCr6UpXmg3QkggiZGVgO6nqU8tXBl33rtdIe6EIuxMPdUGpWBYi6BlYx4OK2ePlVyTYnHm9yFE3GuSMWKaAlCXhkO+eSe6yLtAdxeYx58gEr0EF60+lLNEwDN+g==',
    content:
      'eyJJZCI6IjEwMzAxMzk5MjEiLCAiVmVyc2lvbiI6MiwgIkNoYW5uZWwiOiJ2b2QiLCAiVHlwZSI6MiwgIk1vZHVsZXMiOlt7Ik5hbWUiOiJ3ZWJfdm9kX3BsYXkiLCAiRWRpdGlvbiI6InByZW1pdW1fZWRpdGlvbiIsICJTdGFydFRpbWUiOjE3NzA4ODI2NTYwMDAsICJFeHBpcmVUaW1lIjoxODMzOTgzOTk5MDAwfV0sICJGaWxlVmVyc2lvbiI6IjE3NzA4ODI2Nzc1MTc0NjQzNTMiLCAiV2lsZGNhcmREb21haW4iOiIqLmJ5dGVwbHVzLmNvbSJ9',
    mainUrl: 'https://sf16-vod-license-multi.byteplusvod.com/obj/vod-license-sgcom/l-1030139921-ch-vod-a-935861.lic',
  },
});

VePlayer.prepare({
  appId: 597335, // Obtain from the video-on-demand console - VOD SDK - Application Management. Create one if not available.
  strategies: {
    preload: {
      preloadTime: 10,
    },
    adaptRange: true,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
