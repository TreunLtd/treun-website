/*
  Which projects show under each capability.
  Matched on the project's `type` in projects.js.
*/

// Planning, subdivision and management-led work
export const isPmProject = (p) => /subdivision|ccc|conversion/i.test(p.type);

// Builds, civil works and fitouts Treun delivered
export const isConstructionProject = (p) =>
  /build|construction|earthworks|retaining|fitout|modular/i.test(p.type);
