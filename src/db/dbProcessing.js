const PulseDb = (group) => {
    const url =  {
        milk: '9C%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE',
        medicine: '9B%D0%B5%D0%BA%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B0',
        lp: '9B%D0%B5%D0%B3.%D0%BF%D1%80%D0%BE%D0%BC.',
        shoes: '9E%D0%B1%D1%83%D0%B2%D1%8C',
        perfume: '9F%D0%B0%D1%80%D1%84%D1%8E%D0%BC',
        tobacco: 'A2%D0%B0%D0%B1%D0%B0%D0%BA',
        photo: 'A4%D0%BE%D1%82%D0%BE',
        tires: 'A8%D0%B8%D0%BD%D1%8B'
    };

    return url[group];
};

export default PulseDb;