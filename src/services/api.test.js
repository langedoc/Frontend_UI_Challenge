import * as ApiClient from "./api";

global.fetch = jest.fn();

describe('API Service', () => {
    beforeEach(() => {
        fetch.mockClear();
    })

    afterEach(() => {
        jest.resetAllMocks();
    });

    const mockJsonPromise = Promise.resolve({results: []});
    const mockFetchPromise = Promise.resolve({
        ok: true,
        json: () => mockJsonPromise,
    });

    it('should fetch popular movies', async () => {
        
        fetch.mockImplementation(() => mockFetchPromise);

        const result = await ApiClient.getPopularMovies();
        
        expect(result).toEqual({results: []});
        expect(fetch).toHaveBeenCalledWith(`${ApiClient.BASE_URL}/popular?${ApiClient.apiKey}`);
        
        await mockJsonPromise;
    });

    it('should fetch upcoming movies', async () => {
        fetch.mockImplementation(() => mockFetchPromise);

        const result = await ApiClient.getUpcomingMovies();

        expect(result).toEqual({results: []});
        expect(fetch).toHaveBeenCalledWith(`${ApiClient.BASE_URL}/upcoming?${ApiClient.apiKey}`);

        await mockJsonPromise;
    })

    it('should fetch top rated movies', async () => {
        fetch.mockImplementation(() => mockFetchPromise);

        const result = await ApiClient.getTopRatedMovies();

        expect(result).toEqual({results: []});
        expect(fetch).toHaveBeenCalledWith(`${ApiClient.BASE_URL}/top_rated?${ApiClient.apiKey}`);

        await mockJsonPromise;
    })
});
