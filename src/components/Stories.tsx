import React from 'react';

interface StoryProps {
  username: string;
  imageUrl: string;
  isViewed?: boolean;
}

const Story: React.FC<StoryProps> = ({ username, imageUrl, isViewed = false }) => {
  return (
    <div className="flex flex-col items-center space-y-1 w-[70px]">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isViewed ? 'bg-gray-200' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'}`}>
        <div className="w-[58px] h-[58px] rounded-full border-2 border-white overflow-hidden bg-white">
          <img 
            src={imageUrl} 
            alt={username} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className="text-xs truncate w-full text-center">{username}</p>
    </div>
  );
};

const Stories: React.FC = () => {
  const stories = [
    { username: 'Your story', imageUrl: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isViewed: true },
    { username: 'janedoe', imageUrl: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { username: 'travel_guy', imageUrl: 'https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { username: 'photo.genius', imageUrl: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { username: 'hiking_adventures', imageUrl: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { username: 'foodie', imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { username: 'sunset_lover', imageUrl: 'https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 overflow-x-auto">
      <div className="flex space-x-4">
        {stories.map((story, index) => (
          <Story key={index} username={story.username} imageUrl={story.imageUrl} isViewed={story.isViewed} />
        ))}
      </div>
    </div>
  );
};

export default Stories;