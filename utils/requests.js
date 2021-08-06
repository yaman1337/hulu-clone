const { API_KEY } = process.env;

export default {
    fetchTrending: {
        title:"Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: ""
    },
    fetchAction: {
        title: "Action",
        url: ""
    },
    fetchComedy: {
        title: "Comedy",
        url: ""
    },
    fetchHorror: {
        title: "Horror",
        url: ""
    },
    fetchRomance: {
        title: "Romance",
        url: ""
    },
    fetchMystery: {
        title: "Mystery",
        url: ""
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: ""
    },
    fetchWestern: {
        title: "Western",
        url: ""
    },
    fetchAnimation: {
        title: "Animation",
        url: ""
    },
    fetchTvMovie: {
        title: "Tv Movie",
        url: ""
    }
}
