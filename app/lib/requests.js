const URL = 'https://el-corchazo-admin.vercel.app/rest';

const requests = {
    articles: {
        index: `${URL}/articles`,
        fullArticle: (id) => `${URL}/articles/${id}`
    },
    comments: (id) => `${URL}/articles/${id}/comments`,
    topics: `${URL}/topics`
};

export default requests;