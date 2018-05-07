// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });

  const centerPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  centerPanel.setAngle(0, 0);
  const leftPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);
  const rightPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);
  r360.renderToSurface(r360.createRoot("AppLaunchers", {}), centerPanel);
  r360.renderToSurface(r360.createRoot("Schedule"), leftPanel);
  r360.renderToSurface(r360.createRoot("Notifications"), rightPanel);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
}

window.React360 = { init };
