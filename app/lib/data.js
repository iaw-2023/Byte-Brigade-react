import requests from "./requests";
import { unstable_noStore as noStore } from "next/cache";
import axios from "axios";

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
    return { 
        articles: response.data.data, 
        totalPages: response.data.meta.last_page,
        totalArticles: response.data.meta.total
     }
    } catch(e) {
        throw new Error("Failed to fetch articles.");
    }
};

export async function fetchTopics () {
    try {
        const response = await fetch(requests.topics);
        const responseJson = await response.json();
        return responseJson.data;
    } catch (error) {
        throw new Error("Failed to retrieve topics.");
    }
}

export async function fetchArticleById(articleID) {
    try {
        const response = await axios.get(requests.articles.fullArticle(articleID));
        return response.data.data;
    } catch (error) {
        throw new Error(`Failed to retrieve article ${articleId}.`);
    }
}

export async function fetchComments(articleId) {
    noStore();
    try {
        const response = await axios.get(requests.comments(articleId));
        return response.data.data;
    } catch (error) {
        return {error: `Se produjo un error al intentar obtener los comentarios para el artículo con ID ${articleId}.`};
    }
}

export async function postComment(articleId, formData) {
    try {

    } catch {

    }
}