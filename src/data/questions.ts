import { Question } from '../types';

export const questions: Question[] = [
  // E vs I questions (15 questions)
  {
    question: "At a party, you're most likely to:",
    options: [
      { text: "Work the room like a social butterfly 🦋", trait: "E" },
      { text: "Find the host's cat and become best friends 🐱", trait: "I" },
      { text: "Start a conga line 💃", trait: "E" },
      { text: "Guard the snack table like a dragon 🐉", trait: "I" }
    ]
  },
  {
    question: "Your ideal Friday night:",
    options: [
      { text: "Karaoke with 20 friends! 🎤", trait: "E" },
      { text: "Netflix, pajamas, and zero humans 📺", trait: "I" },
      { text: "Hosting a game night 🎲", trait: "E" },
      { text: "Reading a book in a blanket fort 📚", trait: "I" }
    ]
  },
  {
    question: "When your phone rings:",
    options: [
      { text: "Answer immediately! Could be fun! 📞", trait: "E" },
      { text: "Stare at it like it's a bomb 💣", trait: "I" },
      { text: "Video call them back 📹", trait: "E" },
      { text: "Text 'Can we just text?' 💬", trait: "I" }
    ]
  },
  {
    question: "After a long day, you recharge by:",
    options: [
      { text: "Calling friends to vent 📱", trait: "E" },
      { text: "Hiding under a blanket 🛏️", trait: "I" },
      { text: "Going out for drinks 🍻", trait: "E" },
      { text: "Taking a solo walk 🚶", trait: "I" }
    ]
  },
  {
    question: "In a group project, you:",
    options: [
      { text: "Volunteer to present! 🎭", trait: "E" },
      { text: "Do all the work alone at 2 AM 🌙", trait: "I" },
      { text: "Organize team meetings 📅", trait: "E" },
      { text: "Send detailed emails instead 📧", trait: "I" }
    ]
  },
  {
    question: "Your dream vacation:",
    options: [
      { text: "Group tour with new friends! 🚌", trait: "E" },
      { text: "Solo cabin in the woods 🏡", trait: "I" },
      { text: "Party cruise! 🚢", trait: "E" },
      { text: "Quiet beach with a book 🏖️", trait: "I" }
    ]
  },
  {
    question: "When meeting new people:",
    options: [
      { text: "Tell them your life story 📖", trait: "E" },
      { text: "Panic internally 😰", trait: "I" },
      { text: "Ask them 100 questions 🤔", trait: "E" },
      { text: "Smile and nod awkwardly 😊", trait: "I" }
    ]
  },
  {
    question: "Your energy level is highest:",
    options: [
      { text: "In a crowded room 👥", trait: "E" },
      { text: "Alone in your room 🚪", trait: "I" },
      { text: "At a concert 🎵", trait: "E" },
      { text: "During me-time 🧘", trait: "I" }
    ]
  },
  {
    question: "You process thoughts by:",
    options: [
      { text: "Talking it out loud 🗣️", trait: "E" },
      { text: "Writing in a journal 📝", trait: "I" },
      { text: "Calling everyone you know ☎️", trait: "E" },
      { text: "Thinking silently for hours 🤫", trait: "I" }
    ]
  },
  {
    question: "At a restaurant, you:",
    options: [
      { text: "Chat with the waiter 💬", trait: "E" },
      { text: "Point at the menu 👉", trait: "I" },
      { text: "Ask for recommendations 🍽️", trait: "E" },
      { text: "Order online to avoid talking 📱", trait: "I" }
    ]
  },
  {
    question: "Your workspace is:",
    options: [
      { text: "Open office - love the buzz! 🏢", trait: "E" },
      { text: "Noise-canceling headphones on 🎧", trait: "I" },
      { text: "Coffee shop with people ☕", trait: "E" },
      { text: "Home office, door locked 🔒", trait: "I" }
    ]
  },
  {
    question: "When you're excited, you:",
    options: [
      { text: "Tell everyone immediately! 📣", trait: "E" },
      { text: "Smile quietly to yourself 😊", trait: "I" },
      { text: "Post on social media 📱", trait: "E" },
      { text: "Write it in your diary 📔", trait: "I" }
    ]
  },
  {
    question: "Your idea of networking:",
    options: [
      { text: "Exciting opportunity! 🤝", trait: "E" },
      { text: "Necessary evil 😓", trait: "I" },
      { text: "Let's exchange contacts! 📇", trait: "E" },
      { text: "Can I just email? 📧", trait: "I" }
    ]
  },
  {
    question: "During lunch break:",
    options: [
      { text: "Eat with colleagues 🍱", trait: "E" },
      { text: "Eat alone, finally! 🥪", trait: "I" },
      { text: "Organize a lunch outing 🍕", trait: "E" },
      { text: "Eat at your desk 💻", trait: "I" }
    ]
  },
  {
    question: "You make friends by:",
    options: [
      { text: "Talking to everyone 👋", trait: "E" },
      { text: "Waiting for them to adopt you 🐶", trait: "I" },
      { text: "Joining group activities 🎯", trait: "E" },
      { text: "Bonding over shared interests 📚", trait: "I" }
    ]
  },

  // N vs S questions (15 questions)
  {
    question: "You prefer stories that are:",
    options: [
      { text: "Fantasy with dragons! 🐉", trait: "N" },
      { text: "Based on true events 📰", trait: "S" },
      { text: "Sci-fi with time travel ⏰", trait: "N" },
      { text: "Historical documentaries 🏛️", trait: "S" }
    ]
  },
  {
    question: "When following a recipe:",
    options: [
      { text: "Add random ingredients for fun 🎨", trait: "N" },
      { text: "Follow it exactly 📏", trait: "S" },
      { text: "Improvise wildly 🎭", trait: "N" },
      { text: "Measure everything precisely ⚖️", trait: "S" }
    ]
  },
  {
    question: "You're more interested in:",
    options: [
      { text: "What could be possible 🌟", trait: "N" },
      { text: "What actually exists 🏗️", trait: "S" },
      { text: "Future innovations 🚀", trait: "N" },
      { text: "Current facts 📊", trait: "S" }
    ]
  },
  {
    question: "When learning something new:",
    options: [
      { text: "Jump to the big picture 🖼️", trait: "N" },
      { text: "Start with step one 1️⃣", trait: "S" },
      { text: "Imagine possibilities 💭", trait: "N" },
      { text: "Focus on details 🔍", trait: "S" }
    ]
  },
  {
    question: "Your dream job involves:",
    options: [
      { text: "Creating new ideas 💡", trait: "N" },
      { text: "Practical hands-on work 🔧", trait: "S" },
      { text: "Innovation and vision 🎯", trait: "N" },
      { text: "Proven methods 📋", trait: "S" }
    ]
  },
  {
    question: "You trust:",
    options: [
      { text: "Your gut feeling 🔮", trait: "N" },
      { text: "What you can see 👀", trait: "S" },
      { text: "Intuition and hunches 🌙", trait: "N" },
      { text: "Facts and data 📈", trait: "S" }
    ]
  },
  {
    question: "When describing something:",
    options: [
      { text: "Use metaphors and analogies 🎭", trait: "N" },
      { text: "Stick to literal facts 📝", trait: "S" },
      { text: "Paint a vivid picture 🎨", trait: "N" },
      { text: "List specific details 📋", trait: "S" }
    ]
  },
  {
    question: "You're drawn to:",
    options: [
      { text: "Abstract concepts 🌌", trait: "N" },
      { text: "Concrete reality 🏔️", trait: "S" },
      { text: "Theoretical ideas 🧠", trait: "N" },
      { text: "Practical applications 🛠️", trait: "S" }
    ]
  },
  {
    question: "Your shopping style:",
    options: [
      { text: "Browse and get inspired ✨", trait: "N" },
      { text: "Buy exactly what's on the list 📝", trait: "S" },
      { text: "Imagine outfit possibilities 👗", trait: "N" },
      { text: "Check quality and price 💰", trait: "S" }
    ]
  },
  {
    question: "You remember:",
    options: [
      { text: "The overall impression 🌈", trait: "N" },
      { text: "Specific details 📌", trait: "S" },
      { text: "The feeling and vibe ✨", trait: "N" },
      { text: "Exact facts and figures 🔢", trait: "S" }
    ]
  },
  {
    question: "When giving directions:",
    options: [
      { text: "It's near that place with the thing 🤷", trait: "N" },
      { text: "Turn left at Main St, go 0.3 miles 📍", trait: "S" },
      { text: "You'll feel when you're close 🧭", trait: "N" },
      { text: "Use GPS coordinates 🗺️", trait: "S" }
    ]
  },
  {
    question: "You prefer art that's:",
    options: [
      { text: "Abstract and interpretive 🎨", trait: "N" },
      { text: "Realistic and detailed 🖼️", trait: "S" },
      { text: "Symbolic and meaningful 🌟", trait: "N" },
      { text: "Clear and precise 📐", trait: "S" }
    ]
  },
  {
    question: "Your approach to problems:",
    options: [
      { text: "Think outside the box 📦", trait: "N" },
      { text: "Use proven solutions ✅", trait: "S" },
      { text: "Brainstorm wild ideas 🌪️", trait: "N" },
      { text: "Follow best practices 📚", trait: "S" }
    ]
  },
  {
    question: "You're inspired by:",
    options: [
      { text: "Possibilities and potential 🌠", trait: "N" },
      { text: "Real achievements 🏆", trait: "S" },
      { text: "Future visions 🔮", trait: "N" },
      { text: "Current successes 📊", trait: "S" }
    ]
  },
  {
    question: "When reading instructions:",
    options: [
      { text: "Skim and wing it 🦅", trait: "N" },
      { text: "Read every word carefully 📖", trait: "S" },
      { text: "Figure it out as you go 🎲", trait: "N" },
      { text: "Follow step-by-step 👣", trait: "S" }
    ]
  },

  // T vs F questions (15 questions)
  {
    question: "When a friend is upset:",
    options: [
      { text: "Offer logical solutions 🧩", trait: "T" },
      { text: "Give them a hug 🤗", trait: "F" },
      { text: "Analyze the problem 🔍", trait: "T" },
      { text: "Listen and empathize 💕", trait: "F" }
    ]
  },
  {
    question: "You make decisions based on:",
    options: [
      { text: "Logic and reason 🧠", trait: "T" },
      { text: "How people feel ❤️", trait: "F" },
      { text: "Objective analysis 📊", trait: "T" },
      { text: "Personal values 🌟", trait: "F" }
    ]
  },
  {
    question: "In an argument, you:",
    options: [
      { text: "Debate with facts 📚", trait: "T" },
      { text: "Consider feelings 💭", trait: "F" },
      { text: "Win with logic 🏆", trait: "T" },
      { text: "Seek harmony 🕊️", trait: "F" }
    ]
  },
  {
    question: "You value:",
    options: [
      { text: "Truth and accuracy ✓", trait: "T" },
      { text: "Kindness and tact 💝", trait: "F" },
      { text: "Being right 🎯", trait: "T" },
      { text: "Being nice 😊", trait: "F" }
    ]
  },
  {
    question: "When giving feedback:",
    options: [
      { text: "Direct and honest 📢", trait: "T" },
      { text: "Gentle and encouraging 🌸", trait: "F" },
      { text: "Focus on improvements 📈", trait: "T" },
      { text: "Praise first 👏", trait: "F" }
    ]
  },
  {
    question: "You're more concerned with:",
    options: [
      { text: "Being fair ⚖️", trait: "T" },
      { text: "Being compassionate 💗", trait: "F" },
      { text: "Justice 👨‍⚖️", trait: "T" },
      { text: "Mercy 🙏", trait: "F" }
    ]
  },
  {
    question: "In a crisis, you:",
    options: [
      { text: "Stay calm and logical 🧊", trait: "T" },
      { text: "Comfort others first 🤲", trait: "F" },
      { text: "Find solutions 🔧", trait: "T" },
      { text: "Check if everyone's okay 💚", trait: "F" }
    ]
  },
  {
    question: "You're better at:",
    options: [
      { text: "Critical thinking 🤔", trait: "T" },
      { text: "Understanding emotions 💫", trait: "F" },
      { text: "Analyzing data 📉", trait: "T" },
      { text: "Reading people 👥", trait: "F" }
    ]
  },
  {
    question: "When someone's wrong:",
    options: [
      { text: "Correct them immediately ✋", trait: "T" },
      { text: "Let it slide to keep peace ☮️", trait: "F" },
      { text: "Explain why they're wrong 📝", trait: "T" },
      { text: "Consider their feelings 💭", trait: "F" }
    ]
  },
  {
    question: "You prefer movies that:",
    options: [
      { text: "Make you think 🧠", trait: "T" },
      { text: "Make you feel 😢", trait: "F" },
      { text: "Have plot twists 🔄", trait: "T" },
      { text: "Have emotional depth 💔", trait: "F" }
    ]
  },
  {
    question: "Your strength is:",
    options: [
      { text: "Objective reasoning 🎓", trait: "T" },
      { text: "Emotional intelligence 🌈", trait: "F" },
      { text: "Problem-solving 🧩", trait: "T" },
      { text: "Empathy 🤝", trait: "F" }
    ]
  },
  {
    question: "You're motivated by:",
    options: [
      { text: "Achievement and competence 🏅", trait: "T" },
      { text: "Harmony and connection 🔗", trait: "F" },
      { text: "Excellence 💎", trait: "T" },
      { text: "Relationships 👫", trait: "F" }
    ]
  },
  {
    question: "When criticized:",
    options: [
      { text: "Evaluate if it's valid 🔍", trait: "T" },
      { text: "Feel hurt 💔", trait: "F" },
      { text: "Defend with logic 🛡️", trait: "T" },
      { text: "Wonder if they still like you 😟", trait: "F" }
    ]
  },
  {
    question: "You'd rather be:",
    options: [
      { text: "Respected 🎖️", trait: "T" },
      { text: "Loved 💖", trait: "F" },
      { text: "Competent 💪", trait: "T" },
      { text: "Appreciated 🌺", trait: "F" }
    ]
  },
  {
    question: "Your communication style:",
    options: [
      { text: "Direct and clear 📍", trait: "T" },
      { text: "Warm and friendly 🌞", trait: "F" },
      { text: "Efficient ⚡", trait: "T" },
      { text: "Considerate 💝", trait: "F" }
    ]
  },

  // J vs P questions (15 questions)
  {
    question: "Your room is:",
    options: [
      { text: "Organized like a museum 🏛️", trait: "J" },
      { text: "Creative chaos 🌪️", trait: "P" },
      { text: "Everything has a place 📦", trait: "J" },
      { text: "Organized mess (you know where things are!) 🗺️", trait: "P" }
    ]
  },
  {
    question: "Planning a trip:",
    options: [
      { text: "Itinerary planned months ahead 📅", trait: "J" },
      { text: "Book flight, wing the rest ✈️", trait: "P" },
      { text: "Spreadsheet with backup plans 📊", trait: "J" },
      { text: "See where the wind takes you 🍃", trait: "P" }
    ]
  },
  {
    question: "Deadlines are:",
    options: [
      { text: "Finish a week early 📆", trait: "J" },
      { text: "What deadline? 😅", trait: "P" },
      { text: "Sacred and non-negotiable ⏰", trait: "J" },
      { text: "Suggestions, really 🤷", trait: "P" }
    ]
  },
  {
    question: "Your calendar looks like:",
    options: [
      { text: "Color-coded perfection 🌈", trait: "J" },
      { text: "What calendar? 📱", trait: "P" },
      { text: "Scheduled down to the minute ⏱️", trait: "J" },
      { text: "Vague ideas of plans 💭", trait: "P" }
    ]
  },
  {
    question: "When shopping:",
    options: [
      { text: "List, budget, done ✅", trait: "J" },
      { text: "Ooh, shiny! 🤩", trait: "P" },
      { text: "Stick to the plan 📝", trait: "J" },
      { text: "Explore and discover 🔍", trait: "P" }
    ]
  },
  {
    question: "You prefer:",
    options: [
      { text: "Routine and structure 🏗️", trait: "J" },
      { text: "Spontaneity and freedom 🦋", trait: "P" },
      { text: "Predictability 📊", trait: "J" },
      { text: "Flexibility 🤸", trait: "P" }
    ]
  },
  {
    question: "Starting a project:",
    options: [
      { text: "Plan everything first 📋", trait: "J" },
      { text: "Jump in and figure it out 🏊", trait: "P" },
      { text: "Create detailed outline 📑", trait: "J" },
      { text: "Start and see what happens 🎲", trait: "P" }
    ]
  },
  {
    question: "Your workspace:",
    options: [
      { text: "Everything in its place 📌", trait: "J" },
      { text: "Organized chaos 🎨", trait: "P" },
      { text: "Minimalist and tidy 🧹", trait: "J" },
      { text: "Creative clutter 🖍️", trait: "P" }
    ]
  },
  {
    question: "Making decisions:",
    options: [
      { text: "Decide quickly and move on ⚡", trait: "J" },
      { text: "Keep options open 🚪", trait: "P" },
      { text: "Commit and stick to it 🎯", trait: "J" },
      { text: "Maybe change your mind later 🔄", trait: "P" }
    ]
  },
  {
    question: "Your morning routine:",
    options: [
      { text: "Same every day ☀️", trait: "J" },
      { text: "Different every day 🌅", trait: "P" },
      { text: "Timed to perfection ⏰", trait: "J" },
      { text: "Depends on the vibe 🎵", trait: "P" }
    ]
  },
  {
    question: "Packing for a trip:",
    options: [
      { text: "List and pack days before 🧳", trait: "J" },
      { text: "Throw stuff in last minute 👕", trait: "P" },
      { text: "Organized packing cubes 📦", trait: "J" },
      { text: "Whatever fits 🎒", trait: "P" }
    ]
  },
  {
    question: "You feel best when:",
    options: [
      { text: "Everything is decided ✓", trait: "J" },
      { text: "Options are open 🌟", trait: "P" },
      { text: "Plans are set 📅", trait: "J" },
      { text: "Being spontaneous 🎭", trait: "P" }
    ]
  },
  {
    question: "Your to-do list:",
    options: [
      { text: "Detailed and prioritized 📝", trait: "J" },
      { text: "Mental notes (maybe) 🧠", trait: "P" },
      { text: "Checked off religiously ✅", trait: "J" },
      { text: "Suggestions for yourself 💡", trait: "P" }
    ]
  },
  {
    question: "When plans change:",
    options: [
      { text: "Stress! Need new plan! 😰", trait: "J" },
      { text: "Cool, new adventure! 🎉", trait: "P" },
      { text: "Reorganize everything 🔄", trait: "J" },
      { text: "Go with the flow 🌊", trait: "P" }
    ]
  },
  {
    question: "You work best:",
    options: [
      { text: "With clear deadlines 📆", trait: "J" },
      { text: "Under pressure (last minute!) ⏰", trait: "P" },
      { text: "Steady and planned 🐢", trait: "J" },
      { text: "Bursts of inspiration ⚡", trait: "P" }
    ]
  }
];
