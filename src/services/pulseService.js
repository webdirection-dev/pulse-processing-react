import React from "react";

export default class PulseService extends React.Component {
    constructor(props) {
        super(props)
        this._url = 'https://xn--80ajghhoc2aj1c8b.xn--p1ai/ajax/pulseProcessingTime.php?category=%D0%';
    }

    async getResource(category) {
        const response = await fetch(`${this._url}${category}`);

        if (!response.ok) throw new Error(`Could not fetch ${this._url} or ${category}, status: ${response.status}`);

        const result = await response.json();
        return result.map(item => this._transformData(item));
    }

    _transformData(data) {
        return {
            id: data.ID,
            name: this.props,
            time: data.UF_DATE,
            data: data.UF_ALLDOC
        }
    }
}