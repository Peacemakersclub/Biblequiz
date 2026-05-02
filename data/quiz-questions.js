/* ============================================
   QUIZ QUESTIONS DATA (100 Questions)
   Pentecostal Evangelical Doctrine
   Scripture-based with references
   ============================================ */

const quizQuestions = [
    // Questions 1-10: Foundations of Faith
    { text: "According to Acts 2:4, what were the disciples filled with on the Day of Pentecost?", options: ["New wine", "The Holy Spirit", "Great joy", "Prophetic vision"], correct: 1, ref: "Acts 2:4" },
    { text: "Which book of the Bible records the outpouring of the Holy Spirit at Pentecost?", options: ["John", "Acts", "Romans", "Ephesians"], correct: 1, ref: "Acts 2" },
    { text: "Jesus said, 'You must be _______ again' to see the Kingdom of God (John 3:3).", options: ["Baptized", "Born", "Saved", "Cleansed"], correct: 1, ref: "John 3:3" },
    { text: "The Great Commission is found in which Gospel?", options: ["Mark", "Luke", "Matthew", "John"], correct: 2, ref: "Matthew 28:19-20" },
    { text: "Which apostle preached at Pentecost and 3,000 were saved?", options: ["John", "James", "Peter", "Paul"], correct: 2, ref: "Acts 2:41" },
    { text: "What does 'Pentecost' mean?", options: ["Harvest", "Fifty", "Firstfruits", "Feast of Weeks"], correct: 1, ref: "Leviticus 23:15-16" },
    { text: "According to Romans 10:9, what must you confess to be saved?", options: ["Your sins", "Jesus is Lord", "The Apostles' Creed", "Your faith"], correct: 1, ref: "Romans 10:9" },
    { text: "Which gift of the Spirit is often called the 'initial evidence' of the Baptism in the Holy Spirit in Pentecostal tradition?", options: ["Prophecy", "Healing", "Tongues", "Wisdom"], correct: 2, ref: "Acts 2:4, 10:46" },
    { text: "Who was the first Christian martyr?", options: ["Peter", "Paul", "Stephen", "James"], correct: 2, ref: "Acts 7:59-60" },
    { text: "The fruit of the Spirit includes all EXCEPT:", options: ["Love", "Joy", "Greed", "Patience"], correct: 2, ref: "Galatians 5:22-23" },

    // Questions 11-20: The Holy Spirit
    { text: "In John 14:16, Jesus promised to send the __________.", options: ["Comforter (Holy Spirit)", "Angel Gabriel", "Prophet Elijah", "Apostle Paul"], correct: 0, ref: "John 14:16" },
    { text: "The Holy Spirit is described as a ________ in the Gospels.", options: ["Fire", "Wind", "Dove", "All of the above"], correct: 3, ref: "Matthew 3:11, John 3:8, John 1:32" },
    { text: "According to Ephesians 5:18, believers should be filled with the:", options: ["Wine", "Joy", "Holy Spirit", "Knowledge"], correct: 2, ref: "Ephesians 5:18" },
    { text: "Who was filled with the Holy Spirit while still in his mother's womb?", options: ["Samson", "John the Baptist", "Jeremiah", "David"], correct: 1, ref: "Luke 1:15" },
    { text: "The Holy Spirit gives ______ for ministry according to 1 Corinthians 12.", options: ["Talents", "Spiritual gifts", "Money", "Authority"], correct: 1, ref: "1 Corinthians 12:7-11" },
    { text: "In Acts 8, Simon the sorcerer tried to _______ the Holy Spirit.", options: ["Buy", "Rebuke", "Quench", "Imitate"], correct: 0, ref: "Acts 8:18-19" },
    { text: "The Holy Spirit is the Spirit of ______ (Romans 8:15).", options: ["Fear", "Slavery", "Adoption", "Power"], correct: 2, ref: "Romans 8:15" },
    { text: "Jesus was led by the Spirit into the _______ after His baptism.", options: ["Temple", "Wilderness", "Mountain", "Jordan River"], correct: 1, ref: "Matthew 4:1" },
    { text: "Which verse says 'Do not quench the Spirit'?", options: ["1 Thessalonians 5:19", "Ephesians 4:30", "Acts 7:51", "Romans 12:11"], correct: 0, ref: "1 Thessalonians 5:19" },
    { text: "The Spirit helps us in our weakness and _______ for us.", options: ["Fights", "Intercedes", "Sings", "Works"], correct: 1, ref: "Romans 8:26" },

    // Questions 21-30: Salvation & Grace
    { text: "For by grace you have been saved through ______ (Ephesians 2:8).", options: ["Works", "Faith", "Baptism", "Prayer"], correct: 1, ref: "Ephesians 2:8" },
    { text: "What does 'born again' mean?", options: ["Reincarnation", "Spiritual rebirth", "Water baptism only", "Church membership"], correct: 1, ref: "John 3:3-7" },
    { text: "According to Romans 3:23, 'All have ______ and fall short of the glory of God'.", options: ["Failed", "Sinned", "Stumbled", "Lied"], correct: 1, ref: "Romans 3:23" },
    { text: "The wages of sin is _____, but the gift of God is eternal life (Romans 6:23).", options: ["Sorrow", "Death", "Punishment", "Separation"], correct: 1, ref: "Romans 6:23" },
    { text: "What is the first step of salvation according to the Gospel?", options: ["Repentance", "Baptism", "Good works", "Church attendance"], correct: 0, ref: "Acts 3:19" },
    { text: "Jesus died on the cross during which festival?", options: ["Pentecost", "Passover", "Tabernacles", "Trumpets"], correct: 1, ref: "John 19:14" },
    { text: "What does 'justification' mean?", options: ["Made perfect", "Declared righteous", "Forgiven only", "Baptized"], correct: 1, ref: "Romans 5:1" },
    { text: "Who said, 'I am the way, the truth, and the life'?", options: ["Peter", "John", "Jesus", "Paul"], correct: 2, ref: "John 14:6" },
    { text: "The thief on the cross was promised paradise because of his:", options: ["Baptism", "Faith in Jesus", "Good deeds", "Repentance only"], correct: 1, ref: "Luke 23:42-43" },
    { text: "Salvation is found in no one else except _______ (Acts 4:12).", options: ["Peter", "Mary", "Jesus", "The apostles"], correct: 2, ref: "Acts 4:12" },

    // Questions 31-40: The Church & Worship
    { text: "The Church is described as the 'Body of ________' in 1 Corinthians 12.", options: ["Believers", "Christ", "God", "The Lord"], correct: 1, ref: "1 Corinthians 12:27" },
    { text: "What are the two ordinances of the Church in most Evangelical traditions?", options: ["Christmas & Easter", "Baptism & Communion", "Prayer & Fasting", "Tithing & Offering"], correct: 1, ref: "Matthew 28:19, 1 Corinthians 11:23-26" },
    { text: "In the early church, believers devoted themselves to teaching, fellowship, breaking of bread, and:", options: ["Healing", "Prayer", "Prosperity", "Fasting"], correct: 1, ref: "Acts 2:42" },
    { text: "Who is the head of the Church?", options: ["The Pope", "The Pastor", "Jesus", "The Holy Spirit"], correct: 2, ref: "Ephesians 5:23" },
    { text: "What does 'ekklesia' (the Greek word for church) mean?", options: ["Building", "Assembly", "Temple", "Congregation"], correct: 1, ref: "Matthew 16:18" },
    { text: "According to Hebrews 10:25, believers should not give up:", options: ["Prayer", "Meeting together", "Tithing", "Evangelism"], correct: 1, ref: "Hebrews 10:25" },
    { text: "Worship should be in spirit and in truth according to which Gospel?", options: ["Matthew", "Mark", "Luke", "John"], correct: 3, ref: "John 4:24" },
    { text: "The Psalms call us to worship the Lord with:", options: ["Singing", "Dancing", "Instruments", "All of the above"], correct: 3, ref: "Psalm 150" },
    { text: "In Pentecostal worship, raising hands is based on which verse?", options: ["Psalm 63:4", "Psalm 134:2", "1 Timothy 2:8", "All of the above"], correct: 3, ref: "1 Timothy 2:8" },
    { text: "What is the 'Great Commandment'?", options: ["Love God and neighbor", "Go and make disciples", "Keep the Sabbath", "Pay tithes"], correct: 0, ref: "Matthew 22:37-39" },

    // Questions 41-50: Prayer & Spiritual Disciplines
    { text: "Jesus taught His disciples to pray the '_______ Prayer' (Matthew 6:9-13).", options: ["High Priestly", "Lord's", "Morning", "Evening"], correct: 1, ref: "Matthew 6:9-13" },
    { text: "According to 1 Thessalonians 5:17, we should pray:", options: ["Morning and night", "Without ceasing", "Three times daily", "In the temple"], correct: 1, ref: "1 Thessalonians 5:17" },
    { text: "What type of prayer did Daniel offer that got him thrown into the lion's den?", options: ["Public prayer", "Secret prayer", "Thanksgiving", "Intercession"], correct: 0, ref: "Daniel 6:10" },
    { text: "Jesus said some demons can only come out by prayer and _______ (Mark 9:29).", options: ["Fasting", "Faith", "Anointing", "Laying of hands"], correct: 0, ref: "Mark 9:29" },
    { text: "The Holy Spirit helps us pray with _______ (Romans 8:26).", options: ["Tongues", "Groanings", "Words", "Silence"], correct: 1, ref: "Romans 8:26" },
    { text: "What is 'intercessory prayer'?", options: ["Praying for yourself", "Praying for others", "Thanksgiving only", "Confession"], correct: 1, ref: "1 Timothy 2:1" },
    { text: "Elijah prayed and it did not rain for how many years?", options: ["1 year", "3.5 years", "7 years", "40 days"], correct: 1, ref: "James 5:17" },
    { text: "Which book is known as the 'Prayer Book of the Bible'?", options: ["Proverbs", "Psalms", "Ecclesiastes", "Job"], correct: 1, ref: "Psalms" },
    { text: "Jesus often withdrew to ______ places to pray.", options: ["Lonely", "Crowded", "High", "Dark"], correct: 0, ref: "Luke 5:16" },
    { text: "Praying in the Spirit refers to praying in _______ (1 Corinthians 14:15).", options: ["Faith", "Tongues", "Understanding", "Silence"], correct: 1, ref: "1 Corinthians 14:15" },

    // Questions 51-60: Evangelism & Missions
    { text: "'Go into all the world and preach the _______ to every creature' (Mark 16:15).", options: ["Gospel", "Law", "Word", "Truth"], correct: 0, ref: "Mark 16:15" },
    { text: "Who was the first recorded missionary in Acts?", options: ["Peter", "Paul", "Barnabas", "Philip"], correct: 1, ref: "Acts 13:2-3" },
    { text: "The apostle Paul was originally named:", options: ["Saul", "Silas", "Stephen", "Ananias"], correct: 0, ref: "Acts 13:9" },
    { text: "Jesus met the Samaritan woman at which well?", options: ["Jacob's well", "Abraham's well", "Moses' well", "David's well"], correct: 0, ref: "John 4:6" },
    { text: "What was Philip's response when the Ethiopian asked about baptism?", options: ["Wait", "Believe", "Go", "Study more"], correct: 1, ref: "Acts 8:37" },
    { text: "The Gospel is the 'power of God for salvation to everyone who ________' (Romans 1:16).", options: ["Believes", "Repents", "Is baptized", "Prays"], correct: 0, ref: "Romans 1:16" },
    { text: "Paul's missionary journeys are recorded in which book?", options: ["Romans", "Acts", "Corinthians", "Galatians"], correct: 1, ref: "Acts 13-28" },
    { text: "What was the major issue at the Jerusalem Council (Acts 15)?", options: ["Baptism", "Circumcision", "Tongues", "Leadership"], correct: 1, ref: "Acts 15:1-2" },
    { text: "Jesus sent out the 70 disciples to preach and heal. What were their instructions?", options: ["Take provisions", "Take no bag", "Take money", "Take swords"], correct: 1, ref: "Luke 10:4" },
    { text: "What does 'evangelism' literally mean?", options: ["Teaching", "Proclaiming good news", "Healing", "Baptizing"], correct: 1, ref: "Matthew 4:23" },

    // Questions 61-70: Last Things (Eschatology) - Evangelical/Pentecostal view
    { text: "The belief in Jesus' return is called the Blessed ______ (Titus 2:13).", options: ["Hope", "Promise", "Truth", "Assurance"], correct: 0, ref: "Titus 2:13" },
    { text: "In 1 Thessalonians 4:17, believers will be caught up to meet the Lord in the _______.", options: ["Heavens", "Air", "Clouds", "Glory"], correct: 1, ref: "1 Thessalonians 4:17" },
    { text: "The final book of the Bible is:", options: ["Jude", "Revelation", "Acts", "Hebrews"], correct: 1, ref: "Revelation 1:1" },
    { text: "According to Revelation 20, Satan will be bound for how many years?", options: ["100", "1,000", "10,000", "100,000"], correct: 1, ref: "Revelation 20:2" },
    { text: "The New Jerusalem comes down from heaven in which chapter of Revelation?", options: ["20", "21", "22", "19"], correct: 1, ref: "Revelation 21:2" },
    { text: "Jesus said 'I go to prepare a place for you' in which Gospel?", options: ["Matthew", "Mark", "Luke", "John"], correct: 3, ref: "John 14:2-3" },
    { text: "The Antichrist is discussed in which epistles of John?", options: ["1 John", "2 John", "3 John", "All of the above"], correct: 0, ref: "1 John 2:18" },
    { text: "What is the 'Great White Throne Judgment' (Revelation 20:11-15)?", options: ["Believers judged", "Unbelievers judged", "Angels judged", "All judged"], correct: 1, ref: "Revelation 20:11-15" },
    { text: "The river of life flows from the throne of God in which chapter?", options: ["Revelation 20", "Revelation 21", "Revelation 22", "Revelation 19"], correct: 2, ref: "Revelation 22:1" },
    { text: "Maranatha means:", options: ["Come, Lord Jesus", "Amen", "Hallelujah", "Holy Spirit come"], correct: 0, ref: "1 Corinthians 16:22" },

    // Questions 71-80: Spiritual Warfare
    { text: "The armor of God is described in which chapter of Ephesians?", options: ["4", "5", "6", "7"], correct: 2, ref: "Ephesians 6:13-17" },
    { text: "The sword of the Spirit is the _______ (Ephesians 6:17).", options: ["Truth", "Faith", "Word of God", "Salvation"], correct: 2, ref: "Ephesians 6:17" },
    { text: "Our battle is not against flesh and blood but against _______ (Ephesians 6:12).", options: ["Sin", "The world", "Spiritual forces", "Our flesh"], correct: 2, ref: "Ephesians 6:12" },
    { text: "Jesus defeated Satan with the words 'It is _______' (John 19:30).", options: ["Done", "Finished", "Completed", "Over"], correct: 1, ref: "John 19:30" },
    { text: "Resist the devil and he will _______ from you (James 4:7).", options: ["Hide", "Flee", "Attack", "Submit"], correct: 1, ref: "James 4:7" },
    { text: "The shield of faith protects us from the _______ of the evil one.", options: ["Arrows", "Flaming arrows", "Spears", "Swords"], correct: 1, ref: "Ephesians 6:16" },
    { text: "Jesus cast out demons by the _______ of God (Matthew 12:28).", options: ["Power", "Spirit", "Name", "Authority"], correct: 1, ref: "Matthew 12:28" },
    { text: "What did Jesus say about the power of the believer over serpents and scorpions?", options: ["Nothing", "He gave authority", "Only apostles", "Only in the Old Testament"], correct: 1, ref: "Luke 10:19" },
    { text: "The belt of truth represents:", options: ["Honesty", "Integrity", "Knowing God's Word", "All of the above"], correct: 3, ref: "Ephesians 6:14" },
    { text: "What did Paul say about weaponry in 2 Corinthians 10:4?", options: ["Divine power", "Carnal weapons", "Worldly wisdom", "Human strength"], correct: 0, ref: "2 Corinthians 10:4" },

    // Questions 81-90: Pentecostal Distinctives
    { text: "The Azusa Street Revival (1906) is considered the birth of modern:", options: ["Evangelicalism", "Pentecostalism", "Methodism", "Baptist movement"], correct: 1, ref: "Acts 2:1-4" },
    { text: "Who was the leader of the Azusa Street Revival?", options: ["Charles Parham", "William J. Seymour", "Smith Wigglesworth", "John G. Lake"], correct: 1, ref: "Historical record, Acts 2:39" },
    { text: "The Pentecostal movement emphasizes the Baptism in the Holy Spirit subsequent to:", options: ["Water baptism", "Salvation", "Church membership", "Confirmation"], correct: 1, ref: "Acts 8:14-17" },
    { text: "According to Pentecostal theology, speaking in tongues is the _______ evidence of Spirit baptism.", options: ["Only", "Initial physical", "Secondary", "Optional"], correct: 1, ref: "Acts 2:4, 10:46, 19:6" },
    { text: "Which revival in Wales (1904-1905) influenced the birth of Pentecostalism?", options: ["Welsh Revival", "Great Awakening", "Methodist Revival", "Holiness Movement"], correct: 0, ref: "Historical record" },
    { text: "What does 'charismatic' mean in Greek?", options: ["Gifted", "Filled", "Anointed", "Called"], correct: 0, ref: "1 Corinthians 12:4" },
    { text: "Which Pentecostal denomination is the largest in the world?", options: ["Church of God", "Assemblies of God", "Pentecostal Holiness", "Foursquare"], correct: 1, ref: "World Christian Database" },
    { text: "The Pentecostal movement is rooted in which earlier movement?", options: ["Reformation", "Holiness Movement", "Puritanism", "Anglicanism"], correct: 1, ref: "Historical record" },
    { text: "Who wrote the book 'The Gospel of the Kingdom' and was a prominent Pentecostal theologian?", options: ["Gordon Fee", "Howard Carter", "Donald Gee", "Stanley Horton"], correct: 0, ref: "Pentecostal scholarship" },
    { text: "Which verse is often called the 'Pentecostal promise'?", options: ["Joel 2:28", "Acts 1:8", "Acts 2:39", "All of the above"], correct: 3, ref: "Acts 2:39" },

    // Questions 91-100: Bible Knowledge & Review
    { text: "How many books are in the New Testament?", options: ["27", "39", "66", "24"], correct: 0, ref: "Bible canon" },
    { text: "Who wrote the book of Hebrews? (Traditionally)", options: ["Paul", "Luke", "Apollos", "Unknown"], correct: 3, ref: "Hebrews 2:3" },
    { text: "Which prophet saw a valley of dry bones come to life?", options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"], correct: 2, ref: "Ezekiel 37" },
    { text: "What is the shortest verse in the Bible?", options: ["Jesus wept", "Pray without ceasing", "Rejoice always", "God is love"], correct: 0, ref: "John 11:35" },
    { text: "Who was thrown into the lion's den?", options: ["Jeremiah", "Daniel", "Joseph", "Moses"], correct: 1, ref: "Daniel 6" },
    { text: "Which disciple doubted Jesus' resurrection until he saw the wounds?", options: ["Philip", "Thomas", "James", "Andrew"], correct: 1, ref: "John 20:25" },
    { text: "What was the name of Abraham's wife?", options: ["Hagar", "Sarah", "Rebekah", "Leah"], correct: 1, ref: "Genesis 17:15" },
    { text: "Who wrote most of the Psalms?", options: ["Solomon", "Moses", "David", "Asaph"], correct: 2, ref: "Psalm 3-150" },
    { text: "On which day did Jesus rise from the dead?", options: ["Saturday", "Sunday", "Friday", "Monday"], correct: 1, ref: "Matthew 28:1" },
    { text: "What is the last word of the Bible?", options: ["Amen", "Jesus", "Come", "Grace"], correct: 0, ref: "Revelation 22:21" }
];

// Ensure exactly 100 questions (safety)
while (quizQuestions.length < 100) {
    quizQuestions.push({
        text: "Trust in the Lord with all your heart — this is from which chapter?",
        options: ["Proverbs 3", "Psalm 1", "Isaiah 40", "Jeremiah 29"],
        correct: 0,
        ref: "Proverbs 3:5"
    });
}

console.log(`✅ Loaded ${quizQuestions.length} Bible quiz questions`);
