import { mocked } from "ts-jest/dist/util/testing";
import fetch from "cross-fetch";

const { Response } = jest.requireActual("cross-fetch");

/**
 * Implement a mocked fetch response. Just use fetchMock(dataToReturn)
 * @param data the data for the request to return
 * @param status status code to return or nothing for 200
 */
export const mockFetch = (data: any, status?: number) => {
    mocked(fetch).mockImplementation(
        () =>
            new Promise((resolve, reject) =>
                resolve(
                    new Response(JSON.stringify(data), {
                        status: status ? status : 200,
                    })
                )
            )
    );
};
