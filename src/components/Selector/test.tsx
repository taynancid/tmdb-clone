import { render, screen } from '@testing-library/react'

import Selector from './index'

describe('<MediaShowcase />', () => {
  it('should render the options', () => {
    const options = [
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

    const selectedOption = {
      title: 'Movies',
      slug: 'movies',
      urlToGet: '/api/movies'
    }

    const setSelectedOption = jest.fn()

    render(
      <Selector
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    )

    screen.getByRole('heading', {
      name: /movies/i
    })

    screen.getByRole('heading', {
      name: /tv shows/i
    })
  })
})
