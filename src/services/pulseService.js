import React from "react";

export default class PulseService extends React.Component {
    constructor() {
        super()
        this._url = 'https://xn--80ajghhoc2aj1c8b.xn--p1ai/ajax/pulseProcessingTime.php?category=%D0%';
    }

    async getResource(category) {
        const response = await fetch(`${this._url}${category}`);

        if (!response.ok) throw new Error(`Could not fetch ${this._url} or ${category}, status: ${response.status}`);

        return await response.json();
    }
}