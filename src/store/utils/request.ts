import 'whatwg-fetch';

export class ResponseError extends Error {
    public response: Response;

    constructor(response: Response) {
        super(`${response.status} - ${response.statusText}`);
        this.response = response;
    }
}

export default async (
    url: string,
): Promise<Response> => {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
        throw new ResponseError(response);
    }

    return data;
};
