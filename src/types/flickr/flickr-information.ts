export interface FlickrInformation {
    photo: {
        title: {
            _content: string
        },
        owner: {
            username: string
        },
        dates: {
            posted: string
        },
        urls: {
            url: [{
               _content: string
            }]
        }
    }
}