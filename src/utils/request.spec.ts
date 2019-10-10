import request, { ResponseError } from './request';

describe('request', () => {
  const mockFetch = jest.fn();

  beforeEach(() => {
    window.fetch = mockFetch;
  });

  it('should get json', async () => {
    const res = new Response('{"hello":"world"}', {
      status: 200,
      headers: {
        'Content-type': 'application/json',
      },
    });
    mockFetch.mockReturnValue(Promise.resolve(res));

    const data = await request('http://example.com/api/examples');

    expect(data.hello).toBe('world');
  });

  it('should get null when status code is 204', async () => {
    const res = new Response('', {
      status: 204,
      headers: {
        'Content-type': 'application/json',
      },
    });
    mockFetch.mockReturnValue(Promise.resolve(res));

    const data = await request('http://example.com/api/examples');

    expect(data).toBeNull();
  });

  it('should get null when status code is 205', async () => {
    const res = new Response('', {
      status: 205,
      headers: {
        'Content-type': 'application/json',
      },
    });
    mockFetch.mockReturnValue(Promise.resolve(res));

    const data = await request('http://example.com/api/examples');

    expect(data).toBeNull();
  });

  it('should throw an ErrorResponse', async () => {
    const res = new Response('', {
      status: 400,
      headers: {
        'Content-type': 'application/json',
      },
    });
    mockFetch.mockReturnValue(Promise.resolve(res));

    await request('http://example.com/api/examples').catch(
      (err: ResponseError) => {
        expect(err.response.status).toBe(400);
      },
    );
  });
});
