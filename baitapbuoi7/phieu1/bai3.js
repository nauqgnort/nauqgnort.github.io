const topics = [
    {
      topic: "ReactJS",
      posts: [
        { postID: "id1", title: "title1" },
        { postID: "id2", title: "title2" },
      ],
    },
    {
      topic: "Vue.js",
      posts: [
        { postID: "id3", title: "title3" },
        { postID: "id4", title: "title4" },
      ],
    },
  ];
  
  const allPosts = topics.flatMap(topic => topic.posts);
  
  console.log(allPosts);
  