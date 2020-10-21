import React, { Component } from 'react'
import { Collapse } from 'react-collapse'
import H2 from '../../components/h2/h2.component'
import './faq.scss'

class Section extends Component {
  state = {
    isOpened: false
  }

  toggleCollapse = () => {
    this.setState(({ isOpened }) => ({
      isOpened: !isOpened
    }))
  }

  render() {
    const { title, children } = this.props
    const { isOpened } = this.state
    return (
      <div className="collapse-container">
        <h3
          className={isOpened ? 'opened' : 'closed'}
          onClick={this.toggleCollapse}
        >
          {title}{' '}
        </h3>{' '}
        <Collapse isOpened={isOpened}> {children} </Collapse>{' '}
      </div>
    )
  }
}

const FAQ = () => (
  <div className="faq-wrapper">
    <H2> FAQ </H2>{' '}
    <div className="content panel light faq">
      <div className="inner">
        <Section title="What’s the big deal about money in politics?">
          <p>
            Simply put, politicians are supposed to represent the masses and the masses aren’t rich. At every level of government we’ve seen the havoc that can be wreaked by unfettered corporate money in campaigns. In the halls of Burbank city government, you can often see big-name real estate executives from Worthe Real Estate Group and Cusumano Real Estate Group, having private meetings with city planners. These close ties are paired with maximum financial contributions to campaigns of sitting council members and the campaigns of those who are being groomed by large corporate interests including the Burbank Chamber of Commerce. The most lucrative land purchases in recent years have involved this inner circle of known developers, like the sale of city property across from city hall to a private developer for $100. This has led to the construction of apartments that rent for $14,000 per month, further intensifying the housing crisis and forcing more of our neighbors to go unhoused in a city that doesn't even have a homeless shelter.
          </p>{' '}
        </Section>{' '}
        <Section title="Why are you picking on Paul Herman?">
          <p>
          Up front, there are what appears to be a pair of campaign finance law violations by Paul Herman's campaign for Burbank City Council.

Herman's original 460, <a href="https://ssl.netfile.com/static/agency/cob/index.html">available here</a>, shows three contributions on pages 8 and 9 that I would like to draw your attention to. Those are from:

- Petros Petrou, $500 - the legal maximum
- 241 Elmwood, LLC, $500
- MVP Properties and Management, $500

Herman is running on <a href="https://www.votepaulherman.com/press-releases">a platform that opposes rent control</a>. Petrou is a landlord, and these companies are residential properties.

According to the Secretary of State, these two companies are owned by Petros Petrou. See below screenshots, <a href="https://businesssearch.sos.ca.gov/CBS/Detail">verifiable here</a>.
</p>
<p>
Screenshot A from the Secretary of State Website - <a href="https://drive.google.com/file/d/1IUpVaX-_g9eu_GAQkksdiz4DlblLTsSS/preview">HERE</a>
</p>
<p>
Screenshot B from the Secretary of State Website - <a href="https://drive.google.com/file/d/1n5qpsONSGa4CoQbYVsO1Posvto9iJS-X/preview">HERE</a>
</p>
<p>
<a href="http://www.fppc.ca.gov/content/dam/fppc/NS-Documents/TAD/Campaign%20Manuals/Manual_2/Manual_2_Ch_3_Contributions.pdf">Page 5 of the FPPC manual</a> states that contributions from an individual and contributions from any businesses they own should be aggregated, meaning they would count as coming from the same person, and would count toward the same contribution limit.

I reported these violations to Burbank City Clerk Zizette Mullins. Clerk Mullins stated to me on the phone that there is also a local ordinance that would also require the contributions to be aggregated, meaning these contributions may have broken both state and local rules. She declined to say whether she intended to take any enforcement action.

The local ordinance can be seen here. - <a href="https://drive.google.com/file/d/1hxRqT4faiAZhkd8ahkA0GXMU5--7QQhd/preview">HERE</a>
</p>
<p>
And Here. - <a href="https://drive.google.com/file/d/16hNcQItSc9cmoy_9yIRqC1KVXW-nT5_F/preview">HERE</a>
</p>
<p>
Clerk Mullins does appear to have taken enforcement action on this issue. You can now see an attached revised 460 from Herman which removes the two corporate donations, and describes them this way:
</p>
<p>
Click here to view the revised 460. - <a href="https://drive.google.com/file/d/1nmXRBNwlSXgwpwcHMTXelAZIEfh3V8-Q/preview">HERE</a>
</p>
<p>
Herman also <a href="https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&view_all_page_id=635977550388676&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped">ran paid ads on Facebook against Measure RC</a>, the rent control measure on the ballot this November in Burbank. These ads should have been counted as in-kind contributions to the No on RC campaign, but did not appear on No on RC's campaign filings. This may be a violation of state level law; my layperson's understanding is that Herman's committee cannot advocate for something other than his election without it being considered an in-kind contribution.
</p>
<p>
Click here to view the public ads records screenshot from Facebook. - <a href="https://drive.google.com/file/d/1J1KFdUw4A02P2SD56B_FsJOXbsBIkHLE/preview">HERE</a>
</p>
<p>
The FPPC has opened an investigation into Herman's No on RC ads.

Let’s talk about developer contributions and why Konstantine doesn't accept them. In no way is he opposed to development by default, but believes that developers’ interests and Burbank residents’ interests are often at odds.

Unfortunately, this attitude is not shared by one of my fellow candidates.
</p>
<p>
<a href="https://public.netfile.com/Pub2/AllFilingsByCandidate.aspx?id=190927714&candidate=Herman%2c+Paul">The Republican candidate has raised about $34,000</a> - a few thousand more than the $31,000 I’ve raised. **However, a third of his funding comes from developers, landlords, and other corporations and interests that profit from rising housing costs.**
</p>
<p>
Here’s a list of his problematic contributions, which total $12,950:

- $2,500 from developers
- $1,000 from corporations that own apartments
- $1,250 from individual landlords
- $1,000 from property management executives
- $5,050 from realtors and real estate interests
- $400 from BizFed PAC
- $1,750 from those calling themselves “real estate investors,” “self-employed property managers,” or “retired” to avoid using “landlord” in a public disclosure

These contributions represent various interests. A landlord may give to a candidate because they oppose even the most modest renter protections. A developer might give, hoping he would favor plans to tear down housing and put up a new hotel.

**All these contributions directly oppose the obligation of a council member to serve the interests of the public – not profit.**

**Developer contributions should be forbidden in Burbank, as they are in LA.**

And we should move toward a public financing system so that groups and corporations which do not have the best interests of Burbankers at heart cannot buy our elections.
          </p>{' '}
        </Section>{' '}
        <Section title="Who made this site?">
          <p>
            We did! The Los Angeles chapter of the Democratic Socialists of
            America. We seek to create a system based on justice and equality
            for all people. We believe everyone deserves to live their own life
            with dignity. We work to equalize political and economic power,
            because true democracy cannot coexist with inequality. We urgently
            fight to stop the many crises facing our most powerless members of
            society. We are not a political party. We are a coalition of people,
            united to create a more powerful front against the worst that
            capitalism has to offer. If you are interested in learning more or
            pitching in, we could use your help. Los Angeles is a big city and
            we have lots of work to do.{' '}
          </p>{' '}
        </Section>{' '}
        <Section title="Where’d you get your information from?">
          <p>
            All the donations of the site are available through The Burbank City Board of Elections via documents,{' '}
            <a href="https://www.burbankca.gov/departments/city-clerk-s-office/elections/2020-candidates-information-informaci-n-para-el-candidatos" target="_blank" rel="noopener noreferrer">here</a>. The articles we
            reference are all linked to and publicly available via Google
            search.
          </p>{' '}
        </Section>{' '}
      </div>{' '}
    </div>{' '}
  </div>
)

export default FAQ
