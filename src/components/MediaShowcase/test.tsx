import { render, screen } from '@testing-library/react'

import MediaShowcase from '.'
import { Tab } from './index'

describe('<MediaShowcase />', () => {
  it('should render the title', () => {
    const title = 'Trending'
    const tabs: Tab[] = [
      { title: 'movies', url: '/api/movies' },
      { title: 'tv shows', url: '/api/tv-shows' }
    ]
    const { container } = render(<MediaShowcase title={title} tabs={tabs} />)

    expect(screen.getByText(/trending/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
