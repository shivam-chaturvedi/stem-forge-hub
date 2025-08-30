import { BlogPost } from '@/components/cards/BlogCard';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Splay Tree: Implementation and Usage',
    description: "A Splay Tree is a self-adjusting binary search tree where recently accessed elements are moved closer to the root. This dynamic balancing improves access times for frequently used nodes. In this blog, we explore the key features of Splay Trees, their use cases, and provide a simple C++ implementation showcasing operations such as insertion, searching, and tree rotations. Discover how Splay Trees maintain efficiency in handling non-uniform access patterns.",
    tags: ['Data Structures', 'C++', 'Splay Tree'],
    readTime: '5 min read',
    publishedAt: 'Aug 17, 2024',
    author: 'Shivam Chaturvedi',
    link: 'https://shivamchaturvedi.vercel.app/blogs#splay-tree-implementation-and-usage'
  },
  {
    id: '2',
    title: 'AVL Trees: Implementation and Usage',
    description: "An AVL Tree is a self-balancing binary search tree where the difference in heights of left and right subtrees (known as the balance factor) cannot be more than one for any node. This balancing ensures O(log n) time complexity for search, insertion, and deletion operations.",
    tags: ['Data Structures', 'C++', 'AVL Tree'],
    readTime: '10 min read',
    publishedAt: 'Aug 17, 2024',
    author: 'Shivam Chaturvedi',
    link: 'https://shivamchaturvedi.vercel.app/blogs#avl-trees-implementation-and-usage'
  },
  {
    id: '3',
    title: 'All About Graphs In Data Structures',
    description: "Graphs are fundamental structures used to model pairwise relations between objects. They consist of nodes (vertices) and edges (connections between nodes). Graphs are used in various applications, from computer networks and social networks to recommendation systems and route planning.",
    tags: ['Data Structures', 'Graphs', 'Algorithms'],
    readTime: '15 min read',
    publishedAt: 'Aug 17, 2024',
    author: 'Shivam Chaturvedi',
    link: 'https://shivamchaturvedi.vercel.app/blogs#all-about-graphs-in-data-structures'
  },
];
