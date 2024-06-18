'use server';

import requests from "./requests";
import { unstable_noStore as noStore } from "next/cache";
import axios from "axios";
import { getAccessToken } from "@auth0/nextjs-auth0";

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
    } catch (error) {
        return { articles: [], totalPages: 1, totalArticles: 0 };
    }
};

export async function fetchEditorial() {
    try {
        const response = await axios.get(requests.editorial);
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function fetchTopics() {
    try {
        const response = await axios.get(requests.topics);
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function fetchArticleById(articleID) {
    try {
        const response = await axios.get(requests.articles.fullArticle(articleID));
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function fetchComments(articleId) {
    noStore();
    try {
        const response = await axios.get(requests.comments(articleId));
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function fetchUsdExchange(currency) {
    noStore();
    try {
        const response = await axios.get(requests.usdExchange);
        const currencyExchange = response.data.usd[currency];
        const truncatedExchange = Math.floor(currencyExchange * 100) / 100;
        return truncatedExchange;
    } catch (error) {
        return 0;
    }
}

export async function postComment(articleId, formData) {
    try {
        const { accessToken } = await getAccessToken();
        await axios.post(requests.comments(articleId), formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    } catch (error) {
        throw new Error(`Failed to post comment for article ${articleId}.`);
    }
}