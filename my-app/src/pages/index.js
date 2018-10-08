import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>This is Beth's experimental React Page</h1>
        <p>Created using Gatsby, as part of the designcode.io course</p>
        <p><Link to="/page-2/">Go to page 2</Link></p>
      </div>
    </div>

  </div>
)

export default IndexPage
