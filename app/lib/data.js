import requests from "./requests";
import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchArticles(page = 1, author = null, topic = null) {
    noStore();
    let url = `${requests.articles.index}?page=${page}`;

    if (author) {
        url = `${url}&author=${author}`;
    }
    if (topic) {
        url = `${url}&topic=${topic}`;
    }

    try {
        const response = await axios.get(url);
        const articles = response.data.data;
        const totalPages = response.data.meta.last_page;
        const totalArticles = response.data.meta.total;
        return {articles, totalPages, totalArticles}
    } catch (error) {
        console.log(error);
    }
};

export async function fetchTopics () {
    noStore();
    try {
        const response = await axios.get(requests.topics);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchArticleById(articleID) {
    try {
        const response = await axios.get(requests.articles.fullArticle(articleID));
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchComments() {
    try {
        const response = await axios.get(requests.comments(articleId));
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}