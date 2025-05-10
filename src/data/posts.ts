export interface Post {
  id: string;
  username: string;
  userImage: string;
  location?: string;
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  };
  caption: string;
  likes: number;
  timestamp: string;
  comments: { username: string; text: string }[];
}

export const posts: Post[] = [
  {
    "id": "1",
    "username": "beautyamy.ai",
    "userImage": "https://i.ibb.co/ymN2m0CM/20250502-0208-image.png",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/RT9KnwC7/20250502-0136-image.png"
    },
    "caption": "Paradise found 🌴 #bali #vacation",
    "likes": 10343,
    "timestamp": "2 HOURS AGO",
    "comments": [
      { "username": "louise.310", "text": "What a beautiful girl 😍" },
      { "username": "cindy1225", "text": "wonderful body shape!" },
      { "username": "lindaisme", "text": "love u~" }
    ]
  },
  {
    "id": "2",
    "username": "fitness_guru",
    "userImage": "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "location": "Los Angeles, USA",
    "media": {
      "type": "video",
      "url": "https://player.vimeo.com/external/373239795.sd.mp4?s=30d44d50d6bc52e8125b41efb5f3d3f3c9f72f9e&profile_id=164&oauth2_token_id=57447761",
      "thumbnail": "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    "caption": "Morning workout routine! 💪 #fitness #motivation",
    "likes": 1542,
    "timestamp": "7 HOURS AGO",
    "comments": [
      { "username": "gym_rat", "text": "Beast mode! 💪" },
      { "username": "health_coach", "text": "So inspiring!" },
      { "username": "newbie_fitness", "text": "What's your routine?" },
      { "username": "fit_life", "text": "Goals!" }
    ]
  },
  {
    "id": "3",
    "username": "foodie",
    "userImage": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "location": "Gourmet Restaurant",
    "media": {
      "type": "image",
      "url": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    "caption": "Sunday brunch done right 🍳 #foodporn #brunch",
    "likes": 876,
    "timestamp": "5 HOURS AGO",
    "comments": [
      { "username": "chef_mike", "text": "Looks delicious!" },
      { "username": "brunch_lover", "text": "I need this recipe!" }
    ]
  },
  {
    "id": "4",
    "username": "adventure_jen",
    "userImage": "https://images.pexels.com/photos/1137457/pexels-photo-1137457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "location": "Sydney, Australia",
    "media": {
      "type": "image",
      "url": "https://images.pexels.com/photos/1749462/pexels-photo-1749462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    "caption": "Exploring the wonders of nature 🏞️ #adventure #hiking",
    "likes": 4300,
    "timestamp": "3 HOURS AGO",
    "comments": [
      { "username": "nature_lover", "text": "This view is stunning!" },
      { "username": "trail_master", "text": "Where is this?" }
    ]
  },
  {
    "id": "5",
    "username": "travel_bug",
    "userImage": "https://images.pexels.com/photos/220185/pexels-photo-220185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "location": "Tokyo, Japan",
    "media": {
      "type": "image",
      "url": "https://images.pexels.com/photos/3992890/pexels-photo-3992890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    "caption": "Exploring the vibrant city life in Tokyo 🌆 #cityscape #travel",
    "likes": 2750,
    "timestamp": "4 HOURS AGO",
    "comments": [
      { "username": "city_explorer", "text": "Love Tokyo!" },
      { "username": "wanderer_jp", "text": "What street is this?" }
    ]
  },
  {
    "id": "6",
    "username": "fashionista_anna",
    "userImage": "https://images.pexels.com/photos/987808/pexels-photo-987808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "location": "Milan, Italy",
    "media": {
      "type": "image",
      "url": "https://images.pexels.com/photos/1732834/pexels-photo-1732834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    "caption": "Chic vibes in Milan 💁‍♀️ #fashion #style",
    "likes": 6520,
    "timestamp": "6 HOURS AGO",
    "comments": [
      { "username": "fashion_lover", "text": "Such a stylish outfit!" },
      { "username": "italian_chic", "text": "Milan is the place for fashion!" }
    ]
  },
  {
    "id": "7",
    "username": "coffee_lover",
    "userImage": "https://images.pexels.com/photos/3767269/pexels-photo-3767269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "location": "Seoul, South Korea",
    "media": {
      "type": "image",
      "url": "https://images.pexels.com/photos/3661370/pexels-photo-3661370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    "caption": "Coffee and a good book ☕📖 #coffeetime #booklover",
    "likes": 2300,
    "timestamp": "8 HOURS AGO",
    "comments": [
      { "username": "caffeine_addict", "text": "Perfect combo!" },
      { "username": "book_worm", "text": "What book are you reading?" }
    ]
  },
  {
    "id": "8",
    "username": "gamer_chris",
    "userImage": "https://images.pexels.com/photos/4671557/pexels-photo-4671557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "location": "Online",
    "media": {
      "type": "image",
      "url": "https://images.pexels.com/photos/3389174/pexels-photo-3389174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    "caption": "Gaming with friends 🎮 #gamerlife #gaming",
    "likes": 1800,
    "timestamp": "1 HOURS AGO",
    "comments": [
      { "username": "pro_player", "text": "What’s your favorite game?" },
      { "username": "streaming_master", "text": "Let’s squad up sometime!" }
    ]
  },
  {
    "id": "9",
    "username": "musician_sarah",
    "userImage": "https://images.pexels.com/photos/2295278/pexels-photo-2295278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "location": "New York, USA",
    "media": {
      "type": "video",
      "url": "https://player.vimeo.com/external/373239795.sd.mp4?s=30d44d50d6bc52e8125b41efb5f3d3f3c9f72f9e&profile_id=164&oauth2_token_id=57447761",
      "thumbnail": "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    "caption": "My latest music video 🎶 #music #artist",
    "likes": 3450,
    "timestamp": "9 HOURS AGO",
    "comments": [
      { "username": "music_fan", "text": "I love your voice!" },
      { "username": "songwriter_123", "text": "Amazing video!" }
    ]
  },
  {
    "id": "10",
    "username": "chef_julia",
    "userImage": "https://images.pexels.com/photos/4975261/pexels-photo-4975261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://images.pexels.com/photos/1581440/pexels-photo-1581440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    "caption": "Delicious homemade pasta 🍝 #italianfood #chef",
    "likes": 5230,
    "timestamp": "10 HOURS AGO",
    "comments": [
      { "username": "foodie_girl", "text": "Yum, I’m starving now!" },
      { "username": "gourmet_chef", "text": "Looks mouthwatering!" }
    ]
  }
];
