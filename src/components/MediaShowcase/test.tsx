import { render, screen } from '@testing-library/react'

import MediaShowcase from '.'
import { SelectorOptionType } from '../Selector/index'

describe('<MediaShowcase />', () => {
  it('should render the title', () => {
    const title = 'Trending'
    const tabs: SelectorOptionType[] = [
      {
        title: 'Movies',
        slug: 'movies',
        urlToGet: '/api/movies'
      },
      {
        title: 'TV Shows',
        slug: 'tv-shows',
        urlToGet: '/api/tv-shows'
      }
    ]

    render(<MediaShowcase title={title} selectorOptions={tabs} />)

    expect(screen.getByText(/trending/i)).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
