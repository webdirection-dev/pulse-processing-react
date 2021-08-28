const milk = '9C%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE',
    medicine = '9B%D0%B5%D0%BA%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B0',
    lp = '9B%D0%B5%D0%B3.%D0%BF%D1%80%D0%BE%D0%BC.',
    shoes = '9E%D0%B1%D1%83%D0%B2%D1%8C',
    perfume = '9F%D0%B0%D1%80%D1%84%D1%8E%D0%BC',
    tobacco = 'A2%D0%B0%D0%B1%D0%B0%D0%BA',
    photo = 'A4%D0%BE%D1%82%D0%BE',
    tires = 'A8%D0%B8%D0%BD%D1%8B';

class PulseService {
    constructor() {
        this._url = 'https://xn--80ajghhoc2aj1c8b.xn--p1ai/ajax/pulseProcessingTime.php?category=%D0%';
    }

    async getResource(category) {
        const response = await fetch(`${this._url}${category}`);

        if (!response.ok) throw new Error(`Could not fetch ${this._url} or ${category}, status: ${response.status}`);

        return await response.json();
    }
}

const getTest = new PulseService();

getTest.getResource(milk)
    .then(response => {
        response.forEach(item => console.log(item.UF_LESS10MIN));
    })
    .catch(error => console.error(error));