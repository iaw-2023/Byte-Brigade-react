const URL = `${process.env.API_SERVER_URL}/rest`;

const requests = {
    articles: {
        index: `${URL}/articles`,
        fullArticle: (id) => `${URL}/articles/${id}`,
        like: (id) => `${URL}/articles/${id}/like`
    },
    editorial: `${URL}/editorial`,
    comments: (id) => `${URL}/articles/${id}/comments`,
    topics: `${URL}/topics`,

    usdExchange: "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
};

export default requests;