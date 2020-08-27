// ------------------------ pipe ------------------------
// Traditional way, no composition
const activeProjectsDetails1 = projects => {
  const active = projects.filter(project => project.isActive)
  const detailsOnly = projects.map(project => pickProjectDetails(project))
  return orderBy(detailsOnly, ['updatedAt'])
}

// Composition
const activeProjectsDetails2 = projects => pipe(
  filter(isActive),
  map(pickProjectDetails)
  orderBy(['updatedAt']),
)(projects)
