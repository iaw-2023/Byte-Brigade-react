const URL = `${process.env.API_SERVER_URL}/rest`;

const requests = {
    articles: {
        index: `${URL}/articles`,
        fullArticle: (id) => `${URL}/articles/${id}`,
        like: (id) => `${URL}/articles/${id}/like`
    },
    editorials: {
        all: `${URL}/editorials`,
        latest: `${URL}/editorials/latest`
    },
    comments: (id) => `${URL}/articles/${id}/comments`,
    topics: `${URL}/topics`
};

export default requests;