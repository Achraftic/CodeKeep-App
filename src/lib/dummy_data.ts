export const savedSnippets = [
    {
        id: 1,
        title: "React Fetch API",
        language: "JavaScript",
        code: `fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data));`,
        author: "John Doe",
        createdAt: "3 days ago"
    },
    {
        id: 2,
        title: "Basic Python Function",
        language: "Python",
        code: `def greet(name):
return f"Hello, {name}!"`,
        author: "Jane Smith",
        createdAt: "1 week ago"
    },
    {
        id: 3,
        title: "CSS Flexbox Layout",
        language: "CSS",
        code: `.container {
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 1rem;
}`,
        author: "John Doe",
        createdAt: "2 weeks ago"
    },
    {
        id: 4,
        title: "Express Route Handler",
        language: "JavaScript",
        code: `app.get('/api/users', async (req, res) => {
try {
const users = await User.find({});
res.status(200).json(users);
} catch (error) {
res.status(500).json({ message: error.message });
}
});`,
        author: "Alex Johnson",
        createdAt: "1 month ago"
    },
];