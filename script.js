async function shortenUrl(longUrl) {
    const accessToken = ' 846d916fc0ac6dc8be4f4035aa4645297929097d'; 
    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                long_url: longUrl
            })
        });

        if (response.ok) {
            const result = await response.json();
            return result.link; 
        } else {
            throw new Error('Failed to shorten URL');
        }
    } catch (error) {
        console.error('Error shortening URL:', error.message);
        return null;
    }
}

const longUrl = 'https://example.com/very/long/url/to/be/shortened';
shortenUrl(longUrl)
    .then(shortUrl => {
        console.log('Shortened URL:', shortUrl);
    })
    .catch(err => {
        console.error('Error:', err);
    });
