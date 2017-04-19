class ApiService {
    getModels() {
        return [
            {
                id: 1,
                name: 'Urban Helicopter',
                description: 'Lorem ipsum dolor sit amet.',
                uploaded: '20m',
                tags: ['transport', 'flying'],
                likes: 17,
                comments: ['cool!', 'nice!', 'great!'],
                thumbnail: require('../images/sample-models/sample1.thumb.jpg'),
                image: require('../images/sample-models/sample1.jpg'),
                author: {
                name: 'Elliot',
                avatar: require('../images/avatars/elliot.jpg')
                }
            },
            {
                id: 2,
                name: 'City Bridge',
                description: 'Lorem ipsum dolor sit amet.',
                uploaded: '32m',
                tags: ['building', 'urban'],
                likes: 4,
                comments: ['cool!'],
                thumbnail: require('../images/sample-models/sample2.thumb.jpg'),
                image: require('../images/sample-models/sample2.jpg'),
                author: {
                name: 'Jenny',
                avatar: require('../images/avatars/jenny.jpg')
                }
            },
            {
                id: 3,
                name: 'Classic car',
                description: 'Lorem ipsum dolor sit amet.',
                uploaded: '45m',
                tags: ['transport', 'car', 'classic'],
                likes: 31,
                comments: ['cool!', 'nice!', 'great!', 'love it!', 'impresive!', 'wonderfull!'],
                thumbnail: require('../images/sample-models/sample3.thumb.jpg'),
                image: require('../images/sample-models/sample3.jpg'),
                author: {
                name: 'Matthew',
                avatar: require('../images/avatars/matthew.png')
                }
            },
            {
                id: 4,
                name: 'Urban buildings',
                description: 'Lorem ipsum dolor sit amet.',
                uploaded: '7h',
                tags: ['transport', 'flying'],
                likes: 10,
                comments: ['cool!'],
                thumbnail: require('../images/sample-models/sample4.thumb.jpg'),
                image: require('../images/sample-models/sample4.jpg'),
                author: {
                name: 'Elyse',
                avatar: require('../images/avatars/elyse.png')
                }
            },
            {
                id: 5,
                name: 'Car engine',
                description: 'Lorem ipsum dolor sit amet.',
                uploaded: '10h',
                tags: ['industrial', 'engine'],
                likes: 7,
                comments: ['nice!', 'great!'],
                thumbnail: require('../images/sample-models/sample5.thumb.jpg'),
                image: require('../images/sample-models/sample5.jpg'),
                author: {
                name: 'Elliot',
                avatar: require('../images/avatars/elliot.jpg')
                }
            },
            {
                id: 6,
                name: 'City Hospital',
                description: 'Lorem ipsum dolor sit amet.',
                uploaded: '14h',
                tags: ['building', 'urban'],
                likes: 21,
                comments: ['cool!', 'nice!', 'great!', 'love it!', 'impresive!'],
                thumbnail: require('../images/sample-models/sample6.thumb.jpg'),
                image: require('../images/sample-models/sample6.jpg'),
                author: {
                name: 'Jenny',
                avatar: require('../images/avatars/jenny.jpg')
                }
            },
            {
                id: 7,
                name: 'Cessna 172',
                description: 'Lorem ipsum dolor sit amet.',
                uploaded: '5d',
                tags: ['transport', 'flying'],
                likes: 21,
                comments: ['great!', 'love it!', 'impresive!'],
                thumbnail: require('../images/sample-models/sample7.thumb.jpg'),
                image: require('../images/sample-models/sample7.jpg'),
                author: {
                name: 'Elyse',
                avatar: require('../images/avatars/elyse.png')
                }
            }
        ];
    }
}

export default new ApiService();