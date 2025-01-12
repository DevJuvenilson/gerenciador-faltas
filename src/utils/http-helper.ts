import { HttpResponse } from "../models/http-response-model";

// Informational responses (1xx)
export const continueResponse = async (): Promise<HttpResponse> => ({
    statusCode: 100,
    body: null,
    message: "Continue"
});

//////////////////////////////////////////////////////////////////////////////////////////

// Successful responses (2xx)
export const ok = async (data: any): Promise<HttpResponse> => ({
    statusCode: 200,
    body: data,
    message: "OK"
});

export const created = async (data: any): Promise<HttpResponse> => ({
    statusCode: 201,
    body: data,
    message: "Resource successfully created"
});

export const accepted = async (data: any): Promise<HttpResponse> => ({
    statusCode: 202,
    body: data,
    message: "Request accepted for processing"
});

export const noContent = async (): Promise<HttpResponse> => ({
    statusCode: 204,
    body: null,
    message: "No content"
});

//////////////////////////////////////////////////////////////////////////////////////////

// Redirection messages (3xx)
export const movedPermanently = async (location: string): Promise<HttpResponse> => ({
    statusCode: 301,
    body: null,
    message: `Resource moved permanently to ${location}`
});

export const found = async (location: string): Promise<HttpResponse> => ({
    statusCode: 302,
    body: null,
    message: `Resource found at ${location}`
});

//////////////////////////////////////////////////////////////////////////////////////////

// Client error responses (4xx)
export const badRequest = async (error: any): Promise<HttpResponse> => ({
    statusCode: 400,
    body: error,
    message: "Bad request"
});

export const unauthorized = async (error: any): Promise<HttpResponse> => ({
    statusCode: 401,
    body: error,
    message: "Unauthorized"
});

export const forbidden = async (error: any): Promise<HttpResponse> => ({
    statusCode: 403,
    body: error,
    message: "Forbidden"
});

export const notFound = async (error: any): Promise<HttpResponse> => ({
    statusCode: 404,
    body: error,
    message: "Not found"
});

//////////////////////////////////////////////////////////////////////////////////////////

// Server error responses (5xx)
export const internalServerError = async (error: any): Promise<HttpResponse> => ({
    statusCode: 500,
    body: error,
    message: "Internal server error"
});

export const notImplemented = async (): Promise<HttpResponse> => ({
    statusCode: 501,
    body: null,
    message: "Not implemented"
});

export const serviceUnavailable = async (error: any): Promise<HttpResponse> => ({
    statusCode: 503,
    body: error,
    message: "Service unavailable"
});