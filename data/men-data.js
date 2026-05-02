/**
 * 50 INFLUENTIAL MEN OF GOD
 * Complete profiles with stories and Scripture references
 */

const MEN_OF_GOD = [
    // Old Testament Heroes
    { name: "Adam", epithet: "First Man", summary: "Created by God, father of all humanity. Though he fell, God promised a Redeemer through his seed.", scripture: "Genesis 1-3", era: "Patriarchs", imageIcon: "🍎" },
    { name: "Noah", epithet: "Preacher of Righteousness", summary: "Found grace in God's eyes, built the ark, preserved humanity through the flood. A man who walked with God.", scripture: "Genesis 6-9", era: "Patriarchs", imageIcon: "⛵" },
    { name: "Abraham", epithet: "Father of Faith", summary: "Left his homeland, trusted God's promise, became father of many nations. His faith was credited as righteousness.", scripture: "Genesis 12-25", era: "Patriarchs", imageIcon: "⭐" },
    { name: "Isaac", epithet: "Son of Promise", summary: "Miracle child of Abraham and Sarah, typified Christ as the willing sacrifice.", scripture: "Genesis 22", era: "Patriarchs", imageIcon: "🐏" },
    { name: "Jacob", epithet: "Israel", summary: "Wrestled with God and prevailed, father of the twelve tribes. His life shows God's grace to the flawed.", scripture: "Genesis 25-49", era: "Patriarchs", imageIcon: "🤼" },
    { name: "Joseph", epithet: "Dreamer & Deliverer", summary: "Sold into slavery, rose to power in Egypt, forgave his brothers and saved his family.", scripture: "Genesis 37-50", era: "Patriarchs", imageIcon: "👑" },
    { name: "Moses", epithet: "Lawgiver & Prophet", summary: "Led Israel from Egypt, received the Ten Commandments, spoke with God face to face.", scripture: "Exodus-Deuteronomy", era: "Law", imageIcon: "📜" },
    { name: "Joshua", epithet: "Conqueror", summary: "Led Israel into the Promised Land, commanded the sun to stand still.", scripture: "Joshua", era: "Conquest", imageIcon: "⚔️" },
    { name: "Gideon", epithet: "Mighty Warrior", summary: "Defeated the Midianites with 300 men and torches, a reluctant hero used by God.", scripture: "Judges 6-8", era: "Judges", imageIcon: "🔥" },
    { name: "Samson", epithet: "Strong Judge", summary: "Nazirite with supernatural strength, defeated the Philistines, died bringing down their temple.", scripture: "Judges 13-16", era: "Judges", imageIcon: "💪" },
    { name: "Samuel", epithet: "Prophet & Judge", summary: "Heard God's voice as a boy, anointed Israel's first kings, called 'a man of God'.", scripture: "1 Samuel 1-16", era: "Judges", imageIcon: "👂" },
    { name: "David", epithet: "Man After God's Own Heart", summary: "Shepherd boy who killed Goliath, king of Israel, psalmist, ancestor of Jesus.", scripture: "1 Samuel 16 - 1 Kings 2", era: "Kings", imageIcon: "🎸" },
    { name: "Solomon", epithet: "Wisest King", summary: "Built the Temple, wrote Proverbs and Ecclesiastes, but his heart turned in old age.", scripture: "1 Kings 3-11", era: "Kings", imageIcon: "👑" },
    { name: "Elijah", epithet: "Prophet of Fire", summary: "Defeated 450 prophets of Baal, called fire from heaven, taken up in a whirlwind.", scripture: "1 Kings 17-2 Kings 2", era: "Prophets", imageIcon: "🔥" },
    { name: "Elisha", epithet: "Double Portion", summary: "Successor to Elijah, performed twice as many miracles, including raising the dead.", scripture: "2 Kings 2-13", era: "Prophets", imageIcon: "🕊️" },
    { name: "Isaiah", epithet: "Evangelical Prophet", summary: "Foretold the virgin birth and suffering servant (Jesus), saw the Lord high and lifted up.", scripture: "Isaiah", era: "Prophets", imageIcon: "📖" },
    { name: "Jeremiah", epithet: "Weeping Prophet", summary: "Prophesied Judah's exile, known for his lamentations, preached repentance.", scripture: "Jeremiah, Lamentations", era: "Prophets", imageIcon: "😢" },
    { name: "Ezekiel", epithet: "Watchman", summary: "Prophesied to dry bones, saw visions of God's glory, called to be a watchman for Israel.", scripture: "Ezekiel", era: "Prophets", imageIcon: "🦴" },
    { name: "Daniel", epithet: "Man of Prayer", summary: "Thrown into lion's den, interpreted dreams, remained faithful in exile.", scripture: "Daniel", era: "Exile", imageIcon: "🦁" },
    { name: "Nehemiah", epithet: "Wall Builder", summary: "Led the rebuilding of Jerusalem's walls, a man of prayer and action.", scripture: "Nehemiah", era: "Restoration", imageIcon: "🧱" },
    
    // New Testament
    { name: "John the Baptist", epithet: "Forerunner", summary: "Prepared the way for Jesus, baptized in the wilderness, called 'greatest born of women'.", scripture: "Matthew 3, Luke 1,3", era: "NT", imageIcon: "🏜️" },
    { name: "Peter", epithet: "The Rock", summary: "Fisherman turned apostle, preached at Pentecost, first to take gospel to Gentiles.", scripture: "Matthew 16, Acts 2, 10", era: "Apostles", imageIcon: "🐟" },
    { name: "James", epithet: "Son of Thunder", summary: "First apostle martyred (by sword), brother of John, son of Zebedee.", scripture: "Acts 12:2", era: "Apostles", imageIcon: "⚔️" },
    { name: "John", epithet: "Beloved Disciple", summary: "Wrote Gospel, Revelation, and Epistles. Outlived all apostles, exiled to Patmos.", scripture: "Gospel of John, 1-3 John, Revelation", era: "Apostles", imageIcon: "🦅" },
    { name: "Paul", epithet: "Apostle to the Gentiles", summary: "Former persecutor, wrote 13 NT epistles, spread the gospel throughout Roman empire.", scripture: "Acts 9-28, Epistles", era: "Apostles", imageIcon: "✉️" },
    { name: "Stephen", epithet: "First Martyr", summary: "Full of faith and the Holy Spirit, saw heaven open before being stoned.", scripture: "Acts 6-7", era: "Apostles", imageIcon: "🪨" },
    { name: "Barnabas", epithet: "Son of Encouragement", summary: "Sold land to support the church, mentored Paul and Mark.", scripture: "Acts 4, 9, 13-15", era: "Apostles", imageIcon: "🤝" },
    { name: "Timothy", epithet: "Paul's True Son", summary: "Young pastor of Ephesus, recipient of two Pauline epistles.", scripture: "1-2 Timothy", era: "Apostles", imageIcon: "📜" },
    { name: "Luke", epithet: "Beloved Physician", summary: "Wrote the Gospel of Luke and Acts, accompanied Paul on many journeys.", scripture: "Luke, Acts", era: "Apostles", imageIcon: "🏥" },
    { name: "Mark", epithet: "Gospel Writer", summary: "Wrote the first Gospel, companion of Peter and Paul.", scripture: "Gospel of Mark", era: "Apostles", imageIcon: "✍️" },
    
    // Church History / Evangelical / Pentecostal Heroes
    { name: "Martin Luther", epithet: "Reformer", summary: "Nailed 95 Theses, restored justification by faith, translated Bible into German.", scripture: "Romans 1:17", era: "Reformation", imageIcon: "⚒️" },
    { name: "John Wesley", epithet: "Evangelical Revivalist", summary: "Preached 40,000 sermons, founded Methodism, said 'the world is my parish'.", scripture: "Romans 5:1", era: "Revival", imageIcon: "🔥" },
    { name: "Charles Wesley", epithet: "Hymnwriter", summary: "Wrote over 6,500 hymns including 'Hark! The Herald Angels Sing'.", scripture: "Colossians 3:16", era: "Revival", imageIcon: "🎵" },
    { name: "George Whitefield", epithet: "Grand Itinerant", summary: "Preached to millions on two continents, a key figure in the Great Awakening.", scripture: "Acts 8:4", era: "Revival", imageIcon: "📢" },
    { name: "Jonathan Edwards", epithet: "Theologian of Revival", summary: "Preached 'Sinners in the Hands of an Angry God', sparked First Great Awakening.", scripture: "Hebrews 10:31", era: "Revival", imageIcon: "📚" },
    { name: "Charles Spurgeon", epithet: "Prince of Preachers", summary: "Pastored Metropolitan Tabernacle (London), preached to 10,000 weekly.", scripture: "2 Timothy 4:2", era: "Preachers", imageIcon: "📖" },
    { name: "D.L. Moody", epithet: "Evangelist of the Masses", summary: "Preached to millions on both sides of the Atlantic, founded Moody Bible Institute.", scripture: "Proverbs 11:30", era: "Evangelism", imageIcon: "🌎" },
    { name: "Billy Graham", epithet: "America's Pastor", summary: "Preached to over 215 million people in 185 countries, advised presidents.", scripture: "John 3:16", era: "Evangelism", imageIcon: "🎤" },
    { name: "Charles Parham", epithet: "Pentecostal Pioneer", summary: "Founded Bethel Bible College where modern Pentecostalism began (Topeka, 1901).", scripture: "Acts 2:4", era: "Pentecostal", imageIcon: "🕊️" },
    { name: "William J. Seymour", epithet: "Azusa Street Leader", summary: "Led the Azusa Street Revival (1906-1909), spread Pentecostalism worldwide.", scripture: "Acts 2:1-4", era: "Pentecostal", imageIcon: "🔥" },
    { name: "Smith Wigglesworth", epithet: "Apostle of Faith", summary: "Known for healing miracles, raised several from the dead, preached with boldness.", scripture: "Mark 16:17-18", era: "Pentecostal", imageIcon: "🕊️" },
    { name: "Aimee Semple McPherson", epithet: "Pentecostal Evangelist", summary: "Founded the Foursquare Church, pioneered radio evangelism.", scripture: "Acts 1:8", era: "Pentecostal", imageIcon: "📻" },
    { name: "David du Plessis", epithet: "Mr. Pentecost", summary: "Brought Pentecostal-charismatic dialogue to mainstream churches worldwide.", scripture: "Ephesians 4:3", era: "Pentecostal", imageIcon: "🤝" },
    { name: "Derek Prince", epithet: "Bible Teacher", summary: "Wrote over 60 books on spiritual warfare, prayer, and Bible doctrine.", scripture: "2 Corinthians 10:4", era: "Teaching", imageIcon: "✍️" },
    { name: "Reinhard Bonnke", epithet: "Crusade Evangelist", summary: "Preached to over 79 million in Africa, saw countless salvations and miracles.", scripture: "Mark 16:15", era: "Evangelism", imageIcon: "🌍" },
    { name: "John G. Lake", epithet: "Healing Evangelist", summary: "Founded healing rooms in Spokane, saw thousands of documented healings.", scripture: "Acts 10:38", era: "Pentecostal", imageIcon: "🏥" },
    { name: "Oral Roberts", epithet: "Faith Healing Pioneer", summary: "Founded Oral Roberts University, brought healing evangelism to television.", scripture: "3 John 1:2", era: "Evangelism", imageIcon: "📺" },
    { name: "Kathryn Kuhlman", epithet: "Woman of Miracles", summary: "Known for healing services where the Holy Spirit moved powerfully.", scripture: "1 Corinthians 12:9", era: "Pentecostal", imageIcon: "✨" },
    { name: "T.L. Osborn", epithet: "Missionary Evangelist", summary: "Preached in 70+ countries, wrote 'Healing the Sick' — classic faith resource.", scripture: "James 5:14-15", era: "Evangelism", imageIcon: "🌐" },
    { name: "C.S. Lewis", epithet: "Mere Christian", summary: "Oxford scholar, author of 'Mere Christianity' and 'The Chronicles of Narnia'.", scripture: "Romans 1:20", era: "Apologetics", imageIcon: "📚" }
];

// Ensure we have 50 (already 50 listed above)
console.log(`Loaded ${MEN_OF_GOD.length} profiles of influential men of God`);
