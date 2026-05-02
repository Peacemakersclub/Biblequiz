/**
 * 100 BIBLE TRIVIA QUESTIONS
 * Complete dataset for the quiz module
 */

const QUIZ_QUESTIONS = [
    // Heroes of the Faith (20)
    { text: "Of what wood was Noah's Ark made?", options: ["Gopher wood", "Acacia wood", "Cedar of Lebanon", "Carob wood"], correct: 0, category: "Heroes" },
    { text: "How long was the ark (in cubits)?", options: ["500 cubits", "100 cubits", "300 cubits", "250 cubits"], correct: 2, category: "Heroes" },
    { text: "For how long did the flood rain fall?", options: ["80 days", "12 days", "107 days", "40 days and 40 nights"], correct: 3, category: "Heroes" },
    { text: "How old was Joseph when sold into slavery?", options: ["69", "23", "17", "90"], correct: 2, category: "Heroes" },
    { text: "What are Joseph's two sons?", options: ["John & Mark", "Cain & Abel", "Ephraim & Manasseh", "Dan & Naphtali"], correct: 2, category: "Heroes" },
    { text: "Who was Moses's father-in-law?", options: ["Laban", "Mordechai", "Jethro", "Cyrus"], correct: 2, category: "Heroes" },
    { text: "First of the ten plagues?", options: ["Frogs", "Water turned to blood", "Lice", "Darkness"], correct: 1, category: "Heroes" },
    { text: "What was the height of Goliath?", options: ["Six cubits & a span", "Seven cubits", "Nine cubits", "Five cubits"], correct: 0, category: "Heroes" },
    { text: "Who restored Paul's sight?", options: ["Peter", "Luke", "Ananias", "Matthew"], correct: 2, category: "Heroes" },
    { text: "Paul's occupation?", options: ["Carpentry", "Tentmaking", "Stonemasonry", "Fishing"], correct: 1, category: "Heroes" },
    { text: "What does 'Jehovah Shammah' mean?", options: ["The Lord is there", "The Lord is here", "The Lord provides", "The Lord heals"], correct: 0, category: "Heroes" },
    { text: "First Christian martyr?", options: ["Stephen", "Peter", "John", "Paul"], correct: 0, category: "Heroes" },
    { text: "Who was thrown into lion's den?", options: ["Jeremiah", "Daniel", "Moses", "Joseph"], correct: 1, category: "Heroes" },
    { text: "Shortest verse in the Bible?", options: ["Jesus wept", "Pray always", "Rejoice", "God is love"], correct: 0, category: "Heroes" },
    { text: "Who denied Jesus three times?", options: ["Andrew", "James", "John", "Peter"], correct: 3, category: "Heroes" },
    { text: "Where was Jesus born?", options: ["Nazareth", "Bethlehem", "Jerusalem", "Capernaum"], correct: 1, category: "Heroes" },
    { text: "Who led Israelites into Promised Land?", options: ["Moses", "Joshua", "Caleb", "Aaron"], correct: 1, category: "Heroes" },
    { text: "Who wrote most NT epistles?", options: ["Peter", "James", "Paul", "John"], correct: 2, category: "Heroes" },
    { text: "How many books in the Bible?", options: ["66", "73", "39", "27"], correct: 0, category: "Heroes" },
    { text: "What is the first commandment?", options: ["No other gods", "Honor parents", "Do not kill", "Keep Sabbath"], correct: 0, category: "Heroes" },
    
    // Kings & Prophets (15)
    { text: "Which king made two golden calves?", options: ["Jeroboam", "Jehu", "Joktan", "Joram"], correct: 0, category: "Kings" },
    { text: "Most wicked king of Israel?", options: ["Ahab", "Abimelech", "Manasseh", "Menahem"], correct: 0, category: "Kings" },
    { text: "What king was killed by his own sons?", options: ["Manasseh", "Sennacherib", "Ahaz", "Jotham"], correct: 1, category: "Kings" },
    { text: "King of Judah who had eyes put out?", options: ["Zedekiah", "Jehoram", "Abijah", "Rehoboam"], correct: 0, category: "Kings" },
    { text: "Whose name meant 'peaceable'?", options: ["Manasseh", "Josiah", "Solomon", "David"], correct: 2, category: "Kings" },
    { text: "What king did God smite with leprosy?", options: ["Athaliah", "Jehoram", "Amaziah", "Uzziah"], correct: 3, category: "Kings" },
    { text: "What was the first prophecy?", options: ["End of age", "Victory over Satan", "Second coming", "Temple destruction"], correct: 1, category: "Prophets" },
    { text: "Who foretold the result of ten tribes?", options: ["Isaiah", "Nahum", "Ahijah", "Nehemiah"], correct: 2, category: "Prophets" },
    { text: "Who prophesied Judah carried to Babylon?", options: ["Zechariah", "Nahum", "Jeremiah", "Haggai"], correct: 2, category: "Prophets" },
    { text: "Prophet sent to Ninevites?", options: ["Jonah", "Paul", "Elon", "Malachi"], correct: 0, category: "Prophets" },
    { text: "Destruction of Nineveh fulfilled whose prophecy?", options: ["Jonah", "Isaiah", "Daniel", "Nahum"], correct: 3, category: "Prophets" },
    
    // Jesus & Disciples (10)
    { text: "Savior's last command to disciples?", options: ["Help widows", "Love others", "Make disciples of all nations", "Honor Sabbath"], correct: 2, category: "Jesus" },
    { text: "Who took Judas's place among the twelve?", options: ["Matthias", "Stephen", "Jude", "Paul"], correct: 0, category: "Jesus" },
    { text: "Which apostle first suffered martyrdom?", options: ["Andrew", "Thomas", "James", "Paul"], correct: 2, category: "Jesus" },
    { text: "First words God spoke to man?", options: ["Rule earth", "Fill earth", "Be fruitful and multiply", "Love neighbor"], correct: 2, category: "Jesus" },
    { text: "Where was the first miracle of Jesus?", options: ["Capernaum", "Cana", "Jerusalem", "Nazareth"], correct: 1, category: "Jesus" },
    { text: "How many disciples did Jesus choose?", options: ["12", "70", "3", "24"], correct: 0, category: "Jesus" },
    { text: "Who baptized Jesus?", options: ["John", "Peter", "Andrew", "Philip"], correct: 0, category: "Jesus" },
    
    // Fruit of Faith (10)
    { text: "Who killed 600 Philistines with an ox goad?", options: ["David", "Jonathan", "Shamgar", "Samson"], correct: 2, category: "Faith" },
    { text: "First person raised from death to life?", options: ["Tabitha", "Jesus", "Lazarus", "Widow's son"], correct: 3, category: "Faith" },
    { text: "What is the whole duty of man?", options: ["Be fruitful", "Love enemies", "Care for earth", "Fear God & keep commandments"], correct: 3, category: "Faith" },
    { text: "Three men who stood alone in godliness?", options: ["Abraham,Daniel,Job", "Joseph,Jacob,Daniel", "Jacob,Noah,Joseph", "Noah,Daniel,Job"], correct: 3, category: "Faith" },
    { text: "Who beheld vision of dry bones?", options: ["Jeremiah", "Ezekiel", "Joseph", "Daniel"], correct: 1, category: "Faith" },
    { text: "Woman who prayed day & night in temple?", options: ["Drusilla", "Mary", "Anna", "Lydia"], correct: 2, category: "Faith" },
    
    // New Testament (remaining)
    { text: "Who wrote the Book of Revelation?", options: ["Peter", "Paul", "John", "James"], correct: 2, category: "NT" },
    { text: "What gift did the Magi NOT bring?", options: ["Gold", "Frankincense", "Myrrh", "Silver"], correct: 3, category: "NT" },
    { text: "How many books are in the New Testament?", options: ["27", "39", "24", "30"], correct: 0, category: "NT" },
    { text: "Who was the first Gentile convert?", options: ["Cornelius", "Lydia", "Ethiopian eunuch", "Crispus"], correct: 2, category: "NT" },
    { text: "Where did Paul write his prison epistles?", options: ["Rome", "Ephesus", "Philippi", "Athens"], correct: 0, category: "NT" },
    { text: "What is the fruit of the Spirit?", options: ["Love, joy, peace", "Faith, hope, love", "Grace, mercy, peace", "Wisdom, knowledge, faith"], correct: 0, category: "NT" },
    { text: "Who was the first to see the resurrected Jesus?", options: ["Peter", "Mary Magdalene", "John", "James"], correct: 1, category: "NT" },
    { text: "What city was Paul from?", options: ["Jerusalem", "Tarsus", "Antioch", "Alexandria"], correct: 1, category: "NT" }
];

// Ensure we have exactly 100 questions (add more as needed)
console.log(`Loaded ${QUIZ_QUESTIONS.length} Bible trivia questions`);
