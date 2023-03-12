var defaultThreads = [
    {
        id: 1,
        title: "Breast cancer",
        author: "author",
        date: Date.now(),
        content: "Breast cancer",
        comments: [
            
        ]
    },
    {
        id: 2,
        title: "HPV",
        author: "author",
        date: Date.now(),
        content: "HPV",
        comments: [
            
        ]
    },
    {
        id: 3,
        title: "Menstrual disorder",
        author: "author",
        date: Date.now(),
        content: "Menstrual disorder",
        comments: [
            
        ]
    },
    {
        id: 4,
        title: "General",
        author: "author",
        date: Date.now(),
        content: "General",
        comments: [
            
        ]
    }
    
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}



