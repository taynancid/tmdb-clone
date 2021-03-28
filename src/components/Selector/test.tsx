import { render, screen, fireEvent } from '@testing-library/react'

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
    const movieSelector = screen.getByRole('heading', {
      name: /movies/i
    })

    const tvShowsSelector = screen.getByRole('heading', {
      name: /tv shows/i
    })

    fireEvent.click(tvShowsSelector)
    expect(setSelectedOption).toHaveBeenCalled()
    fireEvent.click(movieSelector)
    expect(setSelectedOption).toHaveBeenCalled()
  })
})
