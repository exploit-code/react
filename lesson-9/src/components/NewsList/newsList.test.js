import NewsList from './NewsList'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

const news = [
    {
        apiUrl: "https://content.guardianapis.com/business/live/2021/aug/16/british-manufacturer-ultra-electronics-private-equity-meggitt-cobham-ftse-100-business-live",
        id: "business/live/2021/aug/16/british-manufacturer-ultra-electronics-private-equity-meggitt-cobham-ftse-100-business-live",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
        sectionId: "business",
        sectionName: "Business",
        type: "liveblog",
        webPublicationDate: "2021-08-16T07:06:10Z",
        webTitle: "Cobham agrees Ultra deal and Meggitt nears takeover in British aerospace sell-off – business live",
        webUrl: "https://www.theguardian.com/business/live/2021/aug/16/,british-manufacturer-ultra-electronics-private-equity-meggitt-cobham-ftse-100-business-live"
    },
    {
        apiUrl: "https://content.guardianapis.com/world/live/2021/aug/16/coronavirus-live-news-japan-set-to-extend-state-of-emergency-as-sydney-records-deadliest-pandemic-day",
        id: "world/live/2021/aug/16/coronavirus-live-news-japan-set-to-extend-state-of-emergency-as-sydney-records-deadliest-pandemic-day",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
        sectionId: "world",
        sectionName: "World news",
        type: "liveblog",
        webPublicationDate: "2021-08-16T07:05:31Z",
        webTitle: "Coronavirus live news: Japan set to extend state of emergency as Sydney records deadliest pandemic day ",
        webUrl: "https://www.theguardian.com/world/live/2021/aug/16/coronavirus-live-news-japan-set-to-extend-state-of-emergency-as-sydney-records-deadliest-pandemic-day"
    }
]

describe('News List test', () => {

    it('matches snapshot online', () => {
        const component = render(<NewsList news={news} />);
        expect(component).toMatchSnapshot();
    })

    it("search for text on the page 'Coronavirus live news'", () => {
        render(<NewsList news={news} />)

        const wrapper = screen.getByText(/Coronavirus live news/i)

        expect(wrapper).toBeInTheDocument()
    })

    it("search for text on the page 'Cobham agrees Ultra deal'", () => {
        render(<NewsList news={news} />)

        const wrapper = screen.getByText(/Cobham agrees Ultra deal/i)

        expect(wrapper).toBeInTheDocument()
    })

})