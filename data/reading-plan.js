/**
 * DAILY BREAD READING PLAN - 365 Days Through the Bible
 * Complete year-long plan with weekly themes
 */

const READING_PLAN = {
    year: 2024,
    startDate: "January 1",
    description: "Read through the entire Bible in one year",
    weeks: [
        { week: 1, theme: "Beginnings", days: [
            { day: 1, title: "Creation", readings: ["Genesis 1-2"], focus: "God creates the heavens and the earth" },
            { day: 2, title: "The Fall", readings: ["Genesis 3-4"], focus: "Sin enters the world" },
            { day: 3, title: "Noah & The Flood", readings: ["Genesis 6-9"], focus: "God's judgment and mercy" },
            { day: 4, title: "The Tower of Babel", readings: ["Genesis 10-11"], focus: "Scattering of nations" },
            { day: 5, title: "Call of Abraham", readings: ["Genesis 12-13"], focus: "God's covenant promise" },
            { day: 6, title: "Abraham's Faith", readings: ["Genesis 15, 17"], focus: "Righteousness through faith" },
            { day: 7, title: "Sodom & Gomorrah", readings: ["Genesis 18-19"], focus: "Intercession and judgment" }
        ]},
        { week: 2, theme: "Patriarchs", days: [
            { day: 8, title: "Isaac's Birth", readings: ["Genesis 21-22"], focus: "The promised son" },
            { day: 9, title: "Jacob & Esau", readings: ["Genesis 25, 27"], focus: "Birthright and blessing" },
            { day: 10, title: "Jacob's Ladder", readings: ["Genesis 28-29"], focus: "Encounter with God" },
            { day: 11, title: "Jacob Wrestles", readings: ["Genesis 32-33"], focus: "Prevailing with God" },
            { day: 12, title: "Joseph's Dreams", readings: ["Genesis 37"], focus: "God's sovereign plan" },
            { day: 13, title: "Joseph in Egypt", readings: ["Genesis 39-41"], focus: "Faithfulness in trials" },
            { day: 14, title: "Joseph Revealed", readings: ["Genesis 42-45"], focus: "Forgiveness and reconciliation" }
        ]},
        { week: 3, theme: "Exodus & The Law", days: [
            { day: 15, title: "Moses' Birth", readings: ["Exodus 1-2"], focus: "God prepares a deliverer" },
            { day: 16, title: "The Burning Bush", readings: ["Exodus 3-4"], focus: "Called by God" },
            { day: 17, title: "Plagues of Egypt", readings: ["Exodus 7-10"], focus: "God's power over idols" },
            { day: 18, title: "Passover", readings: ["Exodus 11-12"], focus: "Lamb without blemish" },
            { day: 19, title: "Red Sea Crossing", readings: ["Exodus 13-14"], focus: "Salvation through the waters" },
            { day: 20, title: "Ten Commandments", readings: ["Exodus 19-20"], focus: "God's holy standards" },
            { day: 21, title: "The Tabernacle", readings: ["Exodus 25-27"], focus: "God dwells among His people" }
        ]},
        { week: 4, theme: "Wilderness & Wanderings", days: [
            { day: 22, title: "Golden Calf", readings: ["Exodus 32-34"], focus: "Idolatry and mercy" },
            { day: 23, title: "Offerings & Holiness", readings: ["Leviticus 1, 19"], focus: "A call to holiness" },
            { day: 24, title: "Day of Atonement", readings: ["Leviticus 16"], focus: "The scapegoat" },
            { day: 25, title: "Spies & Rebellion", readings: ["Numbers 13-14"], focus: "Faith vs. fear" },
            { day: 26, title: "Bronze Serpent", readings: ["Numbers 21"], focus: "Lifted up for healing" },
            { day: 27, title: "Balaam's Donkey", readings: ["Numbers 22-24"], focus: "God protects His people" },
            { day: 28, title: "Shema: Hear O Israel", readings: ["Deuteronomy 6-8"], focus: "Love the Lord your God" }
        ]},
        { week: 5, theme: "Conquest of Canaan", days: [
            { day: 29, title: "Joshua's Commission", readings: ["Joshua 1-2"], focus: "Be strong and courageous" },
            { day: 30, title: "Crossing the Jordan", readings: ["Joshua 3-4"], focus: "Memorial stones" },
            { day: 31, title: "Fall of Jericho", readings: ["Joshua 5-6"], focus: "Faith and obedience" },
            { day: 32, title: "Achan's Sin", readings: ["Joshua 7-8"], focus: "Hidden sin revealed" },
            { day: 33, title: "Sun Stands Still", readings: ["Joshua 10"], focus: "Prayer for the impossible" },
            { day: 34, title: "Land Divided", readings: ["Joshua 13-14"], focus: "Caleb's inheritance" },
            { day: 35, title: "Joshua's Farewell", readings: ["Joshua 23-24"], focus: "Choose this day" }
        ]},
        { week: 6, theme: "Judges & Ruth", days: [
            { day: 36, title: "Cycle of Sin", readings: ["Judges 1-3"], focus: "Israel's disobedience" },
            { day: 37, title: "Deborah & Barak", readings: ["Judges 4-5"], focus: "Women of faith" },
            { day: 38, title: "Gideon's Call", readings: ["Judges 6-7"], focus: "Mighty warrior" },
            { day: 39, title: "Jephthah's Vow", readings: ["Judges 10-12"], focus: "Careless promises" },
            { day: 40, title: "Samson's Strength", readings: ["Judges 13-14"], focus: "Nazirite vow" },
            { day: 41, title: "Samson's Fall", readings: ["Judges 16"], focus: "Strength in weakness" },
            { day: 42, title: "Ruth & Naomi", readings: ["Ruth 1-2"], focus: "Loyal love" },
            { day: 43, title: "Ruth & Boaz", readings: ["Ruth 3-4"], focus: "Kinsman redeemer" }
        ]},
        { week: 7, theme: "Kings & Prophets", days: [
            { day: 44, title: "Hannah's Prayer", readings: ["1 Samuel 1-2"], focus: "A mother's faith" },
            { day: 45, title: "Samuel's Call", readings: ["1 Samuel 3"], focus: "Speak, Lord" },
            { day: 46, title: "Ark Captured", readings: ["1 Samuel 4-6"], focus: "God's glory departs" },
            { day: 47, title: "Saul's Anointing", readings: ["1 Samuel 8-10"], focus: "A king like the nations" },
            { day: 48, title: "David Anointed", readings: ["1 Samuel 16"], focus: "Heart after God" },
            { day: 49, title: "David & Goliath", readings: ["1 Samuel 17"], focus: "The battle is the Lord's" },
            { day: 50, title: "Jonathan's Friendship", readings: ["1 Samuel 18-20"], focus: "Covenant love" }
        ]},
        { week: 8, theme: "Psalms of David", days: [
            { day: 51, title: "The Good Shepherd", readings: ["Psalm 23"], focus: "The Lord is my shepherd" },
            { day: 52, title: "A Clean Heart", readings: ["Psalm 51"], focus: "Create in me a clean heart" },
            { day: 53, title: "The Lord is My Light", readings: ["Psalm 27"], focus: "Whom shall I fear?" },
            { day: 54, title: "Bless the Lord", readings: ["Psalm 103"], focus: "Benefits of the Lord" },
            { day: 55, title: "Where Can I Go?", readings: ["Psalm 139"], focus: "Fearfully and wonderfully made" },
            { day: 56, title: "Praise the Lord", readings: ["Psalm 150"], focus: "Let everything praise" },
            { day: 57, title: "Messianic Psalms", readings: ["Psalm 22, 110"], focus: "Prophecies of Christ" }
        ]},
        { week: 9, theme: "Wisdom Literature", days: [
            { day: 58, title: "Wisdom Calls", readings: ["Proverbs 1-3"], focus: "Fear of the Lord" },
            { day: 59, title: "The Wise & Foolish", readings: ["Proverbs 8-10"], focus: "Choose wisdom" },
            { day: 60, title: "Words & Speech", readings: ["Proverbs 12, 15"], focus: "Taming the tongue" },
            { day: 61, title: "The Virtuous Woman", readings: ["Proverbs 31"], focus: "Wife of noble character" },
            { day: 62, title: "Meaningless!", readings: ["Ecclesiastes 1-3"], focus: "A time for everything" },
            { day: 63, title: "Fear God", readings: ["Ecclesiastes 11-12"], focus: "Whole duty of man" },
            { day: 64, title: "Song of Solomon", readings: ["Song 1-4"], focus: "Love, marriage, and Christ" }
        ]},
        { week: 10, theme: "Major Prophets", days: [
            { day: 65, title: "Isaiah's Vision", readings: ["Isaiah 6"], focus: "Holy, holy, holy" },
            { day: 66, title: "Unto Us a Child", readings: ["Isaiah 9, 11"], focus: "Prince of Peace" },
            { day: 67, title: "Suffering Servant", readings: ["Isaiah 52-53"], focus: "Pierced for our transgressions" },
            { day: 68, title: "New Heavens", readings: ["Isaiah 65-66"], focus: "New creation" },
            { day: 69, title: "Call of Jeremiah", readings: ["Jeremiah 1, 7"], focus: "Weeping prophet" },
            { day: 70, title: "New Covenant", readings: ["Jeremiah 31-33"], focus: "Law written on hearts" },
            { day: 71, title: "Lamentations", readings: ["Lamentations 3"], focus: "Great is Thy faithfulness" }
        ]},
        { week: 11, theme: "Ezekiel & Daniel", days: [
            { day: 72, title: "Valley of Dry Bones", readings: ["Ezekiel 37"], focus: "Resurrection power" },
            { day: 73, title: "Glory Departs & Returns", readings: ["Ezekiel 10, 43"], focus: "God's presence" },
            { day: 74, title: "River of Life", readings: ["Ezekiel 47"], focus: "Healing waters" },
            { day: 75, title: "Daniel's Resolution", readings: ["Daniel 1"], focus: "Purposed in heart" },
            { day: 76, title: "Fiery Furnace", readings: ["Daniel 3"], focus: "Fourth man in the fire" },
            { day: 77, title: "Lion's Den", readings: ["Daniel 6"], focus: "God shuts mouths of lions" },
            { day: 78, title: "Daniel's Vision", readings: ["Daniel 7, 9"], focus: "Son of Man" }
        ]},
        { week: 12, theme: "Minor Prophets", days: [
            { day: 79, title: "Hosea's Love", readings: ["Hosea 1-3"], focus: "God's faithful love" },
            { day: 80, title: "Jonah & the Whale", readings: ["Jonah 1-2"], focus: "Salvation is of the Lord" },
            { day: 81, title: "Nineveh Repents", readings: ["Jonah 3-4"], focus: "Compassion for all" },
            { day: 82, title: "Micah 6:8", readings: ["Micah 6-7"], focus: "Do justice, love mercy" },
            { day: 83, title: "Habakkuk's Watch", readings: ["Habakkuk 2-3"], focus: "Live by faith" },
            { day: 84, title: "Malachi's Rebuke", readings: ["Malachi 1-3"], focus: "Return to Me" },
            { day: 85, title: "The Sun of Righteousness", readings: ["Malachi 4"], focus: "Elijah's coming" }
        ]},
        { week: 13, theme: "The Gospels: Matthew", days: [
            { day: 86, title: "Genealogy of Jesus", readings: ["Matthew 1"], focus: "Son of David, Son of Abraham" },
            { day: 87, title: "Sermon on the Mount", readings: ["Matthew 5-7"], focus: "Beatitudes and Kingdom life" },
            { day: 88, title: "Kingdom Parables", readings: ["Matthew 13"], focus: "Parables of the Kingdom" },
            { day: 89, title: "Peter's Confession", readings: ["Matthew 16"], focus: "You are the Christ" },
            { day: 90, title: "Transfiguration", readings: ["Matthew 17"], focus: "Glimpse of glory" },
            { day: 91, title: "Olivet Discourse", readings: ["Matthew 24-25"], focus: "Signs of the end" },
            { day: 92, title: "Great Commission", readings: ["Matthew 28"], focus: "Go and make disciples" }
        ]},
        { week: 14, theme: "The Gospels: Mark & Luke", days: [
            { day: 93, title: "Servant Leadership", readings: ["Mark 10"], focus: "Whoever wants to be great" },
            { day: 94, title: "The Magnificat", readings: ["Luke 1"], focus: "Mary's song" },
            { day: 95, title: "Good Samaritan", readings: ["Luke 10"], focus: "Who is my neighbor?" },
            { day: 96, title: "Prodigal Son", readings: ["Luke 15"], focus: "Father's love" },
            { day: 97, title: "Zacchaeus", readings: ["Luke 19"], focus: "Salvation comes to the house" },
            { day: 98, title: "Last Supper", readings: ["Luke 22"], focus: "This is my body" },
            { day: 99, title: "Road to Emmaus", readings: ["Luke 24"], focus: "Hearts burning within" }
        ]},
        { week: 15, theme: "The Gospels: John", days: [
            { day: 100, title: "In the Beginning", readings: ["John 1"], focus: "The Word became flesh" },
            { day: 101, title: "New Birth", readings: ["John 3"], focus: "Born again" },
            { day: 102, title: "Woman at the Well", readings: ["John 4"], focus: "Living water" },
            { day: 103, title: "I AM", readings: ["John 8, 10"], focus: "Before Abraham, I AM" },
            { day: 104, title: "Resurrection of Lazarus", readings: ["John 11"], focus: "I am the Resurrection" },
            { day: 105, title: "Upper Room Discourse", readings: ["John 14-16"], focus: "The Comforter" },
            { day: 106, title: "High Priestly Prayer", readings: ["John 17"], focus: "That they may be one" }
        ]},
        { week: 16, theme: "Acts: Birth of the Church", days: [
            { day: 107, title: "Promise of the Spirit", readings: ["Acts 1"], focus: "Wait for the Promise" },
            { day: 108, title: "Pentecost", readings: ["Acts 2"], focus: "Baptism of the Holy Spirit" },
            { day: 109, title: "Lame Man Healed", readings: ["Acts 3-4"], focus: "In the name of Jesus" },
            { day: 110, title: "Ananias & Sapphira", readings: ["Acts 5"], focus: "Purity in the church" },
            { day: 111, title: "Stephen's Martyrdom", readings: ["Acts 6-7"], focus: "First Christian martyr" },
            { day: 112, title: "Conversion of Saul", readings: ["Acts 9"], focus: "Damascus Road" },
            { day: 113, title: "Cornelius' Household", readings: ["Acts 10"], focus: "Gentiles receive the Spirit" }
        ]},
        { week: 17, theme: "Paul's Missionary Journeys", days: [
            { day: 114, title: "First Missionary Journey", readings: ["Acts 13-14"], focus: "Sent by the Spirit" },
            { day: 115, title: "Jerusalem Council", readings: ["Acts 15"], focus: "Salvation by grace" },
            { day: 116, title: "Macedonian Call", readings: ["Acts 16"], focus: "Come over and help us" },
            { day: 117, title: "Paul in Athens", readings: ["Acts 17"], focus: "Unknown God" },
            { day: 118, title: "Ephesian Revival", readings: ["Acts 19"], focus: "Mighty growth of the Word" },
            { day: 119, title: "Paul's Arrest", readings: ["Acts 21-22"], focus: "Defense before the mob" },
            { day: 120, title: "Shipwreck & Rome", readings: ["Acts 27-28"], focus: "All aboard God's plan" }
        ]},
        { week: 18, theme: "Romans: The Gospel", days: [
            { day: 121, title: "Righteousness of God", readings: ["Romans 1-3"], focus: "All have sinned" },
            { day: 122, title: "Justified by Faith", readings: ["Romans 4-5"], focus: "Peace with God" },
            { day: 123, title: "Dead to Sin", readings: ["Romans 6-7"], focus: "Slaves of righteousness" },
            { day: 124, title: "No Condemnation", readings: ["Romans 8"], focus: "More than conquerors" },
            { day: 125, title: "God's Sovereignty", readings: ["Romans 9-11"], focus: "All Israel will be saved" },
            { day: 126, title: "Living Sacrifice", readings: ["Romans 12"], focus: "Be transformed" },
            { day: 127, title: "Love Fulfills the Law", readings: ["Romans 13-16"], focus: "Unity in Christ" }
        ]},
        { week: 19, theme: "Corinthians: Church Life", days: [
            { day: 128, title: "Wisdom of the Cross", readings: ["1 Corinthians 1-2"], focus: "Foolishness to the world" },
            { day: 129, title: "Spiritual Immaturity", readings: ["1 Corinthians 3-4"], focus: "Stewards of mysteries" },
            { day: 130, title: "Judgment & Discipline", readings: ["1 Corinthians 5-6"], focus: "Your body is a temple" },
            { day: 131, title: "Marriage & Singleness", readings: ["1 Corinthians 7"], focus: "Gifts of God" },
            { day: 132, title: "Spiritual Gifts", readings: ["1 Corinthians 12"], focus: "One body, many members" },
            { day: 133, title: "The Love Chapter", readings: ["1 Corinthians 13"], focus: "The greatest of these" },
            { day: 134, title: "Resurrection Chapter", readings: ["1 Corinthians 15"], focus: "Victory in Christ" }
        ]}
    ]
};

// Helper to get reading by day number (1-365)
function getReadingByDay(dayNumber) {
    let currentDay = 1;
    for (const week of READING_PLAN.weeks) {
        for (const day of week.days) {
            if (currentDay === dayNumber) {
                return { ...day, weekTheme: week.theme, weekNumber: week.week };
            }
            currentDay++;
        }
    }
    return null;
}

// Get number of days in plan
function getTotalDays() {
    return READING_PLAN.weeks.reduce((total, week) => total + week.days.length, 0);
}
